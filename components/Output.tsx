import { Button } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Markdown } from "./Markdown";

type Props = {
  data: any;
};

export const Output: FC<Partial<Props>> = ({ data }) => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    setText(`
    import React,{FC,${data?.hooks ? data.hooks : ""}} from 'react'
  
    type Props = {
      ${data?.props ? data.props : ""}
    }
  
    ${data?.exportType === "named" ? "export " : ""}const ${
      data?.name
    }:FC<Props> = (${data?.propsName ? data.propsName : ""}) => {
        ${data?.functions ? data.functions : ""}
  
        return (
            <div></div>
        )
    };
  
    ${data?.exportType === "default" ? `export default ${data?.name};` : ""}
    `);
  }, []);
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
