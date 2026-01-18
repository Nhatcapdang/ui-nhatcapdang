export const fetchFile = async (filename: string): Promise<string> => {
  // Check if we're in a browser environment
  if (typeof window !== 'undefined') {
    // Client-side: use fetch to call our API route

    const url = `/fetch-component/${filename}`;

    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(
          `Failed to fetch file: ${response.status} ${response.statusText}`
        );
      }

      return await response.text();
    } catch (error) {
      console.error('Client-side fetch error:', error);
      throw error;
    }
  } else {
    // Server-side: direct file system access
    const fs = await import('node:fs/promises');
    const nodePath = await import('node:path');

    try {
      const filePath = nodePath.join(process.cwd(), `src/${filename}.tsx`);
      const content = await fs.readFile(filePath, 'utf8');
      return content;
    } catch (error) {
      console.error('Server-side file read error:', error);
      throw new Error(`Failed to read file: ${filename}`);
    }
  }
};
