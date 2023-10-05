import React, { useContext, createContext } from "react";

type Anchor = 'left';
export const SideBarContext = createContext<any>(null); // Set the initial context value to null or provide an appropriate initial state

interface SideBarProviderProps {
  children: React.ReactNode;
}

const SideBarProvider = ({ children }: SideBarProviderProps) => {
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  console.log(state)

  return (
    <div>
      <SideBarContext.Provider value={{ "state":state, "setState":setState }}>
        {children}
      </SideBarContext.Provider>
    </div>
  );
};


export default SideBarProvider;
