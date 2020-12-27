import { TextField } from "@material-ui/core";
import React, { FC } from "react";

type Props = {
  name: string;
  inputRef: any;
};

export const Input: FC<Props> = (props) => {
  return <TextField variant="outlined" autoFocus {...props} />;
};
