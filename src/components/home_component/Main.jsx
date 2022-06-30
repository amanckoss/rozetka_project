import {Divider, Grid, Typography} from "@mui/material";
import Markdown from "./Markdown";
import PropTypes from "prop-types";
import {useSelector} from "react-redux";

export default function Main(props) {
  const { title } = props;
  const posts = useSelector(state => state.main.md_post);

  return (
    <Grid
      item
      xs={12}
      md={8}
      sx={{
        '& .markdown': {
          py: 3,
        },
      }}
    >
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <Divider />
      {posts.map((post) => (
        <Markdown className="markdown" key={post.text.substring(0, 40)}>
          {post.text}
        </Markdown>
      ))}
    </Grid>
  )
}

Main.propTypes = {
  title: PropTypes.string.isRequired,
};