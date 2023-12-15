import React, { useState, useEffect } from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Badge } from '@mui/material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';

export default function ScrollableBottomNavigation() {
  const [value, setValue] = useState(0);
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);

  const handleScroll = () => {
    const currentScrollPos = window.scrollY;
    const isScrollingDown = prevScrollPos < currentScrollPos;
    setPrevScrollPos(currentScrollPos);
    setVisible(isScrollingDown || currentScrollPos < 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);

  return (
    <>
      <Box
        sx={{
          width: '100%',
          bottom: 0,
          position: 'fixed',
          borderTop: '1px solid #001f3f',
          display: { xs: 'block', sm: 'none' },
          opacity: visible ? 0 : 1,
          transition: 'opacity 0.3s ease-in-out',
        }}
      >
        <BottomNavigation
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        >
          <BottomNavigationAction
            icon={
              <Badge badgeContent={2} style={{ marginRight: '22px' }} color="error">
                <FavoriteIcon />
              </Badge>
            }
          />
          <BottomNavigationAction
            icon={
              <Badge badgeContent={2} style={{ marginRight: '22px' }} color="error">
                <AddShoppingCartIcon />
              </Badge>
            }
          />
          <BottomNavigationAction icon={<AccountCircleIcon />} />
        </BottomNavigation>
      </Box>
    </>
  );
}
