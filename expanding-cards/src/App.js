import ExpandingCards from "./components/expandingCards";
import data from "./data.json";
import "./App.css";

export default function App() {
  return <ExpandingCards data={data} />;
}
