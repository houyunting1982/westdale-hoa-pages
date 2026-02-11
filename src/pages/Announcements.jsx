import data from "../data/announcements.json";
import AnnouncementCard from "../components/AnnouncementCard.jsx";
import { Stack } from "@mui/material";

export default function Announcements() {
  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      {data.map((item) => (
        <AnnouncementCard key={item.id} item={item} />
      ))}
    </Stack>
  );
}
