import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch } from 'react-redux';
import { setStatusAC } from '../../reducers/app-reducer';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const  CustomizedSnackbars =() => {
  
  const dispatch = useDispatch()

  

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      dispatch(setStatusAC(false))
    }
    dispatch(setStatusAC(false))
  };

  return (
      <Snackbar open={true} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          Такая задача уже существует!
        </Alert>
      </Snackbar>
  );
}