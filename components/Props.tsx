import { Button, IconButton } from "@material-ui/core";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { Input } from "./Input";
import { Wrapper } from "./Wrapper";

export const Props = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "props",
  });
  return (
    <Wrapper title="Props">
      {fields.map((item, index) => (
        <Wrapper key={item.id} title={`Props${index + 1}`} variant="subtitle1">
          <Input name={`props[${index}].name`} inputRef={register} />
          <Input name={`props[${index}].type`} inputRef={register} />
          <IconButton onClick={() => remove(index)}>
            <ClearIcon />
          </IconButton>
        </Wrapper>
      ))}
      <Button type="button" onClick={() => append({})}>
        <AddIcon />
        <span>追加する</span>
      </Button>
    </Wrapper>
  );
};
