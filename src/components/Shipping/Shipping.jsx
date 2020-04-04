import React from 'react';
import s from './Shipping.module.scss';
import { makeStyles, withTheme } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      display: 'flex',
      flexWrap: 'wrap',
      maxWidth: '560px',
    },
    textField: {
      //marginLeft: theme.spacing(1),
      marginTop: theme.spacing(3.14),
      width: '28ch',
      backgroundColor: 'transparent',
    },
    mRight: {
        marginLeft: theme.spacing(2),
    }
    
  }));
  

const Shipping = (props) => {
    const classes = useStyles();
    return (
        <div className={s.Shipping}>
            <div className={s.Shipping__tittle}>
                 Shipping address
            </div>
           <div className={s.Shipping__input}>
             <form className={classes.root} noValidate autoComplete="off">
                 <TextField className={classes.textField} required id="standard-required" label="First Name" />
                 <TextField className={`${classes.textField} ${classes.mRight}`} required id="standard-required" label="Last Name" />
                 <TextField required id="standard-required" label="Adress Line 1" fullWidth margin="normal"/>
                 <TextField id="standard-basic" label="Adress Line 2" fullWidth margin="normal" />
                 <TextField className={classes.textField} required id="standard-required" label="City" />
                 <TextField className={`${classes.textField} ${classes.mRight}`} id="standard-basic" label="State/Province/Region" />
                 <TextField className={classes.textField} required id="standard-required" label="Zip / Postal code" />
                 <TextField className={`${classes.textField} ${classes.mRight}`} required id="standard-required" label="Country" />
             </form>
           </div>
        </div>
    )
}

export default Shipping;