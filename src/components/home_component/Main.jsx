import {Divider, Grid, Typography} from "@mui/material";
import Markdown from "./Markdown";
import PropTypes from "prop-types";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../../firebase-config";

export default function Main(props) {
  const { title } = props;
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const userCollectionRef = collection(db, "md_post")

    const getPosts = async () => {
      const data = await getDocs(userCollectionRef);
      setPosts(data.docs.map(doc => {return doc.data()}))
    }
    getPosts()
  }, [])

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