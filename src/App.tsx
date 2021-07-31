import * as React from "react";
import { HomePage } from "./pages/home/HomePage";
import { Header } from "./components";
import "./App.css";
export const App: React.FC = () => {
  return (
    <React.Fragment>
      <Header></Header>
      <HomePage></HomePage>
    </React.Fragment>
  );
};
