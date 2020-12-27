import {
  AppBar,
  createStyles,
  CssBaseline,
  Fab,
  makeStyles,
  Slide,
  Theme,
  Toolbar,
  Typography,
  useScrollTrigger,
  Zoom,
} from "@material-ui/core";
import React, { FC } from "react";
import KeyboardArrowUpIcon from "@material-ui/icons/KeyboardArrowUp";
import { ReactElement } from "react";
import { ReactNode } from "react";

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "fixed",
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    },
  })
);

const ScrollTop: FC<Props> = ({ window, children }) => {
  const classes = useStyles();
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
      <div onClick={handleClick} className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
};

export const Header: FC<Props> = (props) => {
  return (
    <>
      <CssBaseline />
      <HideOnScroll {...props}>
        <AppBar>
          <Toolbar>
            <Typography variant="h6">RFC Generator</Typography>
          </Toolbar>
        </AppBar>
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
