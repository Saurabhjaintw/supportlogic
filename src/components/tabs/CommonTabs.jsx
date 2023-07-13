import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core";

const useStyles = makeStyles({
  links: {
    textDecoration: "none",
    margin: "20px",
    fontSize: "20px",
    color: "blue",
    "&:hover": {
      color: "black",
    },
  },
  container: {
    height: "40px",
    width: "100%",
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    padding: "10px",
  },
});

export const CommonTabs = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Link className={classes.links} to="/">
        News India
      </Link>
      <Link className={classes.links} to="/au/au">
        News Australia
      </Link>
      <Link className={classes.links} to="/ca/ca">
        News Canada
      </Link>
    </div>
  );
};
