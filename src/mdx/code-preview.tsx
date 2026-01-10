"use client";

import {
  transformerNotationDiff,
  transformerNotationHighlight,
} from "@shikijs/transformers";
import { CodeToHastOptionsCommon } from "@shikijs/types";
import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { useEffect, useMemo, useState } from "react";
import { codeToHtml } from "shiki";

import { Spinner } from "@/components/ui/spinner";
import { fetchFile } from "@/lib/fetch-file";
import { cn } from "@/utils/cn";

type Props = {
  path?: string;
  code?: string;
  collapsible?: boolean;
  removeExtraProps?: boolean;
  lang?: CodeToHastOptionsCommon["lang"];
  className?: string;
};

export const CodePreview = ({
  path,
  code,
  removeExtraProps = false,
  lang = "tsx",
  className,
}: Props) => {
  const [codeContent, setCodeContent] = useState(code);
  const [highlightedHtml, setHighlightedHtml] = useState<string | undefined>(
    undefined
  );

  useEffect(() => {
    if (!codeContent && path) {
      fetchFile(`/src/${path}.tsx`).then(setCodeContent);
    }
  }, [path, codeContent]);

  const filteredCode = useMemo(() => {
    if (!removeExtraProps) return codeContent;
    return codeContent?.replaceAll(/\s*\{\s*\.\.\.props\s*}\s*/g, "");
  }, [removeExtraProps, codeContent]);

  useEffect(() => {
    if (filteredCode)
      codeToHtml(filteredCode, {
        lang: lang,
        theme: "github-dark-default",
        transformers: [
          transformerNotationHighlight({ matchAlgorithm: "v3" }),
          transformerNotationDiff({ matchAlgorithm: "v3" }),
        ],
      }).then(setHighlightedHtml);
  }, [filteredCode, lang, codeContent]);

  if (!highlightedHtml) {
    return <Spinner className="mx-auto my-10 size-5" />;
  }

  return <DynamicCodeBlock lang="tsx" code={codeContent ?? ""} />;
};
