import React, { createContext, useState, useContext } from 'react';

export const AuthContext = createContext({});

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

export const AuthProvider = ({ children }) => {
  const [authData, setAuthData] = useState(false);

  //The loading part will be explained in the persist step session
  const [loading, setLoading] = useState(false);

  const signIn = async () => {
    setLoading(true);
    //call the service passing credential (email and password).
    //In a real App this data will be provided by the user from some InputText components.
    //Set the data in the context, so the App can be notified
    //and send the user to the AuthStack
    setTimeout(() => {
      setAuthData({
        token: "sample-token"
      });
      setLoading(false);
    }, 1500);
  };

  const signOut = async () => {
    setLoading(true);
    //Remove data from context, so the App can be notified
    //and send the user to the AuthStack
    setTimeout(() => {
      const _authData = false;
      setAuthData(_authData);
      setLoading(false)
    }, 1500);

  };

  return (
    //This component will be used to encapsulate the whole App,
    //so all components will have access to the Context
    <AuthContext.Provider value={{ authData, loading, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
