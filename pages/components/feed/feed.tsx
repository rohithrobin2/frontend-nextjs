import {
  Button,
  Card,
  List,
  ListItem,
  ListItemButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { feedDetails } from "../../api/feed";

function feed() {
  const [feed, setFeed] = useState<any>();

  async function fetchFeed() {
    const res = await feedDetails();
    setFeed(res?.data);
  }

  useEffect(() => {
    fetchFeed();
  }, []);

  console.log("feed", feed);
  return (
    <Paper sx={{ bgcolor: "#e0e0eb", minHeight: "100vh" }}>
      <Stack sx={{ p: 2 }}>
        <Card>
          <TableContainer>
            <Table
              sx={{
                borderCollapse: "separate",
                borderSpacing: "0px 8px",
                borderRadius: "12px",
                p: 2,
              }}
            >
              <TableHead>
                <TableRow>
                  <TableCell align="center" colSpan={10}>
                    <Typography
                      textAlign="center"
                      fontWeight={600}
                      variant="subtitle1"
                    >
                      Feeds
                    </Typography>
                  </TableCell>
                  <TableCell align="right">
                    {" "}
                    <Button
                      variant="contained"
                      sx={{ borderRadius: "20px" }}
                      // onClick={handleSubmit}
                    >
                      Create new feed
                    </Button>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {feed?.map((data: any) => (
                  <TableRow
                    sx={{
                      borderRadius: "12px",
                      background: "#FFFFFF 0% 0% no-repeat padding-box",
                      boxShadow: "0px 3px 25px #0000001A",
                    }}
                  >
                    <TableCell>{data.body}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
      </Stack>
    </Paper>
  );
}

export default feed;
