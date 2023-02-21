import { useState } from "react";

export default function useAuth() {
  const [user, setUser] = useState();
  const login = async (email, password) => {
    fetch("https://localhost:7091/User/login/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: { email, password },
    })
      .then((res) => res.json())
      .then((data) => setUser(data));
  };
  return { login };
}
