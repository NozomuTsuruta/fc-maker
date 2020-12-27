import {
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  ListSubheader,
} from "@material-ui/core";
import React from "react";
import ErrorOutlineRoundedIcon from "@material-ui/icons/ErrorOutlineRounded";
import FiberNewRoundedIcon from "@material-ui/icons/FiberNewRounded";

export const Sidebar = () => {
  return (
    <List
      component="nav"
      subheader={<ListSubheader component="div">Menu</ListSubheader>}>
      <ListItem button>
        <ListItemIcon>
          <FiberNewRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Function Component" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ErrorOutlineRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="React Hook Form" />
      </ListItem>
      <ListItem button>
        <ListItemIcon>
          <ErrorOutlineRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Styled Components" />
      </ListItem>
    </List>
  );
};
