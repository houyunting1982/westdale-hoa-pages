import Home from "./pages/Home";
import TopBar from "./components/TopBar";
import SubmitQuestion from "./pages/SubmitQuestion";
import { useState } from "react";
import { Container, Toolbar } from "@mui/material";

export default function App() {
  const [activeTab, setActiveTab] = useState("announcements");

  return (
    <>
      <TopBar activeTab={activeTab} onChangeTab={setActiveTab} />
      {/* spacer for fixed AppBar */}
      <Toolbar />
      <Container maxWidth="md" sx={{ py: 3 }}>
        {activeTab === "announcements" ? <Home /> : <SubmitQuestion />}
      </Container>
    </>
  );
}
