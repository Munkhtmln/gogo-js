import "./App.css";
import { Cover } from "./components/Cover";
import { Header } from "./components/Header";
import { Story } from "./components/Story";

function App() {
  return (
    <div className="app">
      <Header />
      <Cover />
      <Story />
    </div>
  );
}

export default App;
