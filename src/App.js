import './css/App.css';
import {Menu} from './Menu.js';
import {CardsList} from './CardsList.js';
function App() {
  return (
    <div className="App">
    <div className="middleSection">
      <Menu/>
      <hr></hr>
      <CardsList/>
    </div>
    </div>
  );
}

export default App;
