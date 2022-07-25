import React, { useState } from "react";
import LockOutLinedIcon from "@material-ui/icons/LockOutlined";
import {
  Avatar,
  Paper,
  Grid,
  Typography,
  Button,
  Container,
  TextField,
} from "@material-ui/core";
import Input from "./Input";
import useStyles from "./styles";

const Auth = () => {
  const classes = useStyles();
  const [showPassword, setShowPassword] = useState(false);

  const state = null;

  const isSignedUp = true;

  const handleShowPassword = () =>
    setShowPassword((prevShowPassword) => !prevShowPassword);

  const handleSubmit = () => {};

  const handleChange = () => {};

  return (
    <Container component="main" maxwidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutLinedIcon />
        </Avatar>
        <Typography variant="h5">
          {isSignedUp ? "Sign Up" : "Sign In"}
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            {isSignedUp && (
              <>
                <Input
                  autoFocus
                  half
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                />
                <Input
                  half
                  name="firstName"
                  label="First Name"
                  handleChange={handleChange}
                />
              </>
            )}
            <Input
              name="email"
              label="Email Address"
              handleChange={handleChange}
              type="email"
            />
            <Input
              name="password"
              label="Password"
              handleChange={handleChange}
              type={showPassword ? "text" : "password"}
              handleShowPassword={handleShowPassword}
            />
            {isSignedUp && (
              <Input
                name="confirmPassword"
                label="Repeat Password"
                handleChange={handleChange}
                type="password"
              />
            )}
          </Grid>
          <Button
            type="submit"
            variant="contained"
            fullWidth
            color="primary"
            className={classes.submit}
          >
            {isSignedUp ? "Sign Up" : "Sign In"}
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default Auth;
