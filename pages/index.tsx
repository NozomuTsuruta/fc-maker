import { Button, Grid, Container } from "@material-ui/core";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Export } from "../components/Export";
import { Hooks } from "../components/Hooks";
import { Name } from "../components/Name";
import { Output } from "../components/Output";
import { Props } from "../components/Props";
import { styled } from "../utils/index";

export type FormData = {
  name: string;
  exportType: "named" | "default";
  props: { name: string; type: string }[];
  hooks: { name: string; state: string }[];
};

export default function Home() {
  const methods = useForm<FormData>();
  const [data, setData] = useState<FormData>();

  const onSubmit = (data: FormData) => {
    console.log(data);
    setData(data);
  };

  return (
    <StyledContainer>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Grid container spacing={1} direction="column">
            <Name />
            <Export />
            <Props />
            <Hooks />
            <Button type="submit">SEND</Button>
          </Grid>
        </form>
      </FormProvider>
      {methods.formState.isSubmitted && <Output data={data} />}
    </StyledContainer>
  );
}

const StyledContainer = styled(Container)({
  padding: "30px 150px",
  backgroundColor: "#f5f5f5",
});
