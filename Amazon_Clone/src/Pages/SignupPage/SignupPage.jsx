import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../firebase/index"; // Adjust the import path as necessary
import { useContext } from "react";
import { Mycontext } from "../../Context";
import { useAuth } from "../../Context/AuthContext";

function SignupPage() {
  const { setuid, dispatch, user, setUser } = useContext(Mycontext);
  const navigate = useNavigate();
  const auth = getAuth(app);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [user, setUser] = useState(null);
  const { currentUser } = useAuth();
  const handleSignUp = async () => {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      setUser(userCredential.user);
      console.log("User signed up:", userCredential.user);
      setuid(currentUser.uid);
      navigate("/");
    } catch (error) {
      console.error("Error signing up:", error);
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
      console.log("User signed in:", userCredential.user.uid);
      setuid(currentUser.uid);
      dispatch({ type: "reset" });
      navigate("/");
    } catch (error) {
      console.error("Error signing in:", error);
    }
  };

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      console.log("User signed out");
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div>
      <h1>Firebase Auth with Email & Password</h1>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      <button onClick={handleSignUp}>Sign Up</button>
      <button onClick={handleSignIn}>Sign In</button>
      {user && <button onClick={handleSignOut}>Sign Out</button>}
      {user && <div>Welcome, {user.email}</div>}
    </div>
  );
}

export default SignupPage;
