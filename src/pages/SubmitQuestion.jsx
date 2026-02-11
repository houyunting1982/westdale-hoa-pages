import { useMemo, useState } from "react";
import { Alert, Box, Button, Stack, TextField, Typography } from "@mui/material";

// Static-site friendly: this uses `mailto:` (no backend).
// Change this to the real HOA/board email address.
const BOARD_EMAIL = "board@westdalehoa.example";

export default function SubmitQuestion() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [question, setQuestion] = useState("");

  const canSubmit = question.trim().length > 0;

  const mailtoHref = useMemo(() => {
    const subject = `HOA Question${name.trim() ? ` - ${name.trim()}` : ""}`;
    const bodyLines = [
      "Hello HOA Board,",
      "",
      "I have a question:",
      question.trim(),
      "",
      name.trim() ? `Name: ${name.trim()}` : null,
      email.trim() ? `Email: ${email.trim()}` : null,
      "",
      "Thanks,",
      name.trim() ? name.trim() : "(anonymous)",
    ].filter(Boolean);

    const body = bodyLines.join("\n");
    return `mailto:${encodeURIComponent(BOARD_EMAIL)}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  }, [name, email, question]);

  return (
    <Box>
      <Typography variant="h4" sx={{ fontWeight: 800, mb: 0.5 }}>
        Submit a Question
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        This will open your email client and send a message to the HOA board.
      </Typography>

      <Alert severity="info" sx={{ mb: 2 }}>
        Board email is currently set to <strong>{BOARD_EMAIL}</strong>. Update it
        in the code when you’re ready.
      </Alert>

      <Stack spacing={2}>
        <TextField
          label="Your name (optional)"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="Jane Doe"
          fullWidth
        />

        <TextField
          label="Your email (optional)"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="jane@example.com"
          fullWidth
        />

        <TextField
          label="Question"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Type your question..."
          multiline
          minRows={6}
          fullWidth
          required
        />

        <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
          <Button
            variant="contained"
            onClick={() => {
              if (!canSubmit) return;
              window.location.href = mailtoHref;
            }}
            disabled={!canSubmit}
          >
            Send email
          </Button>

          {!canSubmit && (
            <Typography variant="body2" color="text.secondary">
              Please enter a question to continue.
            </Typography>
          )}
        </Box>
      </Stack>
    </Box>
  );
}

