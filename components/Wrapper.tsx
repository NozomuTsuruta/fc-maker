import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  variant?: "h6" | "subtitle1";
};

export const Wrapper: FC<Props> = ({ children, title, variant = "h6" }) => {
  return (
    <Grid item xs={12}>
      <StyledPaper variant="outlined">
        <StyledTypography variant={variant}>
          {title}
        </StyledTypography>
        {children}
      </StyledPaper>
    </Grid>
  );
};

const StyledPaper = styled(Paper)`
  padding: 20px;
  margin-bottom: 20px;
`;

const StyledTypography = styled(Typography)`
  margin-bottom: 20px!important;
  line-height: 1;
`;
