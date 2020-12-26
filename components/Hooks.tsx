import {
  Button,
  FormControl,
  MenuItem,
  Select,
  TextField,
} from "@material-ui/core";
import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";

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
            <Controller
              name={`hooks[${index}].name`}
              control={control}
              defaultValue="state"
              render={({ onChange, onBlur, ref }) => (
                <Select
                  label="Hooks"
                  onBlur={onBlur}
                  onChange={(e) => onChange(e.target.value)}
                  inputRef={ref}>
                  <MenuItem value="state">useState</MenuItem>
                  <MenuItem value="effect">useEffect</MenuItem>
                  <MenuItem value="ref">useRef</MenuItem>
                </Select>
              )}
            />
          </FormControl>
          <TextField
            name={`hooks[${index}].state`}
            inputRef={register}
            label="変数名など"
          />
          <Button onClick={() => remove(index)}>Delete</Button>
        </div>
      ))}
      <Button type="button" onClick={() => append({})}>
        append
      </Button>
    </>
  );
};
