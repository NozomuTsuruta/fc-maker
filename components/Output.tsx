import { CardHeader, IconButton, Card } from "@material-ui/core";
import React, { FC, useEffect, useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Markdown } from "./Markdown";
import { FormData } from "../pages/index";
import FileCopyIcon from "@material-ui/icons/FileCopy";

type Props = {
  data: FormData;
};

export const Output: FC<Partial<Props>> = ({ data }) => {
  const [text, setText] = useState<string>("");
  useEffect(() => {
    setText(`
    import React,{ FC${
      data?.hooks ? countHooks(data.hooks) : ""
    } } from 'react';
  
    ${
      data?.props
        ? `type Props = {\n${
            data?.props
              ? data.props
                  .map(({ name, type }) => `\t\t${name}: ${type};\n`)
                  .join("")
              : ""
          }\t};`
        : ""
    }
  
    ${data?.exportType === "named" ? "export " : ""}const ${data?.name}: FC${
      data?.props ? "<Props>" : ""
    } = ({ ${
      data?.props ? data.props.map(({ name }) => `${name}, `).join("") : ""
    }}) => {
        ${data?.hooks ? sortHooks(data.hooks) : ""}
  
        return (
            <div></div>
        )
    };
    ${data?.exportType === "default" ? `export default ${data?.name};` : ""}
    `);
  }, [data]);

  const countHooks = (hooks: { name: string; state: string }[]) => {
    let string = "";
    const arr = hooks.map(({ name }) => name);
    if (arr.includes("state")) {
      string += ", useState";
    }
    if (arr.includes("effect")) {
      string += ", useEffect";
    }
    if (arr.includes("ref")) {
      string += ", useRef";
    }
    return string;
  };

  const sortHooks = (hooks: { name: string; state: string }[]) => {
    let string = "";
    hooks.forEach(({ name, state }) => {
      if (name === "state") {
        string += `\t\tconst [${state}, set${
          state[0].toUpperCase() + state.slice(1)
        }] = useState();\n`;
      } else if (name === "effect") {
        string += `useEffect(() => {
          
        },[${state}]);\n`;
      } else if (name === "ref") {
        string += `\t\tconst ${state} = useRef();\n`;
      }
    });
    return string;
  };

  return data ? (
    <Card>
      <CardHeader
        action={
          <CopyToClipboard text={text}>
            <IconButton>
              <FileCopyIcon />
            </IconButton>
          </CopyToClipboard>
        }
        title="created! copy click right button 👉"
      />
      <Markdown value={`\`\`\`${text}`} />
    </Card>
  ) : (
    <div></div>
  );
};
