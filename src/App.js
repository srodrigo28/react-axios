import { Router } from 'react-router-dom'
import React from 'react';
import history from './services/history'
import axios from './services/axios'
import { Header } from "./components/Header";
import { Global } from "./styles/GlobalStyles";
import { Routes } from "./services/routes";

function App() {
  // Start Axios Teste
    React.useEffect(() => {
      async function getData(){
        const response = await axios.get('/activity');
        const { data } = response;
        console.log(data.participants);
      }
      getData();
    })
  // End Axios Teste
  return (
    <Router history={history}>
      <Header />

      <Routes />
      <Global />
    </Router>
  );
}

export default App;
