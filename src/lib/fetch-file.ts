'use server';

import { readFileSync } from 'fs';
import nodePath from 'node:path';

export const fetchFile = async (filename: string) => {
  return readFileSync(
    nodePath.join(process.cwd() + '/src/components/ui.tsx'),
    'utf8'
  );
};
