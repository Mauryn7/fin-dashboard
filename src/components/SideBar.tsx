import React, { useEffect, useState } from 'react';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Collapse from '@mui/material/Collapse';
import StarBorder from '@mui/icons-material/StarBorder';
import SubSideBar from './subsidebar/SubSideBar';

interface MenuData {
  title: string;
}

const SideBar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [menu, setMenu] = useState<MenuData[] | null>(null);

  const handleClick = () => {
    setOpen(!open);
  };

  useEffect(() => {
    fetch("http://200126984.cs2410-web01pvm.aston.ac.uk/react-amazon-navbar/")
      .then((data) => data.json())
      .then((response: MenuData[]) => setMenu(response));
  }, []);

  return (
    <div>
      <List>
        {menu &&
          menu.map((text: MenuData, index: number) => (
            <h2 className='px-5 py-5 font-semibold' onClick={handleClick}>
              {text.title}
              {open && <SubSideBar />}
            </h2>
          ))}
      </List>
      <Divider />
      {open && <SubSideBar />}
    </div>
  );
};

export default SideBar;
