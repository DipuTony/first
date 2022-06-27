import { FcApproval } from "react-icons/fc";
import './App.css';
import Form from "./components/Form";
import ViewData from "./components/ViewData";

function App() {
  return (
    <div id="main">

    <h1 className="text-3xl font-bold underline">    Hello world! <FcApproval/>  </h1>

  <div className="p-2 flex">
    <div className="flex-1 bg-gray-600 h-64"><Form/></div>
    <div className="flex-1 bg-gray-400 h-64 "><ViewData title="View Data.."/></div>
</div>
  </div>
  );
}

export default App;
