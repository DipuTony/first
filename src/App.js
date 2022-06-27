import { FcApproval } from "react-icons/fc";
import './App.css';
import MyForm from "./components/MyForm";
import ViewData from "./components/ViewData";
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import NewFrom from "./components/NewFrom";

function App() {

  const dateIs = format(new Date(), "'Today is a' eeee")

  return (
    <div id="main">

    <h1 className="text-3xl font-bold">  Hello world!<FcApproval/>  {dateIs}  </h1>

  <div className="p-2 flex">
    <div className="flex-1 bg-gray-600 h-64"><MyForm/></div>
    <div className="flex-1 bg-gray-400 h-64 "><ViewData title="View Data.."/></div>
</div>
    <NewFrom />
  </div>
  );
}

export default App;
