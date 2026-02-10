import Announcements from "./Announcements";

export default function Home() {
  return (
    <>
          <header style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
              <img
                  src={`${import.meta.env.BASE_URL}wd-logo.png`}
                  alt="Westdale Townhomes"
                  style={{ height: 84, width: "auto", display: "block" }}
              />
              <h1 style={{ margin: 0 }}>HOA Announcements</h1>
          </header>
      <Announcements />
    </>
  );
}
