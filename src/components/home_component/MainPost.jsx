import {Box, Grid, Link, Paper, Typography} from "@mui/material";

export default function MainPost() {
  const post = {
    text: 'Happy cat',
    image: 'https://s.w-x.co/in-cat_in_glasses.jpg'
  }

  return (
    <Paper
      sx={{
        position: 'relative',
        backgroundColor: 'grey.800',
        color: '#fff',
        mb: 4,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundImage: `url(${post.image})`,
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          bottom: 0,
          right: 0,
          left: 0,
          backgroundColor: 'rgba(0,0,0,.3)',
        }}
      />
      <Grid container>
        <Grid item md={6}>
          <Box
            sx={{
              position: 'relative',
              p: { xs: 1, md: 6 },
              pr: { md: 0 },
            }}
          >
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              {post.text}
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              {post.text}
            </Typography>
            <Link variant="subtitle1" href="src/components/home_component/MainPost#">
              {post.text}
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Paper>
  )
}