import { useContext, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { UserContext } from "../../Context";
import { auth } from "../../Config/index"; // Adjust the import path as necessary
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Signinwtihpassword() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignin, setIsSignin] = useState(false);
  const [title, setTitle] = useState("SignUp");
  const { setUser } = useContext(UserContext);
  const navigate = useNavigate();

  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log("User signed up:", userCredential.user);
      toast.success("Signup successfully");
      navigate("/welcome");
    } catch (error) {
      console.error("Error signing up:", error);
      toast.error("Invalid Username and Password");
    }
  };

  const handleSignIn = async () => {
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log("User signed in:", userCredential.user);
      navigate("/welcome");
      toast.success("SignIn successfully");
    } catch (error) {
      console.error("Error signing in:", error);
      toast.error("Invalid Username and Password");
    }
  };

  // const handleSignOut = async () => {
  //   try {
  //     await signOut(auth);
  //     setUser(null);
  //     console.log("User signed out");
  //   } catch (error) {
  //     console.error("Error signing out:", error);
  //   }
  // };
  function switchtoother() {
    setIsSignin(true);
    setTitle("SignIn");
  }
  function switchtosignup() {
    setIsSignin(false);
    setTitle("SignUp");
  }
  return (
    <div className="px-8 py-10 border-white border-solid border-4 ">
      <h1>{title}</h1>
      <input
        className="w-4/5 h-10 m-5 px-3 py-6"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        className="w-4/5 h-10 m-5 px-3 py-6"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {!isSignin && (
        <button onClick={handleSignUp} className="mb-10">
          Sign Up
        </button>
      )}
      {isSignin && (
        <button onClick={handleSignIn} className="mb-10">
          Sign In
        </button>
      )}
      {!isSignin && (
        <p className="underline" onClick={switchtoother}>
          Already have an account
        </p>
      )}
      {isSignin && (
        <p className="underline" onClick={switchtosignup}>
          Don't have an account
        </p>
      )}
      {/* {user && <button onClick={handleSignOut}>Sign Out</button>}
      {user && <div>Welcome, {user.email}</div>} */}
    </div>
  );
}

export default Signinwtihpassword;
