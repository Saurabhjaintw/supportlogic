import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";
import dayjs from "dayjs";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { Link } from "react-router-dom";

const useStyles = makeStyles({
  root: {
    width: 300,
    height: 350,
  },
  media: {
    height: 140,
  },
  info: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  typo: {
    fontSize: 18,
  },
  content: {
    height: 130,
  },
  links: {
    textDecoration: "none",
  },
  like: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});

export const CommonCard = ({ data, search, onLike, onHide }) => {
  const classes = useStyles();
  return (
    <>
      {data?.title.toLowerCase().includes(search) && (
        <Card className={classes.root}>
          <Link to={data?.url} target="_blank" className={classes.links}>
            <CardMedia className={classes.media} image={data.image} />
            <CardContent className={classes.content}>
              <Typography
                className={classes.typo}
                gutterBottom
                variant="h6"
                component="h6"
              >
                {data.title}
              </Typography>
              <div className={classes.info}>
                <Typography variant="body2" color="textSecondary" component="p">
                  Author - {data.source.name}
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                  Published At - {dayjs(data.publishedAt).format("DD/MM/YYYY")}
                </Typography>
              </div>
            </CardContent>
          </Link>
          <CardActions>
            <div className={classes.like} onClick={onLike}>
              <FavoriteIcon color="error" />
              {data.like}
            </div>
          </CardActions>
        </Card>
      )}
    </>
  );
};
