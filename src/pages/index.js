import { h, Component } from "preact";
import Home from "./home";
import { Page } from "../components";

export default class App extends Component {
  render(props, state) {
		console.log("app rendering")
    return (
      <Page>
        <Home />
      </Page>
    );
  }
}
