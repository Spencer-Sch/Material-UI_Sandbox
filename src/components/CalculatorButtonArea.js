import { Button, Grid, makeStyles, Paper } from '@material-ui/core';
import React from 'react';
import CalculatorButton from './CalculatorButton';

const useStyles = makeStyles({
  buttonAreaStyles: {
    // height: '70%',
  },
});

const CalculatorButtonArea = () => {
  const classes = useStyles();
  return (
    <Grid
      container
      item
      spacing={1}
      xs={12}
      className={classes.buttonAreaStyles}
    >
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
      <CalculatorButton />
    </Grid>
  );
};

export default CalculatorButtonArea;
