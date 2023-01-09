import { Box, Card, Grid, Paper, Stack, Typography } from "@mui/material";
import Link from "next/link";

// const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Paper sx={{ bgcolor: "#e0e0eb", minHeight: "100vh" }}>
        <Stack sx={{ p: 2 }}>
          <Card sx={{ p: 2 }}>
            <Typography textAlign="center" variant="h5">
              Welcome to my page
            </Typography>
            <Grid></Grid>

            <Box sx={{ width: '50%'}}>
              <Typography>
              Click here to  <Link href="/login">Login to your account</Link>
              </Typography>
              <Typography variant="subtitle2">
                If you are a new user?{" "}
                <Link href="/register">click here to register</Link>
              </Typography>
              
            </Box>
            <Box sx={{ width: '50%'}} component="img" alt="image" src="faw.webp" >

            </Box>
          </Card>
        </Stack>
      </Paper>
    </div>
  );
}
