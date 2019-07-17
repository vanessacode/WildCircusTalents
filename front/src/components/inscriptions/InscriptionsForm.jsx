import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const currencies = [
  {
    value: 'PRESENTER',
    label: 'PRESENTER',
  },
  {
    value: 'CLOWN',
    label: 'CLOWN',
  },
  {
    value: 'JUGGLER',
    label: 'JUGGLER',
  },
  {
    label: 'ACROBAT',
    value: 'ACROBAT',
  },
  {
    value: 'DANCER',
    label: 'DANCER',
  },
];

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: 16,
  },
  menu: {
    width: 200,
  },
}));

export default function InscriptionsForm() {
  const classes = useStyles();
  //   const [values, setValues] = React.useState({
  //     name: 'Your first name here',
  //     age: '',
  //     multiline: 'Controlled',
  //     currency: 'EUR',
  //   });

  //   const handleChange = (name) => (event) => {
  //     setValues({ ...values, [name]: event.target.value });
  //   };

  return (
    <div style={{ padding: 30 }}>
      <form className={classes.container} noValidate autoComplete="off">
        <TextField
          required
          id="filled-firstName"
          label="First Name"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
          variant="filled"
        />
        <TextField
          required
          id="filled-lastName"
          label="Last Name"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
          variant="filled"
        />

        <TextField
          required
          id="filled-email-input"
          label="Email"
          className={classes.textField}
          type="email"
          name="email"
          autoComplete="email"
          margin="normal"
          variant="filled"
        />

        <TextField
          id="filled-phone"
          label="Phone Number"
          className={classes.textField}
          // value={values.name}
          // onChange={handleChange('name')}
          margin="normal"
          variant="filled"
        />

        <TextField
          id="filled-select-currency-native"
          select
          label="Role"
          className={classes.textField}
          // value={values.currency}
          // onChange={handleChange('currency')}
          SelectProps={{
            native: true,
            MenuProps: {
              className: classes.menu,
            },
          }}
          helperText="Please select your role"
          margin="normal"
          variant="filled"
        >
          {currencies.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </TextField>
      </form>
      <Button variant="outlined" color="primary" className={classes.button}>
        Submit
      </Button>
    </div>
  );
}
