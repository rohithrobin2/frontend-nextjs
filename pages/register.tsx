import { Autocomplete, Button, Card, Grid } from "@mui/material";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/system";
import Box from "@mui/system/Box";
import React from "react";

const role = [
  { label: "User", id: 1 },
  { label: "Admin", id: 2 },
];

function register() {
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
                />
                <TextField
                  sx={{ maxWidth: 200, m: 2 }}
                  variant="outlined"
                  label="last Name"
                  size="small"
                />
                <TextField
                  sx={{ maxWidth: 200, m: 2 }}
                  variant="outlined"
                  label="Email"
                  size="small"
                />
                <TextField
                  sx={{ maxWidth: 200, m: 2 }}
                  variant="outlined"
                  label="Phone Number"
                  size="small"
                />
                <Autocomplete
                  id="combo-box-demo"
                  options={role}
                  size="small"
                  sx={{ width: 200, m: 2 }}
                  renderInput={(params: any) => (
                    <TextField {...params} label="role" />
                  )}
                />
                <Grid sx={{ m: 2 }}>
                  <Button variant="contained" sx={{ borderRadius: "20px" }}>
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
