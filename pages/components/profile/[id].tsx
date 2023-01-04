import { Box, Card, Grid, Paper, Stack, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { userDetails } from "../../api/feed";

function id() {
  const router = useRouter();
  const { id } = router?.query || "";

  const [user, setUser] = useState<any>();

  async function fetchUserDetails(id: any) {
    const res = await userDetails(id);
    setUser(res?.data);
  }

  useEffect(() => {
    if (id !== undefined || "") {
      fetchUserDetails(id);
    }
  }, [id]);

  console.log("id", id);

  return (
    <div>
      {" "}
      <Paper sx={{ bgcolor: "#e0e0eb", minHeight: "100vh" }}>
        <Stack sx={{ p: 5 }}>
          <Card sx={{ p: 2, maxWidth: "50%" }}>
            <Box sx={{ border: '1px solid black', p:2}}>
            <Grid pb={3}>
              <Typography textAlign="center" fontWeight={600} variant="h6">
                Profile
              </Typography>
            </Grid>
            <Grid>
              {" "}
              <Grid container spacing={3}>
                <Grid item md={5}>
                  <Typography
                    textAlign="center"
                    fontWeight={500}
                    variant="subtitle2"
                  >
                    ID
                  </Typography>
                </Grid>
                <Grid item md={1}>
                  <Typography fontWeight={500} variant="subtitle2">
                    :
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography fontWeight={500} variant="subtitle2">
                    {user?.id}
                  </Typography>
                </Grid>

                <Grid item md={5}>
                  <Typography
                    textAlign="center"
                    fontWeight={500}
                    variant="subtitle2"
                  >
                    Name
                  </Typography>
                </Grid>
                <Grid item md={1}>
                  <Typography fontWeight={500} variant="subtitle2">
                    :
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography fontWeight={500} variant="subtitle2">
                    {user?.name}
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography
                    textAlign="center"
                    fontWeight={500}
                    variant="subtitle2"
                  >
                    Email Address
                  </Typography>
                </Grid>
                <Grid item md={1}>
                  <Typography fontWeight={500} variant="subtitle2">
                    :
                  </Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography variant="subtitle2">{user?.email}</Typography>
                </Grid>
                <Grid item md={5}>
                  <Typography
                    textAlign="center"
                    fontWeight={500}
                    variant="subtitle2"
                  >
                    Phone number
                  </Typography>
                </Grid>
                <Grid item md={1}>
                  <Typography fontWeight={500} variant="subtitle2">
                    :
                  </Typography>
                </Grid>
                <Grid item md={1}>
                  <Typography
                    textAlign="center"
                    fontWeight={500}
                    variant="subtitle2"
                  >
                    {user?.phone}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            </Box>
          </Card>
        </Stack>
      </Paper>
    </div>
  );
}

export default id;
