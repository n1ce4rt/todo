import * as React from 'react';
import Snackbar from '@mui/material/Snackbar';
import MuiAlert, { AlertProps } from '@mui/material/Alert';
import { useDispatch, useSelector } from 'react-redux';
import { setStatusAC } from '../../reducers/app-reducer';
import { rootReducerType } from '../../store/store-redux';


const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref,
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

export const  CustomizedSnackbars =() => {
  const status = useSelector((state: rootReducerType): boolean => state.status.status)
  const dispatch = useDispatch()

  

  const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      dispatch(setStatusAC(false))
    }
      dispatch(setStatusAC(false))
  };

  return (
      <Snackbar open={status} autoHideDuration={5000} onClose={handleClose}>
        <Alert onClose={handleClose} severity='error' sx={{ width: '100%' }}>
          Такая задача уже существует!
        </Alert>
      </Snackbar>
  );
}