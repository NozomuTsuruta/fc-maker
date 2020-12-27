import React from "react";
import { useFormContext } from "react-hook-form";
import { Input } from "./Input";
import { Wrapper } from "./Wrapper";

export const Name = () => {
  const { register } = useFormContext();
  return (
    <Wrapper title="Component Name">
      <Input
        inputRef={register({ required: true })}
        name="name"
      />
    </Wrapper>
  );
};
