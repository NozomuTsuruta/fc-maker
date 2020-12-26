import { FormControlLabel, Radio, RadioGroup } from "@material-ui/core";
import React from "react";
import { useController, useFormContext } from "react-hook-form";

export const Export = () => {
  const { control } = useFormContext();
  const { field } = useController({
    name: "exportType",
    defaultValue: "named",
    control,
  });

  const radioList = ["named", "default"];

  return (
    <RadioGroup>
      {radioList.map((name) => (
        <FormControlLabel
          control={<Radio />}
          label={`${name} export`}
          ref={field.ref}
          onChange={field.onChange}
          onBlur={field.onBlur}
          name={field.name}
          value={name}
        />
      ))}
    </RadioGroup>
  );
};
