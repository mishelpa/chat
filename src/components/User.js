import React from 'react';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import { deepOrange, deepPurple } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
  orange: {
    color: theme.palette.getContrastText(deepOrange[500]),
    backgroundColor: deepOrange[500],
}}));

export default function User({user}) {

  const logo = user.slice(0,2).toUpperCase();
  const classes = useStyles();

  return (
    <div className="d-flex justify-content-center" >
      <Avatar className={classes.orange}>{logo}</Avatar>
      <h2 className="ml-2">{user}</h2>
    </div>
  );
}