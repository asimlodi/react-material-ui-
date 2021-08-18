import { Fab, Tooltip, makeStyles, 
Modal,Container, TextField, MenuItem, 
FormControlLabel , FormControl, RadioGroup , FormLabel , Radio, Snackbar,Button } from '@material-ui/core';
import { Add as AddIcon } from "@material-ui/icons";
import MuiAlert from '@material-ui/lab/Alert';
import { useState } from 'react';
const useStyles = makeStyles((theme) => ({
   fab: {
      position: "fixed",
      bottom: 20,
      right: 20,
   },
   container : {
     width: 500,
     height: 550,
     backgroundColor: "white",
     position: "absolute",
     top:0,
     bottom:0,
     left:0,
     right:0,
     margin: "auto",
     [theme.breakpoints.down("sm")]: {
         width: "100vh",
         height:"100vh",
     },
   },
   form: {
      padding: theme.spacing(2),
   },
   item : {
    marginBottom: theme.spacing(3),
   },
}));


function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const  Add = () =>  {
  const  classes = useStyles();
  const [open, setOpen] = useState(false);
  const [openAlert, setOpenAlert] = useState(false);

  const handleClose =(event, reason) => {
    if(reason === 'clickaway') {
      return;
    }
    setOpenAlert(false);
  };
  return (
    <>
  <Tooltip title="Add" aria-label="add" onClick={() => setOpen(true)}>
  <Fab color="secondary" className={classes.fab}>
    <AddIcon />
  </Fab>
</Tooltip>
<Modal open={open} >
    <Container className={classes.container}>
        <form className={classes.form} autoComplete="off" >
            <div className={classes.item}>
                <TextField id="standard-basic" label="Title" size="small" style={{ width: "100%"}}/>
            </div>
            <div className={classes.item}>
                <TextField id="outlined-multiline-static"
                multiline
                rows={4}
                defaultValue="Tell your story"
                variant="outlined"
                label="Description" 
                size="small" 
                style={{ width: "100%"}}/>
            </div>
            <div className={classes.item}>
                   <TextField select label="visibility" value="Public">
                     <MenuItem value="Public">Public</MenuItem>
                     <MenuItem value="Private">Private</MenuItem>
                     <MenuItem value="Unlisted">Unlist</MenuItem>
                   </TextField>
            </div>
            <div className={classes.item}>
            <FormControl component="fieldset">
            <FormLabel component="legend">Who can Comment</FormLabel>
            <RadioGroup aria-label="gender" name="gender1">
              <FormControlLabel value="female" control={<Radio size="small" />} label="Female" />
              <FormControlLabel value="male" control={<Radio size="small" />} label="Male" />
              <FormControlLabel value="other" control={<Radio size="small" />} label="Other" />
              <FormControlLabel value="disabled" disabled control={<Radio size="small" />} label="(Disabled option)" />
            </RadioGroup>
          </FormControl>
            </div>
            <div className={classes.item}>
              <Button variant="outlined" 
              color="primary" 
              style={{ marginRight:20}} 
              onClick={() => setOpenAlert(true)}
              >
                Create
              </Button>
              <Button variant="outlined" color="secondary" onClick={() => setOpen(false)}>Cancel</Button>
            </div>
        </form>
    </Container>
    </Modal>
          <Snackbar open={openAlert} 
          autoHideDuration={4000}
           onClose={handleClose}
           anchorOrigin= {{ vertical: 'bottom', horizontal: 'left' }}
           >
          <Alert onClose={handleClose} severity="success">
          This is a success message!
          </Alert>
          </Snackbar>
    </>
  );
}

export default Add;
