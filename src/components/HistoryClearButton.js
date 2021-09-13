import { Button, Grid, makeStyles } from '@material-ui/core';
import React from 'react';

const useStyles = makeStyles({
  grid: {
    height: '5%',
    display: 'flex',
    alignItems: 'center',
  },
});

const HistoryClearButton = () => {
  const classes = useStyles();

  return (
    <Grid item xs={12} className={classes.grid}>
      <Button variant="contained" color="secondary" fullWidth>
        Clear History
      </Button>
    </Grid>
  );
};

export default HistoryClearButton;
