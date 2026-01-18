import { notFound } from 'next/navigation';
import { NextResponse, type NextRequest } from 'next/server';
import fs from 'node:fs/promises';
import nodePath from 'node:path';

export const revalidate = 604800; // 1 week
export const dynamic = 'force-static';

export async function GET(
  _req: NextRequest,
  { params }: { params: Promise<{ path?: string[] }> }
) {
  try {
    const { path } = await params;

    if (!path || path.length === 0) {
      return NextResponse.json(
        { error: 'Path parameter is required' },
        { status: 400 }
      );
    }

    // Security: Prevent directory traversal
    const sanitizedPath = path.filter(
      segment => segment && !segment.includes('..') && !segment.startsWith('.')
    );

    if (sanitizedPath.length !== path.length) {
      return NextResponse.json({ error: 'Invalid path' }, { status: 400 });
    }

    // Reconstruct the file path
    const fileName = sanitizedPath[sanitizedPath.length - 1];
    const dirPath = sanitizedPath.slice(0, -1);

    // Try different extensions
    const extensions = ['.tsx', '.ts', '.jsx', '.js'];
    let fileContent: string | null = null;

    for (const ext of extensions) {
      try {
        const testPath = nodePath.join(
          process.cwd(),
          'src',
          ...dirPath,
          fileName + ext
        );

        // Additional security check: ensure the resolved path is within src
        const resolvedPath = nodePath.resolve(testPath);
        const srcPath = nodePath.resolve(process.cwd(), 'src');

        if (!resolvedPath.startsWith(srcPath)) {
          return NextResponse.json({ error: 'Access denied' }, { status: 403 });
        }

        fileContent = await fs.readFile(resolvedPath, 'utf8');
        break;
      } catch {
        // Try next extension
        continue;
      }
    }

    if (!fileContent) {
      notFound();
    }

    return new NextResponse(fileContent, {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'Cache-Control': 'public, max-age=604800, immutable',
      },
    });
  } catch (error) {
    console.error('Error fetching component file:', error);
    return NextResponse.json(
      { error: 'Failed to fetch file' },
      { status: 500 }
    );
  }
}
