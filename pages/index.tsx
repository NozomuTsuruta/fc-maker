import { Button } from "@material-ui/core";
import React, { useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Export } from "../components/Export";
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
          <Name />
          <Export />
          <Props />
          <Button type="submit">SEND</Button>
        </form>
      </FormProvider>
      {methods.formState.isSubmitted && <Output data={data} />}
    </>
  );
}
