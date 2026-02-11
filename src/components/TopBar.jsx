import { useMemo, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import {
  AppBar,
  Box,
  Button,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Tab,
  Tabs,
  Toolbar,
  Typography,
  useMediaQuery,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";

export default function TopBar({ activeTab, onChangeTab }) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const items = useMemo(
    () => [
      { key: "announcements", label: "Announcements" },
      { key: "questions", label: "Submit Question" },
    ],
    []
  );

  const [anchorEl, setAnchorEl] = useState(null);
  const menuOpen = Boolean(anchorEl);

  return (
    <AppBar position="fixed" color="default" elevation={0}>
      <Toolbar
        sx={{
          borderBottom: "1px solid",
          borderColor: "divider",
          bgcolor: "rgba(255,255,255,0.9)",
          backdropFilter: "saturate(180%) blur(12px)",
        }}
      >
        <Container
          maxWidth="md"
          sx={{ display: "flex", alignItems: "center", gap: 1.5 }}
        >
          <Box
            component="img"
            src={`${import.meta.env.BASE_URL}wd-logo.png`}
            alt="Westdale Townhomes"
            sx={{
              height: 32,
              width: 44,
              display: "block",
              borderRadius: 1,
              border: "1px solid",
              borderColor: "divider",
              objectFit: "cover",
              objectPosition: "left center",
              bgcolor: "#fff",
              flex: "0 0 auto",
            }}
          />

          <Typography
            variant="subtitle1"
            sx={{ fontWeight: 700, whiteSpace: "nowrap" }}
          >
            Westdale HOA
          </Typography>

          <Box sx={{ flex: 1 }} />

          {isMobile ? (
            <>
              <IconButton
                edge="end"
                aria-label="Open menu"
                onClick={(e) => setAnchorEl(e.currentTarget)}
              >
                <MenuIcon />
              </IconButton>

              <Menu
                anchorEl={anchorEl}
                open={menuOpen}
                onClose={() => setAnchorEl(null)}
              >
                {items.map((it) => (
                  <MenuItem
                    key={it.key}
                    selected={activeTab === it.key}
                    onClick={() => {
                      onChangeTab(it.key);
                      setAnchorEl(null);
                    }}
                  >
                    {it.label}
                  </MenuItem>
                ))}
              </Menu>
            </>
          ) : (
            <Tabs
              value={activeTab}
              onChange={(_, v) => onChangeTab(v)}
              textColor="inherit"
              indicatorColor="primary"
              sx={{
                minHeight: 40,
                "& .MuiTab-root": { minHeight: 40 },
              }}
            >
              {items.map((it) => (
                <Tab key={it.key} value={it.key} label={it.label} />
              ))}
            </Tabs>
          )}

          {/* right side spacer for future actions */}
          {!isMobile && (
            <Button size="small" variant="outlined" sx={{ ml: 1 }} disabled>
              Board
            </Button>
          )}
        </Container>
      </Toolbar>
    </AppBar>
  );
}
