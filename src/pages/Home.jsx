import React, {useEffect, useState} from 'react';
import MainPost from "../components/home_component/MainPost";
import {Grid} from "@mui/material";
import FeaturedPost from "../components/home_component/FeaturedPost";
import Main from "../components/home_component/Main";
import Sidebar from "../components/home_component/Sidebar";
import {collection, getDocs} from "firebase/firestore";
import {db} from "../firebase-config";

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [sideBar, setSideBar] = useState({
    title: '',
    description: '',
    archives: [],
    social: '',
  });

  useEffect(() => {
    const getPostsFromFireBase = async () => {
      const userCollectionRef = collection(db, "post")
      const data = await getDocs(userCollectionRef);
      setPosts(data.docs.map(doc => {return doc.data()}))
    }
    const getSideBarText = async  () => {
      const userCollectionRef = collection(db, "sidebar")
      const data = await getDocs(userCollectionRef)
      setSideBar(data.docs[0].data())
    }
    console.log('get')
    getPostsFromFireBase();
    getSideBarText();
  }, [])

  return (
    <div>
      <MainPost/>
      <Grid container spacing={4} minHeight={'200px'}>
        {posts.map((post) => (
          <FeaturedPost key={post.title} post={post} />
        ))}
      </Grid>
      <Grid container spacing={5} sx={{ mt: 3 }}>
        <Main title={'title'}/>
        <Sidebar
          title={sideBar.title}
          description={sideBar.description}
          archives={sideBar.archives}
          social={sideBar.social}
        />
      </Grid>
    </div>
  );
};

export default Home;