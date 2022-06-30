import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import {Link} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";

export default function MyAppBar(props) {
  const subtitles = [
    {title: 'Info', link: '/'},
    {title: 'Texts', link: '/'},
    {title: 'Shop', link: '/shop'},
    {title: 'Additional', link: '/additional'},
    {title: 'Authorization', link: '/authorization'},
  ]
  let {title} = props;


  return (
    <React.Fragment>
      <Toolbar sx={{borderBottom: 1, borderColor: 'divider'}}>
        <Button size="small">Subscribe</Button>
        <Typography
          component="h2"
          variant="h6"
          color="inerit"
          align="center"
          noWrap
          sx={{flex: 1}}
        >
          {title}
        </Typography>
        <IconButton>
          <MenuIcon/>
        </IconButton>
        <Button component={RouterLink} to={'/authorization'} variant="outlined" size="small">
          Sign up
        </Button>
      </Toolbar>
      <Toolbar
        component="nav"
        variant="dense"
        sx={{justifyContent: 'space-between', overflowX: 'auto'}}
      >
        {subtitles.map((subtitle) => (
          <Link
            component={RouterLink}
            to={subtitle.link}
            color="inherit"
            variant="body1"
            underline="hover"
            href={'#'}
            noWrap
            key={subtitle.title}
            sx={{p: 1, flexShrink: 0}}
          >
            {subtitle.title}
          </Link>
        ))}
      </Toolbar>
    </React.Fragment>
  );
}