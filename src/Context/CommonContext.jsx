import React, { createContext, useState, useContext } from 'react';

export const CommonContext = createContext();

export const CommonProvider = ({ children }) => {
    const [status, setStatus] = useState(0);
    return (
        <CommonContext.Provider value={{status, setStatus}}>
          {children}
        </CommonContext.Provider>
      );
}

export const useCommonContext = () => {
    return useContext(CommonContext);
  };