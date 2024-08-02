import { Toaster } from "react-hot-toast";
import "./App.css";
import AppRouter from "./routes/AppRouter";
import { store } from "./store/store";
import { saveUserInfo } from "./store/slice";

function App() {
  const userInfoJSON = localStorage.getItem("userInfo");
  const userInfo = userInfoJSON ? JSON.parse(userInfoJSON) : {};

  if (userInfo) {
    store.dispatch(saveUserInfo(userInfo));
  }

  return (
    <>
      <AppRouter />

      <Toaster
        position="top-right"
        toastOptions={{
          className: "",
          style: {
            margin: "10px",
            padding: "10px",
            display: "inline-flex",
            fontSize: "14px",
            zIndex: 999999,
          },
          duration: 4000,
          error: {
            style: {
              background: "red",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "red",
            },
          },
          success: {
            style: {
              background: "green",
              color: "white",
            },
            iconTheme: {
              primary: "white",
              secondary: "green",
            },
          },
        }}
      />
    </>
  );
}

export default App;
