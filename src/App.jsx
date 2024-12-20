import "./App.css";
import { Cover } from "./components/Cover";
import { Header } from "./components/Header";
import { Gogo, Story } from "./components/Story";

function App() {
  return (
    <div className="app">
      <Header />
      <Cover />
      <Gogo />
      <Story />
    </div>
  );
}

export default App;
