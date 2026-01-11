import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    files: ['src/**/*.tsx'],
    ignores: ['**/components/animate-ui/**'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '@/components/animate-ui/primitives/animate/tabs',
                '**/animate-ui/primitives/animate/tabs',
              ],
              message:
                'Use Tabs from "@/components/animate-ui/components/animate/tabs" instead of "@/components/animate-ui/primitives/animate/tabs".',
            },
            {
              group: ['@/components/ui/tabs', '**/ui/tabs'],
              message:
                'Use Tabs from "@/components/animate-ui/components/animate/tabs" instead of "@/components/ui/tabs".',
            },
          ],
        },
      ],
    },
  },
  globalIgnores([
    '.next/**',
    'out/**',
    'build/**',
    'next-env.d.ts',
    '.source/**',
  ]),

]);

export default eslintConfig;