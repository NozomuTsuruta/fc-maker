import { TextField } from "@material-ui/core";
import React, { FC } from "react";
import styled from "styled-components";

type Props = {
  name: string;
  inputRef: any;
  label: string;
};

export const Input: FC<Props> = (props) => {
  return (
    <StyledTextField
      variant="outlined"
      autoFocus
      {...props}
    />
  );
};

const StyledTextField = styled(TextField)`
  min-width: 200px;
  margin-right: 20px;
`;
