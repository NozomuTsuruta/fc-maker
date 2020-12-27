import { Button, Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import styled from "styled-components";
import { Export } from "../components/Export";
import { Header } from "../components/Header";
import { Hooks } from "../components/Hooks";
import { Name } from "../components/Name";
import { Output } from "../components/Output";
import { Props } from "../components/Props";

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
    <Header>
      <StyledContainer maxWidth="md">
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
    </Header>
  );
}

const StyledContainer = styled(Container)`
  margin-top: 30px;
`;
