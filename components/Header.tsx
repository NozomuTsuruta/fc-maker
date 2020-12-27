import {
  AppBar,
  CssBaseline,
  Fab,
  Slide,
  Toolbar,
  Typography,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import React, { FC } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { ReactElement } from "react";
import { ReactNode } from "react";
import styled from "styled-components";

type Props = {
  window?: () => Window;
  children: ReactNode;
};

const HideOnScroll: FC<{ window?: () => Window; children: ReactElement }> = ({
  window,
  children,
}) => {
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

const ScrollTop: FC<Props> = ({ window, children }) => {
  const trigger = useScrollTrigger({
    target: window ? window() : undefined,
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const anchor = (
      (event.target as HTMLDivElement).ownerDocument || document
    ).querySelector("#back-to-top-anchor");

    if (anchor) {
      anchor.scrollIntoView({ behavior: "smooth", block: "center" });
    }
  };

  return (
    <Zoom in={trigger}>
      <ButtonWrapper onClick={handleClick}>{children}</ButtonWrapper>
    </Zoom>
  );
};

export const Header: FC<Props> = (props) => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <StyledAppBar>
          <Toolbar>
            <Typography variant="h6">RFC Generator</Typography>
          </Toolbar>
        </StyledAppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      {props.children}
      <ScrollTop {...props}>
        <Fab color="secondary" size="small">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

const ButtonWrapper = styled.div`
  position: fixed;
  bottom: 16px;
  right: 16px;
`;

const StyledAppBar = styled(AppBar)`
  background-color: #20232a;
`;
