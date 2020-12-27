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
import styled from "styled-components";

export const Sidebar = () => {
  return (
    <StyledList subheader={<ListSubheader component="div">Menu</ListSubheader>}>
      <ListItem button>
        <ListItemIcon>
          <FiberNewRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Function Component" />
      </ListItem>
      <ListItem button disabled>
        <ListItemIcon>
          <ErrorOutlineRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="React Hook Form" />
      </ListItem>
      <ListItem button disabled>
        <ListItemIcon>
          <ErrorOutlineRoundedIcon />
        </ListItemIcon>
        <ListItemText primary="Styled Components" />
      </ListItem>
    </StyledList>
  );
};

const StyledList = styled(List)`
  max-width: 300px;
  text-overflow: ellipsis;
  margin-left: 10px;
`;
