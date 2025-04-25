import React, { useState, useEffect } from 'react';
import { IconButton, Tooltip, Box } from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

export const ThemeToggle: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    try {
      const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setIsDarkMode(prefersDarkMode);
      //inital theme
      document.documentElement.setAttribute('data-theme', prefersDarkMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Error setting initial theme:', error);
    }
  }, []);

  const toggleTheme = () => {
    try {
      const newDarkMode = !isDarkMode;
      setIsDarkMode(newDarkMode);
      
      // Toggle the data-theme attribute on the html element
      document.documentElement.setAttribute('data-theme', newDarkMode ? 'dark' : 'light');
    } catch (error) {
      console.error('Error toggling theme:', error);
    }
  };

  return (
    <Box sx={{ position: 'fixed', top: 16, right: 16, zIndex: 1000 }}>
      <Tooltip title={isDarkMode ? "Switch to dark mode" : "Switch to light mode"}>
        <IconButton 
          onClick={toggleTheme} 
          color="inherit"
          sx={{ 
            backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.05)',
            '&:hover': {
              backgroundColor: isDarkMode ? 'rgba(255, 255, 255, 0.2)' : 'rgba(0, 0, 0, 0.1)',
            }
          }}
        >
          {isDarkMode ? <Brightness4Icon /> : <Brightness7Icon />}
        </IconButton>
      </Tooltip>
    </Box>
  );
};