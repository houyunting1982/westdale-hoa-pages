import data from "../data/announcements.json";
import AnnouncementCard from "../components/AnnouncementCard";

export default function Announcements() {
  return (
    <div style={{ marginTop: 24 }}>
      {data.map(item => (
        <AnnouncementCard key={item.id} item={item} />
      ))}
    </div>
  );
}
