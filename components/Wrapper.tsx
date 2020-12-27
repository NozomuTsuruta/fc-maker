import { Grid, Typography } from "@material-ui/core";
import React from "react";
import { FC } from "react";

type Props = {
  title: string;
};

export const Wrapper: FC<Props> = ({ children, title }) => {
  return (
    <Grid item xs={12} md={4} lg={3}>
      <Typography component="h2" variant="h6" color="primary" gutterBottom>
        {title}
      </Typography>
      {children}
    </Grid>
  );
};
