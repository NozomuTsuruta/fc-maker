import React, { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Markdown } from "./Markdown";

type Props = {
  name: string;
  exportType: "named" | "default";
  props: string;
  propsName: string;
  functions: string;
  hooks: string;
  jsx: string;
};

export const Output: FC<Partial<Props>> = ({
  name,
  exportType,
  props,
  functions,
  hooks,
  jsx,
  propsName,
}) => {
  const [text, setText] = useState<string>(`
  \`\`\`
  import React,{FC,${hooks ? hooks : ""}} from 'react'

  type Props = {
    ${props ? props : ""}
  }

  ${exportType === "named" ? "export " : ""}const ${name}:FC<Props> = (${
    propsName ? propsName : ""
  }) => {
      ${functions}

      return (
          ${jsx ? jsx : ""}
      )
  };

  ${exportType === "default" ? `export default ${name};` : ""}
  \`\`\`
  `);
  const [isResult, setIsResult] = useState(false);

  return (
    <>
      {isResult && (
        <>
          <Markdown value={text} />
          <CopyToClipboard text={text}>
            <button>Copy to clipboard with button</button>
          </CopyToClipboard>
        </>
      )}
      {!isResult && <button onClick={() => setIsResult(true)}>作成</button>}
    </>
  );
};
