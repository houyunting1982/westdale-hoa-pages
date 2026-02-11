import Announcements from "./Announcements";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Box sx={{ mb: 2 }}>
        <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
          Announcements
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Latest HOA updates and notices.
        </Typography>
      </Box>
      <Announcements />
    </Box>
  );
}
