import { createContext, useState, useEffect } from 'react';
import { notificationsData } from '../Data/data';
 
export const AppContext = createContext();
 
export const AppProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const [direction, setDirection] = useState('ltr');
  const [notifications, setNotifications] = useState(notificationsData);
  const [showNotifications, setShowNotifications] = useState(false);
 
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);
 
  useEffect(() => {
    document.documentElement.setAttribute('dir', direction);
  }, [direction]);
 
  const toggleTheme = () => setTheme(theme === 'light' ? 'dark' : 'light');
  const toggleDirection = () => setDirection(direction === 'ltr' ? 'rtl' : 'ltr');
  const toggleNotifications = () => setShowNotifications(!showNotifications);
  const clearNotifications = () => setNotifications([]);
 
  return (
    <AppContext.Provider value={{
      theme, toggleTheme,
      direction, toggleDirection,
      notifications, showNotifications, toggleNotifications, clearNotifications
    }}>
      {children}
    </AppContext.Provider>
  );
};