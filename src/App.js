import HomePage from "./screens/HomePage";
import { onAuthStateChanged } from "firebase/auth";
import React from "react";
import { auth } from "./utils/firebase";
import { useNavigate } from "react-router-dom";
function App() {
  const [authUser, setAuthUser] = React.useState(null);
  const navigate = useNavigate();
  React.useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
        navigate("/dashboard");
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);
  return (
    <>
      <HomePage />
    </>
  );
}

export default App;
