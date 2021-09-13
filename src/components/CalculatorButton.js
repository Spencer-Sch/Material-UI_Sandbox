import { Button, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  buttonStyles: {
    minWidth: '100%',
    height: '100%',
  },
  paper: {
    height: '100%',
  },
});

const CalculatorButton = () => {
  const classes = useStyles();

  return (
    <Grid item xs={3}>
      <Paper className={classes.paper}>
        <Button
          className={classes.buttonStyles}
          variant="contained"
          color="primary"
        >
          <Typography variant="h5">1</Typography>
        </Button>
      </Paper>
    </Grid>
  );
};

export default CalculatorButton;
