import React from "react";

import Menu from '../organism/menu'
import Header from "../organism/header";
import Layout from "../templates/layout";

import "../styles/app.css";

function App() {
  return (
    <div className="App">
      <Layout>
        <Header/>
        <Menu/>
      </Layout>
    </div>
  );
}

export default App;
