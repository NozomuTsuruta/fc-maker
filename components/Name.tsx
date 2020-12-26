import { TextField } from "@material-ui/core";
import React from "react";
import { useFormContext } from "react-hook-form";

export const Name = () => {
  const { register } = useFormContext();
  return (
    <>
      <TextField
        inputRef={register({ required: true })}
        name="name"
        autoFocus
      />
    </>
  );
};
