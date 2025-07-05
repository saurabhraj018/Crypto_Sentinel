import React from 'react';
import { makeStyles } from '@material-ui/core';

// ✅ Create useStyles outside the component and use props
const useStyles = makeStyles(() => ({
  selectButton: {
    border: "1px solid gold",
    borderRadius: 5,
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    fontFamily: "Montserrat",
    cursor: "pointer",
    width: "22%",
    transition: "all 0.3s ease",
    "&:hover": {
      backgroundColor: "gold",
      color: "black",
    },
  },
}));

const SelectButton = ({ children, selected, onClick }) => {
  const classes = useStyles();

  return (
    <span
      onClick={onClick}
      className={classes.selectButton}
      style={{
        backgroundColor: selected ? "gold" : "",
        color: selected ? "black" : "",
        fontWeight: selected ? 700 : 500,
      }}
    >
      {children}
    </span>
  );
};

export default SelectButton;
