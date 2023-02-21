import { MyContext } from "@/context/context";
import { useContext, useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState();
  const {userData,setUserData} = useContext(MyContext)
  const login = async (email, password) => {
    fetch("https://localhost:7091/User/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body:JSON.stringify ({ email, password }),
    })
      .then((res) => res.json())
      .then((data) => setUserData(data));
  };
  return { login };
}
