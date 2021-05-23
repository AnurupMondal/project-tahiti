import React from 'react';

// Libraries
import { Button, makeStyles, Typography, Grid, Paper } from '@material-ui/core';
import { Youtube, Instagram } from 'react-feather';

// Assets
import insta1 from '../../assets/images/instagram/insta1.jpeg';
import insta2 from '../../assets/images/instagram/insta2.jpeg';
import insta3 from '../../assets/images/instagram/insta3.jpeg';
import insta4 from '../../assets/images/instagram/insta4.jpeg';
import insta5 from '../../assets/images/instagram/insta5.jpeg';
import insta6 from '../../assets/images/instagram/insta6.jpeg';
import insta7 from '../../assets/images/instagram/insta7.jpeg';
import insta8 from '../../assets/images/instagram/insta8.jpeg';
import insta9 from '../../assets/images/instagram/insta9.jpeg';

const INSTA_LINKS = [
  insta1,
  insta2,
  insta3,
  insta4,
  insta5,
  insta6,
  insta7,
  insta8,
  insta9,
];

const Header = ({ Icon, title, buttonText, onClick }) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <span
        className={classes.titleContainer}
        onClick={onClick}
        onKeyDown={onClick}
        role='button'
        tabIndex='0'
      >
        <Icon className={classes.icon} />

        <Typography variant='body1' className={classes.title}>
          {title}
        </Typography>
      </span>

      <Button className={classes.button} onClick={onClick}>
        {buttonText}
      </Button>
    </div>
  );
};

const Socials = () => {
  const classes = useStyles();

  const openYoutube = () =>
    window.open(
      'https://www.instagram.com/mondaymorningnitrofficial',
      '_blank',
    );
  const openInstagram = () =>
    window.open(
      'https://www.instagram.com/mondaymorningnitrofficial/',
      '_blank',
    );

  return (
    <div className={classes.root}>
      <Grid container spacing={4}>
        <Grid item sm={12} md={6} lg={6}>
          <Paper className={classes.card}>
            <Header
              Icon={Instagram}
              title='mondaymorningnitr'
              buttonText='Follow'
              onClick={openInstagram}
            />

            <Grid container spacing={3}>
              {INSTA_LINKS.map((link) => (
                <Grid
                  key={link}
                  item
                  xs={4}
                  className={classes.instaImageContainer}
                >
                  <img
                    src={link}
                    className={classes.instaImage}
                    alt='Monday Morning Instagram'
                    onClick={openInstagram}
                    onKeyDown={openInstagram}
                    // eslint-disable-next-line jsx-a11y/no-noninteractive-element-to-interactive-role
                    role='button'
                    tabIndex='0'
                  />
                </Grid>
              ))}
            </Grid>
          </Paper>
        </Grid>

        <Grid item sm={12} md={6} lg={6}>
          <Paper className={classes.card}>
            <Header
              Icon={Youtube}
              title='Monday Morning'
              buttonText='Subscribe'
              onClick={openYoutube}
            />
            {/* <div className={classes.iframeContainer}> */}
            <iframe
              width='520'
              height='292'
              src='https://www.youtube.com/embed/_KJlm1mafGo'
              title='YouTube video player'
              frameBorder='0'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
              allowFullScreen
              className={classes.largeVideo}
            />

            <div className={classes.subVideoContainer}>
              <iframe
                width='248'
                height='139'
                src='https://www.youtube.com/embed/btc-_kqkdpc'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className={classes.smallVideo}
              />
              <iframe
                width='248'
                height='139'
                src='https://www.youtube.com/embed/c6SglPpwmVg'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
                allowFullScreen
                className={classes.smallVideo}
              />
            </div>
            {/* </div> */}
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Socials;

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
  card: {
    width: '100%',
    height: '100%',
    padding: '20px',
    borderRadius: '10px',
    boxShadow:
      '0px 0px 1px rgba(0, 0, 0, 0.24), 0px 1px 3px rgba(0, 0, 0, 0.12)',
  },
  header: {
    width: '100%',
    height: 'auto',
    padding: '0px',
    marginBottom: '20px',

    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  icon: {},
  titleContainer: {
    display: 'flex',
    '&:hover': {
      cursor: 'pointer',
    },
  },
  title: {
    fontSize: '16px',
    fontWeight: '700',
    fontFamily: 'Source Sans Pro',
    lineHeight: '24px',
    marginLeft: '10px',
  },
  button: {
    background: 'rgba(0, 109, 204, 1)',
    borderRadius: '4px',
    width: 'auto',
    height: '28px',
    padding: '2px 14px',
    color: '#ffffff',

    fontFamily: 'Source Sans Pro',
    fontWeight: '400',
    fontSize: '18px',
    lineHeight: '28px',
    textAlign: 'center',
    textTransform: 'capitalize',
  },
  iframeContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    height: '100%',
  },
  largeVideo: {
    width: '100%',
    height: '66%',
    borderRadius: '10px',
    marginBottom: '10px',
  },
  subVideoContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  smallVideo: {
    width: '48%',
    height: '33%',
    borderRadius: '10px',
  },
  instaImage: {
    width: '100%',
    height: 'auto',
  },
  instaImageContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

    '&:hover': {
      cursor: 'pointer',
    },
  },
}));