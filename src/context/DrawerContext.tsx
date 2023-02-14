import React, { createContext, useState } from "react";
import { DrawerContextType } from "models/DrawerContextType";
import { ProfileDrawer } from "components/drawer/ProfileDrawer";

const defaultSettings: DrawerContextType = {
  isProfileDrawerOpen: false,
  toggleProfileDrawer: () => {},
};

export const DrawerContext = createContext<DrawerContextType>(defaultSettings);

export const DrawerContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [isProfileDrawerOpen, setIsProfileDrawerOpen] =
    useState<boolean>(false);

  const toggleProfileDrawer = () => {
    setIsProfileDrawerOpen(!isProfileDrawerOpen);
  };

  return (
    <DrawerContext.Provider
      value={{
        isProfileDrawerOpen,
        toggleProfileDrawer,
      }}
    >
      {children}
      <ProfileDrawer
        isProfileDrawerOpen={isProfileDrawerOpen}
        toggleProfileDrawer={toggleProfileDrawer}
      />
    </DrawerContext.Provider>
  );
};

export default DrawerContext;
