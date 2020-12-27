import { Button } from "@material-ui/core";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";
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
        <div key={item.id}>
          <Input name={`props[${index}].name`} inputRef={register} />
          <Input name={`props[${index}].type`} inputRef={register} />
          <Button type="button" onClick={() => remove(index)}>
            Delete
          </Button>
        </div>
      ))}
      <Button type="button" onClick={() => append({})}>
        append
      </Button>
    </Wrapper>
  );
};
