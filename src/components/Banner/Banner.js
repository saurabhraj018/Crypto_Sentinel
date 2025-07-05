import React from 'react';
import { Container, makeStyles, Typography } from '@material-ui/core';
// import Carousel from './Carousel';  // ❌ Commented out to remove left coin images
import { CryptoState } from '../../CryptoContext';

const useStyles = makeStyles(() => ({
  banner: {
    backgroundImage: "url(./banner2.jpg)",
  },
  bannerContent: {
    height: 400,
    display: "flex",
    flexDirection: "column",
    paddingTop: 25,
    justifyContent: "center", // ✅ Centered since carousel is removed
  },
  tagline: {
    textAlign: "center",
    fontFamily: "Montserrat",
  },
}));

const Banner = () => {
  const classes = useStyles();
  const { currency } = CryptoState();

  return (
    <div className={classes.banner}>
      <Container className={classes.bannerContent}>
        <div className={classes.tagline}>
          <Typography
            variant="h2"
            style={{ fontWeight: "bold", marginBottom: 15 }}
          >
            Cryptolens
          </Typography>
          <Typography
            variant="subtitle2"
            style={{ color: "darkgrey", textTransform: "capitalize" }}
          >
            Zoom in on your favorite crypto with clarity
          </Typography>
        </div>

        {/* ❌ Removed <Carousel key={currency} /> */}
      </Container>
    </div>
  );
};

export default Banner;
