import React from 'react';

// libraries
import { makeStyles, Container, Grid, Typography } from '@material-ui/core';

// Components
import ArticleCard from '../widgets/ArticleCard';

const RecommendedArticles = () => {
  const classes = useStyles();
  return (
    <div className={classes.wrapper}>
      <Container>
        <div className={classes.titleWrapper}>
          <Typography variant='h2' className={classes.title}>
            Reading based on your history
          </Typography>
          <div className={classes.underline}></div>
        </div>
        <Grid container spacing={4}>
          {[0, 1, 2].map((key) => {
            return (
              <Grid key={key} item sm={4}>
                <ArticleCard />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </div>
  );
};
export default RecommendedArticles;

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: '2rem',
    backgroundColor: theme.palette.primary.blue10,
    paddingTop: '2rem',
    paddingBottom: '2rem',
  },
  titleWrapper: {
    display: 'flex',
    marginBottom: '20px',
  },
  title: {
    display: 'inline-block',
  },
  underline: {
    borderBottom: '1px solid black',
    marginLeft: '40px',
    width: '100%',
  },
}));
