import { MenuItem, Select, TextField } from "@material-ui/core";
import React from "react";
import { Button, FormControl } from "react-bootstrap";
import { useFieldArray, useFormContext } from "react-hook-form";

export const Hooks = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "hooks",
  });
  return (
    <>
      {fields.map((item, index) => (
        <div key={item.id}>
          <FormControl>
            <Select name={`hooks[${index}].title`} label="Hooks">
              <MenuItem value="state">useState</MenuItem>
              <MenuItem value="effect">useEffect</MenuItem>
              <MenuItem value="ref">useRef</MenuItem>
            </Select>
          </FormControl>
          <TextField
            name={`hooks[${index}].name`}
            inputRef={register}
            label="変数名など"
          />
          <TextField
            name={`hooks[${index}].type`}
            inputRef={register}
            label="型"
          />
          <Button onClick={() => remove(index)}>Delete</Button>
        </div>
      ))}
      <Button onClick={() => append({})}>append</Button>
    </>
  );
};
