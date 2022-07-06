import React from 'react';
import {Avatar, Box, Checkbox, FormControlLabel, Grid, Link, TextField, Typography} from "@mui/material";
import LockIcon from '@mui/icons-material/LockOutlined';
import Button from "@mui/material/Button";
import {getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword} from "firebase/auth";

const Authorization = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    const auth = getAuth();
    signInWithEmailAndPassword(auth, data.get('email'), data.get('password'))
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode + ' ' + errorMessage)
      });

    // createUserWithEmailAndPassword(auth, data.get('email'), data.get('password'))
    //   .then((userCredential) => {
    //     const user = userCredential.user;
    //     console.log(user)
    //   })
    //   .catch((error) => {
    //     const errorCode = error.code;
    //     const errorMessage = error.message;
    //     console.log(errorCode + ' ' + errorMessage)
    //   });
  };


  return (
    <Box sx={{
      mt: 8,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <Avatar xs={{m: 1, bgcolor: 'primary'}}>
        <LockIcon/>
      </Avatar>
      <Typography component="h1" variant="h5">
        Sign in
      </Typography>
      <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="email"
          name="email"
          label="Email Address"
          autoComplete="email"
          autoFocus
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="password"
          name="password"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <FormControlLabel
          control={<Checkbox value="remember" color="primary"/>}
          label="Remember me"
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{mt: 3, mb: 2}}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href="#" variant={'body2'}>
              {'Sign Up'}
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default Authorization;