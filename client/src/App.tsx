import Router from "@pages/Router";
import { AuthContextProvider } from "@contexts/AuthContext";

function App() {
  return (
    <>
      <AuthContextProvider>
        <Router />
      </AuthContextProvider>
    </>
  );
}

export default App;
