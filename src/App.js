import { DndProvider } from "react-dnd";
import {HTML5Backend} from 'react-dnd-html5-backend'
import "./App.css";
import { Game } from "./main/game";


function App() {
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="App">
        <Game/>
      </div>
    </DndProvider>
  );
}

export default App;
