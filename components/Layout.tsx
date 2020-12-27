import { Grid } from "@material-ui/core";
import React from "react";
import { FC } from "react";
import { is_sp } from "../utils";
import { Header } from "./Header";
import { Sidebar } from "./Sidebar";

export const Layout: FC = ({ children }) => {
  return (
    <Header>
      <Grid container>
        {!is_sp() && (
          <Grid item sm={3}>
            <Sidebar />
          </Grid>
        )}
        <Grid item sm={9} xs={12}>
          {children}
        </Grid>
      </Grid>
    </Header>
  );
};
