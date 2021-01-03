import React from 'react';
import PropTypes from 'prop-types';


// Material UI Stuff
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { appleTabsStylesHook } from '@mui-treasury/styles/tabs';

// Pages Import
import About from '../pages/about';
import Projects from '../pages/projects';
import Contact from '../pages/contact';
import Resume from '../pages/resume';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
    borderRadius: 12,
  },
}));


export default function HomeTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Tabs classes={appleTabsStylesHook.useTabs()} value={value} onChange={handleChange} aria-label="simple tabs example" centered>
          <Tab classes={appleTabsStylesHook.useTabItem()} disableRipple label="About" {...a11yProps(0)} />
          <Tab classes={appleTabsStylesHook.useTabItem()} disableRipple label="Projects" {...a11yProps(1)} />
          <Tab classes={appleTabsStylesHook.useTabItem()} disableRipple label="Resume" {...a11yProps(2)} />
          <Tab classes={appleTabsStylesHook.useTabItem()} disableRipple label="Contact" {...a11yProps(3)} />        
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <div className="center">
          <About />
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div className="center">
          <Projects />
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div className="center">
          <Resume />
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div className="center">
          <Contact />
        </div>
      </TabPanel>
    </div>
  );
}