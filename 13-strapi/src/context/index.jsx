import React, { createContext, useState } from 'react';

export const AppContext = createContext({
  isSidebarOpen: false,
  pageId: null,
  setPageId: () => {},
  openSidebar: () => {},
  closeSidebar: () => {},
});

function AppProvider({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [pageId, setPageId] = useState(null);

  const openSidebar = () => {
    setIsSidebarOpen(true);
  };

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  return (
    <AppContext.Provider
      value={{ isSidebarOpen, pageId, setPageId, openSidebar, closeSidebar }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppProvider;
