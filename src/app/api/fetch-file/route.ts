import { readFileSync } from 'fs';
import { NextRequest, NextResponse } from 'next/server';
import nodePath from 'node:path';

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const filename = searchParams.get('filename');

    if (!filename) {
      return NextResponse.json(
        { error: 'Filename parameter is required' },
        { status: 400 }
      );
    }

    // Security: Only allow files from src directory
    if (!filename.startsWith('/src/')) {
      return NextResponse.json(
        { error: 'Access denied: Only src files are allowed' },
        { status: 403 }
      );
    }

    const filePath = nodePath.join(process.cwd(), filename);
    const fileContent = readFileSync(filePath, 'utf8');

    return NextResponse.json({ content: fileContent });
  } catch (error) {
    console.error('Failed to fetch file:', error);
    return NextResponse.json(
      { error: 'File not found or could not be read' },
      { status: 404 }
    );
  }
}
