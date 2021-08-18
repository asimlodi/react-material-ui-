import { alpha, AppBar, Avatar, Badge, InputBase, makeStyles, Toolbar, Typography } from '@material-ui/core';
import { Cancel, Mail, Notifications, Search } from '@material-ui/icons';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
    toolbar:{
        display:"flex",
        justifyContent:"space-between"
    },
   logoLg :{
          display: "none",
          [theme.breakpoints.up("sm")]:{
              display: "block",
          }
   },
   logoSm :{
    display: "block",
    [theme.breakpoints.up("sm")]:{
        display: "none",
    },
   },
   search: {
       display:"flex",
       alignItems: "center",
       backgroundColor: alpha(theme.palette.common.white, 0.15),
       '&:hover': {
         backgroundColor: alpha(theme.palette.common.white, 0.25),
       },
       borderRedius:theme.shape.borderRadius,
       width: "50%",
       [theme.breakpoints.down("sm")]: {
        display: (props) => props.open ? "flex" : "none",
        width: "70%",
    },
   },
   input : {
     color: "white",
     marginLeft: theme.spacing(1),
   },
   cancel : {
     [theme.breakpoints.up("sm")]: {
       display: "none",
     }
   },
   searchButton :{
       marginRight: theme.spacing(2),
       [theme.breakpoints.up("sm")]: {
        display:"none",
    },
   },
   icons : {
      alignItems: "center",
      display: (props) => (props.open ? "none" : "flex"),
    },
   badge : {
     marginRight: theme.spacing(2),
   },
}));


const  Navbar = () =>  {
  const [open, setOpen] = useState(false);
  const  classes = useStyles({ open });
  return (
    <AppBar position="fixed">
        <Toolbar className={classes.toolbar}>
            <Typography variant="h6" className={classes.logoLg}>Asim khan</Typography>

            <Typography variant="h6"className={classes.logoSm}>Lodi</Typography>
            <div className={classes.search}>
              <Search />
              <InputBase placeholder="Search....." className={classes.input} />
              <Cancel  className={classes.cancel} onClick={() => setOpen(false)} />
            </div>
            <div className={classes.icons}>
              <Search className={classes.searchButton}
               onClick={() => setOpen(true)}
               />
              <Badge badgeContent={4} color="secondary" className={classes.badge}>
                  <Mail />
              </Badge>
              <Badge badgeContent={2} color="secondary" className={classes.badge}>
                  <Notifications />
              </Badge>
              <Avatar alt="Ready Sharp" src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fpbs.twimg.com%2Fprofile_images%2F1223549088173477888%2FM6uPkL0n_400x400.jpg&imgrefurl=https%3A%2F%2Ftwitter.com%2Fteamasim8811%2Fstatus%2F1228770956270686208&tbnid=ns0eGasJO5MRTM&vet=12ahUKEwjmhqSWl7fyAhUnitgFHXN4CAsQMygHegQIARAd..i&docid=4UJaw9hLB6FlaM&w=400&h=400&itg=1&q=asim%20lodi&ved=2ahUKEwjmhqSWl7fyAhUnitgFHXN4CAsQMygHegQIARAd"  />
            </div>
        </Toolbar>
    </AppBar>
  );
}

export default Navbar;
