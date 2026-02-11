import {
  Card,
  CardActions,
  CardContent,
  Link,
  Typography,
} from "@mui/material";

export default function AnnouncementCard({ item }) {
  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" sx={{ fontWeight: 800 }}>
          {item.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5 }}>
          {item.date}
        </Typography>
        <Typography variant="body1" sx={{ mt: 1.25 }}>
          {item.summary}
        </Typography>
      </CardContent>

      {item.link && (
        <CardActions sx={{ pt: 0 }}>
          <Link href={item.link} target="_blank" rel="noreferrer">
            View details
          </Link>
        </CardActions>
      )}
    </Card>
  );
}
  