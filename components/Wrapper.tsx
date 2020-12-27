import { Grid, Paper, Typography } from "@material-ui/core";
import React from "react";
import { FC } from "react";
import styled from "styled-components";

type Props = {
  title: string;
  variant?: "h6" | "subtitle1";
  action?: JSX.Element;
};

export const Wrapper: FC<Props> = ({
  children,
  title,
  variant = "h6",
  action,
}) => {
  return (
    <Grid item xs={12}>
      <StyledPaper variant="outlined">
        <Title>
          <Typography variant={variant} color="primary">
            {title}
          </Typography>
          {action}
        </Title>
        {children}
      </StyledPaper>
    </Grid>
  );
};

const StyledPaper = styled(Paper)`
  padding: 20px;
`;

const Title = styled.div`
  display: flex;
  align-content: center;
`;