import {
  Button,
  FormControl,
  IconButton,
  InputLabel,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import { Controller, useFieldArray, useFormContext } from "react-hook-form";
import AddIcon from "@material-ui/icons/Add";
import ClearIcon from "@material-ui/icons/Clear";
import { Input } from "./Input";
import { Wrapper } from "./Wrapper";
import { styled } from "../utils";

export const Hooks = () => {
  const { control, register } = useFormContext();
  const { fields, append, remove } = useFieldArray({
    control,
    name: "hooks",
  });

  return (
    <Wrapper title="Hooks">
      {fields.map((item, index) => (
        <Wrapper
          key={item.id}
          title={`Hooks ${index + 1}`}
          variant="subtitle1"
          action={
            <IconButton onClick={() => remove(index)}>
              <ClearIcon />
            </IconButton>
          }>
          <FormControl variant="outlined">
            <InputLabel htmlFor="label">Name</InputLabel>
            <Controller
              name={`hooks[${index}].name`}
              control={control}
              defaultValue="state"
              render={({ onChange, onBlur, ref }) => (
                <StyledSelect
                  variant="outlined"
                  onBlur={onBlur}
                  onChange={(e) => onChange(e.target.value)}
                  autoFocus
                  label="Name"
                  labelId="label"
                  inputRef={ref}>
                  <MenuItem value="state">useState</MenuItem>
                  <MenuItem value="effect">useEffect</MenuItem>
                  <MenuItem value="ref">useRef</MenuItem>
                </StyledSelect>
              )}
            />
          </FormControl>
          <Input
            name={`hooks[${index}].state`}
            inputRef={register}
            label="Value"
          />
        </Wrapper>
      ))}
      <Button
        type="button"
        onClick={() => append({})}
        variant="outlined"
        startIcon={<AddIcon />}>
        <span>add</span>
      </Button>
    </Wrapper>
  );
};

const StyledSelect = styled(Select)({
  minWidth: 200,
  marginRight: 20,
});
