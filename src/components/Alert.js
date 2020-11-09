import MuiAlert from '@material-ui/lab/Alert';
import React from 'react';
function Alert(props) {
    return <MuiAlert className="MuiAlert" elevation={6} variant="filled" {...props} />;
  }
  
export default Alert;
