import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import { useController, useFormContext } from "react-hook-form";
import { Wrapper } from "./Wrapper";

export const Export = () => {
  const { control } = useFormContext();
  const { field } = useController({
    name: "exportType",
    defaultValue: "named",
    control,
  });

  const radioList = ["named", "default"];

  return (
    <Wrapper title="Export Type">
      <RadioGroup>
        {radioList.map((name) => (
          <FormControlLabel
            control={<Radio color="primary" />}
            label={`${name[0].toUpperCase() + name.slice(1)} Export`}
            ref={field.ref}
            onChange={field.onChange}
            onBlur={field.onBlur}
            name={field.name}
            value={name}
            key={name}
          />
        ))}
      </RadioGroup>
    </Wrapper>
  );
};
