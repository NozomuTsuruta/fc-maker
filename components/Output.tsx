import { Button } from "@material-ui/core";
import React, { FC, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Markdown } from "./Markdown";

type Props = {
  data: any;
};

export const Output: FC<Partial<Props>> = ({ data }) => {
  const [text, setText] = useState<string>(`
  import React,{FC,${data?.hooks ? data.hooks : ""}} from 'react'

  ${data?.props ? `type Props = {\n${data?.props ? data.props.map(({name,type}:any)=>`\t${name}: ${type};\n`).join('') : ""}  }`:""}

  ${data?.exportType === "named" ? "export " : ""}const ${
    data?.name
  }:FC${data?.props ?"<Props>":""} = (${data?.props ? data.props.map(({name}:any)=>`${name}, `).join('') : ""}) => {
      ${data?.functions ? data.functions : ""}

      return (
          <div></div>
      )
  };
  ${data?.exportType === "default" ? `export default ${data?.name};` : ""}
  `);
  const [isResult, setIsResult] = useState(false);


  return (
    <>
      {isResult && (
        <>
          <Markdown value={`\`\`\`${text}`} />
          <CopyToClipboard text={text}>
            <Button>Copy to clipboard with button</Button>
          </CopyToClipboard>
        </>
      )}
      {!isResult && <Button onClick={() => setIsResult(true)}>作成</Button>}
    </>
  );
};
