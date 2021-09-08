import React from 'react';

import Container from '@material-ui/core/Container';
import { makeStyles, Paper, Typography, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles({
  paperStyles: {
    backgroundColor: '#ccc',
    marginTop: '3rem',
    padding: '1rem',
    height: '80vh',
  },
  buttonAreaStyles: {
    // flexWrap: 'wrap',
    border: 'solid white 1px',
    height: '70%',
  },
  buttonStyles: {
    minWidth: '100%',
    height: '100%',
  },
  historyStyles: {
    justifyContent: 'center',
    border: 'solid black 2px',
    // height: '500px',
    // margin: 'auto',
  },
  leftContainer: {
    backgroundColor: '#fff',
  },
  rightContainer: {
    backgroundColor: '#000',
  },
  containerBorder: {
    border: 'solid black 2px',
    // display: 'flex',
  },
});

function App() {
  const classes = useStyles();

  return (
    <Container maxWidth="lg">
      <Paper className={classes.paperStyles} elevation={4}>
        <Grid container spacing={1} style={{ height: '100%' }}>
          <Grid
            container
            item
            xs={8}
            spacing={1}
            justifyContent="space-between"
            style={{ border: 'solid orange 1px' }}
          >
            <Grid
              container
              item
              spacing={1}
              xs={12}
              style={{ border: 'solid pink 3px', height: '30%' }}
            >
              <Typography variant="h1">Output Area</Typography>
            </Grid>
            <Grid
              container
              item
              spacing={1}
              xs={12}
              className={classes.buttonAreaStyles}
            >
              <Grid style={{ border: 'solid black 1px' }} item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid style={{ border: 'solid black 1px' }} item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid style={{ border: 'solid black 1px' }} item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid style={{ border: 'solid black 1px' }} item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid style={{ border: 'solid black 1px' }} item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid style={{ border: 'solid black 1px' }} item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
              <Grid item xs={3}>
                <Paper style={{ height: '100%' }}>
                  <Button
                    className={classes.buttonStyles}
                    variant="contained"
                    color="primary"
                  >
                    1
                  </Button>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
          <Grid
            container
            item
            spacing={1}
            xs={4}
            className={classes.historyStyles}
          >
            <Typography variant="h3">History</Typography>
          </Grid>
        </Grid>
      </Paper>
    </Container>
  );
}

export default App;
