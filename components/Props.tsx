import { Button, TextField } from "@material-ui/core";
import React from "react";
import { useFieldArray, useFormContext } from "react-hook-form";

export const Props = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "props",
  });
  return (
    <>
      {fields.map((item, index) => (
        <div key={item.id}>
          <TextField
            name={`props[${index}].name`}
            inputRef={register}
            label="props名"
          />
          <TextField
            name={`props[${index}].type`}
            inputRef={register}
            label="型"
          />
          <Button type="button" onClick={() => remove(index)}>
            Delete
          </Button>
        </div>
      ))}
      <Button type="button" onClick={() => append({})}>
        append
      </Button>
    </>
  );
};
