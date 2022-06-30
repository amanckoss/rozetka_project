import React, {useEffect, useState} from 'react';
import MainPost from "../components/home_component/MainPost";
import {Grid} from "@mui/material";
import FeaturedPost from "../components/home_component/FeaturedPost";
import Main from "../components/home_component/Main";
import Sidebar from "../components/home_component/Sidebar";
import {useDispatch, useSelector} from "react-redux";
import {fetchCards, fetchMdPost, fetchSideBarText} from "../redux/actions/main_action";

const Home = () => {
  const posts = useSelector(state => state.main.posts);
  const sideBar = useSelector(state => state.main.sideBar)
  const dispatch = useDispatch()

  useEffect(() => {
    console.log('home page init');
    [fetchCards(), fetchSideBarText(), fetchMdPost()]
      .map(funk => dispatch(funk))
  }, [dispatch])

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