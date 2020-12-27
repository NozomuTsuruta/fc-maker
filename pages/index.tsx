import { Button, Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Export } from "../components/Export";
import { Hooks } from "../components/Hooks";
import { Name } from "../components/Name";
import { Output } from "../components/Output";
import { Props } from "../components/Props";

export default function Home() {
  const methods = useForm();
  const [data, setData] = useState();

  const onSubmit = (data: any) => {
    console.log(data);
    setData(data);
  };

  return (
    <>
      <FormProvider {...methods}>
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <Container maxWidth="lg">
            <Grid container spacing={3} direction="column">
              <Name />
              <Export />
              <Props />
              <Hooks />
              <Button type="submit">SEND</Button>
            </Grid>
          </Container>
        </form>
      </FormProvider>
      {methods.formState.isSubmitted && <Output data={data} />}
    </>
  );
}
