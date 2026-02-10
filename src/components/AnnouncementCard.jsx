export default function AnnouncementCard({ item }) {
    return (
      <div
        style={{
          border: "1px solid #ddd",
          padding: 16,
          borderRadius: 8,
          marginBottom: 12
        }}
      >
        <h3>{item.title}</h3>
        <small>{item.date}</small>
        <p>{item.summary}</p>
        {item.link && (
          <a href={item.link} target="_blank">
            View details
          </a>
        )}
      </div>
    );
  }
  