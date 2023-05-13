import React from 'react';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Box,
  Typography,
  Container,
  Modal,
} from '@mui/material';
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
} from 'firebase/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBmX6i0BCwhYArN_K47a5pQQDVxLsOxAE4",
  authDomain: "techhub-def2e.firebaseapp.com",
  projectId: "techhub-def2e",
  storageBucket: "techhub-def2e.appspot.com",
  messagingSenderId: "572076525027",
  appId: "1:572076525027:web:7a90076ab9dfe2d3580cd6",
  measurementId: "G-49P6KFECCB"
};

// Initialize Firebase
initializeApp(firebaseConfig);

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: '50%',
  bgcolor: '#ffff',
  boxShadow: 24,
  p: 4,
};

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="#">
        TechHub
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignIn({setOpen}) {

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const email = data.get('email');
    const password = data.get('password');

    const auth = getAuth();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // User is signed in
        const user = userCredential.user;
        console.log('User authenticated:', user);

        // Close the modal and open the home page or perform any desired action
        handleClose();
      })
      .catch((error) => {
        // Handle sign-in errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log('Sign-in error:', errorCode, errorMessage);
      });
  };

  // Listen for changes in user authentication state
  onAuthStateChanged(getAuth(), (user) => {
    if (user) {
      // User is signed in
      console.log('User is signed in:', user);

      // Close the modal and open the home page or perform any desired action
      handleClose();
    } else {
      // User is signed out
      console.log('User is signed out');
    }
  });

  return (
    <Modal open={setOpen}>
      <Container component="main" maxWidth="xs" sx={style}>
        <CssBaseline />
        <Box
          sx={{
            // marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign In
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Container>
    </Modal>
  );
}