import { AppContainer } from "./App.styles";
import { DrawerContextProvider } from "./context/DrawerContext";
import { UserContextProvider } from "./context/UserContext";
import { withAxiosIntercepted } from "./hooks/withAxiosIntercepted";
import { AppRouter } from "./router/App.router";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <AppContainer>
      <UserContextProvider>
        <DrawerContextProvider>
          <AppRouter />
          <ToastContainer />
        </DrawerContextProvider>
      </UserContextProvider>
    </AppContainer>
  );
}

export default withAxiosIntercepted(App);
