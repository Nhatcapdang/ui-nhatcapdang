import nextVitals from 'eslint-config-next/core-web-vitals';
import { defineConfig, globalIgnores } from 'eslint/config';

const eslintConfig = defineConfig([
  ...nextVitals,
  {
    files: ['src/**/*.tsx'],
    ignores: ['**/components/animate-ui/**'],
    rules: {
      'react/jsx-curly-brace-presence': [
        'error',
        { props: 'never', children: 'never' },
      ],
      'react/self-closing-comp': [
        'error',
        { component: true, html: true },
      ],
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '**/animate-ui/primitives/animate/tabs',
                '**/ui/tabs'
              ],
              message:
                'Use Tabs from "@/components/animate-ui/components/animate/tabs" instead of "@/components/animate-ui/primitives/animate/tabs" or "@/components/ui/tabs".',
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