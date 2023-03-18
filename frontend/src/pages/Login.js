

import React, { useState } from "react";
import { MyContext } from "@/context/context";
import Link from "next/link";
import { useRouter } from "next/router";
import useAuth from "@/hooks/useAuth";
function useLogin() {
  //   const { login, userData, setUserData } = React.useContext(MyContext);
  // const user = { email: "", password: "" };
    const router = useRouter();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const { login } = useAuth();

  const onLogin = async () => {
    await login(email, password);
    
    // router.push('/Home')
  };

  return (
    <>
      <h1>Login</h1>
      <form>
        <label>Email</label>
        <input type="text" onChange={(e) => setEmail(e.target.value)}></input>
        <label>Password</label>
        <input
          type="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
      </form>
      <button type="button" onClick={() => onLogin()}>
        Click me
      </button>
      <p>
        Don't have an account?{" "}
        <Link href={{ pathname: "/SignUp" }}>Sign Up</Link>
      </p>
      <button onClick={() => console.log(userData)}>Another button</button>
    </>
  );
}

export default useLogin;
