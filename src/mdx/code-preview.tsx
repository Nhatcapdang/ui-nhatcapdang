'use client';

import { CodeToHastOptionsCommon } from '@shikijs/types';
import { DynamicCodeBlock } from 'fumadocs-ui/components/dynamic-codeblock';
import { useEffect, useEffectEvent, useMemo, useState } from 'react';

import { Spinner } from '@/components/ui/spinner';
import { fetchFile } from '@/lib/fetch-file';

type Props = {
  path?: string;
  code?: string;
  collapsible?: boolean;
  removeExtraProps?: boolean;
  lang?: CodeToHastOptionsCommon['lang'];
};

export const CodePreview = ({
  path,
  code,
  removeExtraProps = false,
  lang = 'tsx',
}: Props) => {
  const [codeContent, setCodeContent] = useState(code);
  const [isLoading, setIsLoading] = useState(!!path && !code);

  const handleFetchFile = useEffectEvent(() => {
    if (!codeContent && path) {
      setIsLoading(true);
      fetchFile(`/src/${path}.tsx`)
        .then(setCodeContent)
        .catch(error => {
          console.error('Failed to fetch file:', error);
          setCodeContent('// Error loading file');
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  });

  useEffect(() => {
    handleFetchFile();
  }, []);

  const filteredCode = useMemo(() => {
    if (!removeExtraProps) return codeContent;
    return codeContent?.replaceAll(/\s*\{\s*\.\.\.props\s*}\s*/g, '');
  }, [removeExtraProps, codeContent]);

  if (isLoading || !filteredCode) {
    return <Spinner className="mx-auto my-10 size-5" />;
  }

  return <DynamicCodeBlock lang={lang} code={filteredCode} />;
};
