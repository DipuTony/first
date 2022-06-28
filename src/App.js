import './App.css';
import { format, formatDistance, formatRelative, subDays } from 'date-fns'
import NewFrom from "./components/NewFrom";
import { ToastContainer, toast } from 'react-toastify';
import { Context } from "./components/Context";
import Header from "./components/Header";
import {
  BrowserRouter as Router,
  Routers,
  Route,
  Routes
} from "react-router-dom"
import About from './components/About';


function App() {

  const dateIs = format(new Date(), "'Today is a' eeee")

  return (
    <div id="main">
      <Router>

        <Header date={dateIs} title="LrnTube" />
        <ToastContainer />
        <Context.Provider value="Hello World!" >
          <Routes>
            <Route path='/' element={<NewFrom />} />
            <Route path='/about' element={<About />} />
          </Routes>
        </Context.Provider>
      </Router>

    </div>
  );
}

export default App;
