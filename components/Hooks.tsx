import {
  Button,
  FormControl,
  IconButton,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { Input } from "./Input";
import { Wrapper } from "./Wrapper";

export const Hooks = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "hooks",
  });

  return (
    <Wrapper title="Hooks">
      {fields.map((item, index) => (
        <div key={item.id}>
          <FormControl>
            <Controller
              name={`hooks[${index}].name`}
              control={control}
              defaultValue="state"
              render={({ onChange, onBlur, ref }) => (
                <Select
                  variant="outlined"
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
          <Input name={`hooks[${index}].state`} inputRef={register} />
          <IconButton onClick={() => remove(index)}>
            <ClearIcon />
          </IconButton>
        </div>
      ))}
      <Button type="button" onClick={() => append({})}>
        <AddIcon />
        <span>追加する</span>
      </Button>
    </Wrapper>
  );
};
