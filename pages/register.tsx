import { Autocomplete, Button, Card, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Box from "@mui/system/Box";
import router from "next/router";
import React, { useState } from "react";
import { registerDetails } from "./api/register";

const role = [
  { label: "user", id: 1 },
  { label: "admin", id: 2 },
];

function register() {
  const [fname, setFname] = useState<any>("");
  const [lname, setLname] = useState<any>();
  const [email, setEmail] = useState<any>();
  const [password, setPassword] = useState<any>();
  const [roles, setRoles] = useState<any>();
  const [user, setUser] = useState<any>();

  async function postRegister(
    fname: any,
    lname: any,
    email: any,
    phone: any,
    roles: any
  ) {
    const res = await registerDetails(fname, lname, email, phone, roles);

    if (res.success) {
      router.push(`/login`);
    } else {
    }
  }

  const handleSubmit = () => {
    postRegister(fname, lname, email, password, roles);
  };

  return (
    <div>
      <Paper sx={{ bgcolor: "#e0e0eb", minHeight: "100vh" }}>
        <Stack sx={{ p: 10 }}>
          <Card sx={{ p: 2 }}>
            <Typography textAlign="center" variant="h5">
              Register Here
            </Typography>
            <Grid>
              <Stack
                sx={{ flexDirection: "row", flexWrap: "wrap", display: "flex" }}
              >
                <TextField
                  sx={{ maxWidth: 200, m: 2 }}
                  variant="outlined"
                  label="first Name"
                  size="small"
                  onChange={(e) => setFname(e?.target?.value)}
                />
                <TextField
                  sx={{ maxWidth: 200, m: 2 }}
                  variant="outlined"
                  label="last Name"
                  size="small"
                  onChange={(e) => setLname(e.target.value)}
                />
                <TextField
                  sx={{ maxWidth: 200, m: 2 }}
                  variant="outlined"
                  label="Email"
                  size="small"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <TextField
                  sx={{ maxWidth: 200, m: 2 }}
                  variant="outlined"
                  label="Password"
                  type="password"
                  size="small"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={role}
                  size="small"
                  onChange={(e, value) => setRoles(value?.label)}
                  sx={{ width: 200, m: 2 }}
                  renderInput={(params: any) => (
                    <TextField {...params} label="role" />
                  )}
                />
                <Grid sx={{ m: 2 }}>
                  <Button
                    onClick={handleSubmit}
                    variant="contained"
                    sx={{ borderRadius: "20px" }}
                  >
                    Sign Up
                  </Button>
                </Grid>
              </Stack>
            </Grid>
          </Card>
        </Stack>
      </Paper>
    </div>
  );
}

export default register;
