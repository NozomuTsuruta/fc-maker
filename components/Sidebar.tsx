import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import React from "react";
import FiberNewRoundedIcon from "@material-ui/icons/FiberNewRounded";
import { styled } from "../utils";
import Router from "next/router";

export const Sidebar = () => {
  return (
    <StyledList subheader={<ListSubheader component="div">Menu</ListSubheader>}>
      <ListItem button>
        <ListItemIcon onClick={() => Router.push("/")}>
          <FiberNewRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Function Component" />
      </ListItem>
    </StyledList>
  );
};

const StyledList = styled(List)({
  maxWidth: 300,
  textOverflow: "ellipsis",
  marginLeft: 10,
});
