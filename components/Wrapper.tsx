import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
};

export const Wrapper: FC<Props> = ({ children, title }) => {
  return (
    <Grid item xs={12}>
      <StyledPaper variant="outlined">
        <Typography variant="h6" color="primary" gutterBottom>
          {title}
        </Typography>
        {children}
      </StyledPaper>
    </Grid>
  );
};

const StyledPaper = styled(Paper)`
  padding: 20px;
`;
