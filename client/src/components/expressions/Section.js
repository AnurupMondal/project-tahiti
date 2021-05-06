import React from 'react';

//libraries
import { Box, Grid, makeStyles, useMediaQuery } from '@material-ui/core';

//components
import Title from '../widgets/Title';
import FeatureArticle from './FeatureArticle';
import SmallCard from './SmallCard';
import SmallArticleCard from '../widgets/SmallArticleCard';

//theme
import theme from '../../config/themes/light';

function Section({ heading, link }) {
  const matches = useMediaQuery('(min-width:600px');
  const classes = useStyles(theme);

  return (
    <div className={classes.root}>
      <Title heading={heading} link={link} />
      <Grid container spacing={4}>
        <Grid item sm={9}>
          <FeatureArticle className={classes.feature} />
        </Grid>
        <Grid item sm={3} className={classes.smallCards}>
          <Box>{matches ? <SmallCard /> : <SmallArticleCard />}</Box>
          <Box mt={3}>{matches ? <SmallCard /> : <SmallArticleCard />}</Box>
        </Grid>
      </Grid>
    </div>
  );
}

export default Section;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    marginTop: '2rem',
  },
  feature: {
    // height: '504px',
  },
  smallCards: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
}));