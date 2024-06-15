import AppBar from "../../components/App/AppBar/AppBar";
import officers from "../../officers.json";
import OfficerList from "../OfficersList/OfficerList";

export default function App() {
  return (
    <div>
      <AppBar />
      <OfficerList items={officers} />
    </div>
  );
}
