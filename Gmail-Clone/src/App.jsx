import "./App.css";
import { Header, SendMail, Sidebar, Login } from "./components";
import { Outlet } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { selectSendMessageIsOpen } from "./features/mailSlice";
import { selectUser } from "./features/userSlice";
import { useEffect } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { login } from "./features/userSlice";

function App() {
  const sendMessageIsOpen = useSelector(selectSendMessageIsOpen);
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(
          login({
            displayName: user.displayName,
            email: user.email,
            photoUrl: user.photoUrl,
          })
        );
      }
    });
  }, []);

  return (
    <>
      {user ? (
        <Login />
      ) : (
        <div className="app">
          <Header />
          <div className="app__body">
            <Sidebar />
            <Outlet />
          </div>

          {sendMessageIsOpen && <SendMail />}
        </div>
      )}
    </>
  );
}

export default App;
