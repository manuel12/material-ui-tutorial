import React from "react";
import {
  Typography,
  AppBar,
  Button,
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  CssBaseline,
  Grid,
  Toolbar,
  Container,
} from "@material-ui/core";
import { PhotoCamera } from "@material-ui/icons";
import { ThemeProvider, createTheme } from "@mui/system";

const theme = createTheme({
  palette: {
    background: {
      paper: "#fff",
    },
    text: {
      primary: "#173A5E",
      secondary: "#46505A",
    },
    action: {
      active: "#001E3C",
    },
    success: {
      dark: "#009688",
    },
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <>
        <CssBaseline />
        <AppBar position="relative">
          <Toolbar>
            <Box
              sx={{
                marginRight: "20px",
              }}
            >
              <PhotoCamera />
            </Box>

            <Typography variant="h6" align="center">
              Photo Album
            </Typography>
          </Toolbar>
        </AppBar>
        <main>
          <Box
            sx={{
              bgcolor: theme.palette.background.paper,
              padding: theme.spacing(8, 0, 6),
            }}
          >
            <Container maxWidth="sm" style={{ marginTop: "100px" }}>
              <Typography
                variant="h2"
                align="center"
                color="textPrimary"
                gutterBottom
              >
                Photo Album
              </Typography>
              <Typography
                variant="h5"
                align="center"
                color="textSecondary"
                paragrahp="true"
              >
                Hello everyone This is a photo album and I'm trying to make this
                sentence as long as possible so we can see how does it look like
                on the screen.
              </Typography>
              <Box
                sx={{
                  marginTop: "40px",
                }}
              >
                <Grid container spacing={2} justifyContent="center">
                  <Grid item>
                    <Button variant="contained" color="primary">
                      See my photos
                    </Button>
                  </Grid>
                  <Grid item>
                    <Button variant="outlined" color="primary">
                      Secondary action
                    </Button>
                  </Grid>
                </Grid>
              </Box>
            </Container>
          </Box>
          <Box
            sx={{
              padding: "20px 0",
            }}
          >
            <Container maxWidth="md">
              <Grid container spacing={4}>
                {cards.map((card) => (
                  <Grid item key={card} xs={12} sm={6} md={4}>
                    <Card
                      style={{
                        height: "100%",
                        display: "flex",
                        flexDirection: "column",
                      }}
                    >
                      <CardMedia
                        image="https://source.unsplash.com/random"
                        title="Image title"
                        style={{
                          height: 200,
                          paddingTop: "56.25%",
                        }}
                      />

                      <CardContent
                        style={{
                          flexGrow: 1,
                        }}
                      >
                        <Typography gutterBottom variant="h5">
                          Heading
                        </Typography>
                        <Typography>
                          This is a media card you can use this section to
                          describe the content
                        </Typography>
                      </CardContent>

                      <CardActions>
                        <Button size="small" color="primary">
                          View
                        </Button>
                        <Button size="small" color="primary">
                          Edit
                        </Button>
                      </CardActions>
                    </Card>
                  </Grid>
                ))}
              </Grid>
            </Container>
          </Box>
        </main>
        <footer
          style={{
            backgroundColor: theme.palette.background.paper,
            padding: "50px 0",
          }}
        >
          <Typography variant="h6" align="center" gutterBottom>
            Footer
          </Typography>
          <Typography variant="subtitle1" align="center" color="textSecondary">
            Something here to give the footer a purpose.
          </Typography>
        </footer>
      </>
    </ThemeProvider>
  );
};

export default App;
