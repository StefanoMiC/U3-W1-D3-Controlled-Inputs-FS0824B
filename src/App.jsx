import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import Home from "./components/Home";
// import Counter from "./components/Counter";
import { Component } from "react";
import ReservationForm from "./components/ReservationForm";

class App extends Component {
  render() {
    return (
      <>
        <TopBar claim="Niente secondi piatti!" />
        {/* <Counter /> */}
        <ReservationForm title="Prenota un tavolo" />
        <Home />
      </>
    );
  }
}

export default App;
