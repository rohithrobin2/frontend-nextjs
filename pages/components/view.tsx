import { Button, Card, Paper, Stack } from "@mui/material";
import React from "react";

export default function view() {
  return (
    <Paper sx={{ bgcolor: "#e0e0eb", minHeight: "100vh" }}>
      <Stack sx={{ p: 2 }}>
        <Card>
          <Stack direction="row">
            <Button
              variant="contained"
              sx={{ borderRadius: "20px" }}
              // onClick={handleSubmit}
            >
              View feeds
            </Button>
            <Button
              variant="contained"
              sx={{ borderRadius: "20px" }}
              // onClick={handleSubmit}
            >
              View Profile
            </Button>
          </Stack>
        </Card>
      </Stack>
    </Paper>
  );
}
