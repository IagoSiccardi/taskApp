import Main from "./components/Main";
import {BrowserRouter,Routes,Route} from "react-router-dom"

import './App.css'
import TaskItemSection from "./components/TaskItemSection";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main/>} />
        <Route path="/task-item" element={<TaskItemSection/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
