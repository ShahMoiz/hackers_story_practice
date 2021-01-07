import {List} from './ListComponent/list'
import './App.css';


const App = () => {
    <div >
      <header >
        <h1>My Hacker Story</h1>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text"/>
      </header>

      <List />
    </div>
}

export default App;
