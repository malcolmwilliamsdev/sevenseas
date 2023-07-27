import React from "react";
import { Grid, Box, Typography, useTheme } from "@mui/material";

export default function ServiceItem({ src, title, description, lgGrid }) {
  const theme = useTheme();
  return (
    <Grid item xs={12} sm={6} lg={lgGrid}>
      <Typography variant="h4" sx={{ color: "#033b73", textAlign: "center" }}>
        {title}
      </Typography>
      <img
        src={src}
        alt="image"
        style={{
          width: "100%",
          objectFit: "cover",
          borderRadius: "15px 50px 30px",
          marginTop: "0.5em",
        }}
      />
      <Box
        sx={{
          textAlign: "left",
          textIndent: "0em",
          lineHeight: "1.75em",
          p: "0.5em 1em 0em 1em",
        }}
      >
        <Typography variant="body" color={theme.palette.primary.main}>
          {description}
        </Typography>
      </Box>
    </Grid>
  );
}
