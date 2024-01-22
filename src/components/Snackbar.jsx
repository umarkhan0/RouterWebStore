import React from 'react';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars(props) {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    setOpen(props.inform.openh);
  }, [props.inform.openh]);

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    props.onClose(); // Close the Snackbar in the parent component
  };

  return (
    <div>
      <Snackbar  open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert
          onClose={handleClose}
          severity="success"
          variant="filled"
          sx={{ width: '100%' , backgroundColor: "#223f84" }}
          
        >
          {props.inform.title}
        </Alert>
      </Snackbar>
    </div>
  );
}
