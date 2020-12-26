import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { Export } from "../components/Export";
import { Output } from "../components/Output";

export default function Home() {
  const methods = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <Export />
        <Output exportType="default" />
      </form>
    </FormProvider>
  );
}
