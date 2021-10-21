import Router from "./routes";
import UserContextProvider from "./contexts/userContext";

const App = () => {
  return (
    <UserContextProvider>
      <Router />
    </UserContextProvider>
  );
};

export default App;
