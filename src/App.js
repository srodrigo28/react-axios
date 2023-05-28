import { Header } from "./components/Header";
import { Login } from "./pages/Login";
import { Routes } from "./services/routes";
import { Global } from "./styles/GlobalStyles";

function App() {
  return (
    <>
      <Global />
      <Routes />
      <Header />
      <Login />
    </>
  );
}

export default App;
