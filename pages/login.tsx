import {
  Alert,
  Button,
  Card,
  Grid,
  Paper,
  Snackbar,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import router from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import { userDetails } from "./api/feed";
import { loginDetails } from "./api/login";

function login() {
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [token, setToken] = useState<any>();
  const [message, setMessage] = useState<any>();
  const [open, setOpen] = useState<any>(false);

  async function loginToAccount(email: any, password: any) {
    const res = await loginDetails(email, password);

    if (res.success) {
      setMessage("Successfully Logged-In");
      setOpen(true);
      setToken(res?.data);
      if (typeof window !== "undefined") {
        localStorage.setItem("accessToken", res?.data?.token);
      }

      router.push(`/components/profile/${res?.data?.id}`);
    } else {
      setMessage('Invalid Credentials');
      setOpen(true);
    }
  }

  // async function fetchUserDetails(token: any) {
  //   const res = await userDetails(token);
  // }

  // useEffect(() => {
  //   fetchUserDetails(token);
  // }, [token]);

  const handleSubmit = () => {
    loginToAccount(email, password);
    console.log("hai", email, password);
  };

  const handleClose = () => {
    setOpen(false);
  };

  console.log("hai", message);
  return (
    <Paper sx={{ bgcolor: "#e0e0eb", minHeight: "100vh" }}>
      <Stack sx={{ p: 5 }}>
        <Card sx={{ p: 2, maxWidth: "50%" }}>
          <Typography textAlign="center" fontWeight={600} variant="h5">
            Login
          </Typography>
          <Grid>
            <Stack
              sx={{ flexDirection: "row", flexWrap: "wrap", display: "flex" }}
            >
              <TextField
                sx={{ maxWidth: 200, m: 2 }}
                variant="outlined"
                label="username/email id"
                type="email"
                size="small"
                required
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
              />
              <TextField
                required
                sx={{ maxWidth: 200, m: 2 }}
                variant="outlined"
                label="password"
                size="small"
                type="password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
              <Stack direction="column">
                <Grid sx={{ m: 2 }}>
                  <Button
                    variant="contained"
                    sx={{ borderRadius: "20px" }}
                    onClick={handleSubmit}
                  >
                    Submit
                  </Button>
                </Grid>
                <Grid sx={{ ml: 2 }}>
                  <Link href="/register">New user?</Link>
                </Grid>
              </Stack>
            </Stack>
          </Grid>
        </Card>
      </Stack>
      <Snackbar
        // anchorOrigin={ "top", "right" }
        open={open}
        onClose={handleClose}
        message={message}
      >
        <Alert
          onClose={handleClose}
          severity={!token ? "error" : "success"}
          sx={{ width: "100%" }}
        >
          {message}
        </Alert>
      </Snackbar>
    </Paper>
  );
}

export default login;
