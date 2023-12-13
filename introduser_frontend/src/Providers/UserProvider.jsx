import { createContext, useContext, useState } from "react";
import { AuthServices } from "../Services/AuthServices";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const fetchUser = async () => {
    const token = localStorage.getItem("access_token");
    // Logic to fetch user data
    return await AuthServices.getUserId(token).then(async (res) => {
      setUser(res);
      console.log(res);
      return res;
    }).catch((err) => {
      console.log(err);
    });
  }

  return (
    <UserContext.Provider value={{ user, fetchUser }}>
      {children}
    </UserContext.Provider>
  );
}

export const useUserContext = () => useContext(UserContext);