import React from "react";
import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  root_root: {
    marginLeft: "10vw",
    marginRight: "10vw",
  },
  root: {
    minWidth: 250,
    maxWidth: 300,
    display: "inline-block",
    margin: "2vh",
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export function CurrencyPage() {
  const classes = useStyles();
  const curr = useSelector((state) => state.curr);
  console.log(curr);

  return (
    <div className={classes.root_root}>
      {curr.rates &&
        Object.entries(curr.rates).map(([key, value]) => (
          <Card className={classes.root}>
            <CardContent>
              <Typography variant="h4" component="h2">
                {key}
                <br />
                <br />
              </Typography>

              <Typography variant="h6" component="p">
                {value.toFixed(2)}
                <br />
                for 1 USD
              </Typography>
            </CardContent>
          </Card>
        ))}
    </div>
  );
}
