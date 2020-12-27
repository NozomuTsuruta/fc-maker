import {
  AppBar,
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
import BuildRoundedIcon from "@material-ui/icons/BuildRounded";
import { styled } from "../utils";

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
      <HideOnScroll {...props}>
        <StyledAppBar>
          <Toolbar>
            <StyledTypography variant="h6">React Maker</StyledTypography>
            <BuildRoundedIcon />
          </Toolbar>
        </StyledAppBar>
      </HideOnScroll>
      <Toolbar id="back-to-top-anchor" />
      {props.children}
      <ScrollTop {...props}>
        <Fab size="medium">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
};

const StyledTypography = styled(Typography)({
  marginRight: 10,
});

const ButtonWrapper = styled("div")({
  position: "fixed",
  bottom: 16,
  right: 16,
});

const StyledAppBar = styled(AppBar)({
  backgroundColor: "#20232a",
});
