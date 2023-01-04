import { Card, Grid, Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userDetails } from "../api/feed";

function Profile() {
  // const router = useRouter();
  // const [user, setUser] = useState()
  // const { id } = router.query;

 
  // async function fetchUserDetails(id: any) {
  //   const res = await userDetails(id);

  // }

  // useEffect(() => {
  //   fetchUserDetails(id);
  // }, []);

  
  return (
    <div>
      {" "}
      <Paper sx={{ bgcolor: "#e0e0eb", minHeight: "100vh" }}>
        <Stack sx={{ p: 5 }}>
          <Card sx={{ p: 2, maxWidth: "50%" }}>
            <Typography textAlign="center" fontWeight={600} variant="h5">
              Profile
            </Typography>
            <Grid>
              <Stack
                sx={{ flexDirection: "row", flexWrap: "wrap", display: "flex" }}
              >
                {" "}
                <Typography textAlign="center" fontWeight={600} variant="h5">
                  Profile
                </Typography>
              </Stack>
            </Grid>
          </Card>
        </Stack>
      </Paper>
    </div>
  );
}

export default Profile;
