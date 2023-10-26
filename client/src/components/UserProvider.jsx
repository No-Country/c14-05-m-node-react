import { onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../../firebase-config";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState({});
  useEffect(() => {
    //Esto verifica que el usuario este logueado cada vez que monta el componente
    onAuthStateChanged(auth, (User) => {
      setCurrentUser(User);
    });
  }, []);

  return (
    <UserContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
