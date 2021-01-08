import {List} from './ListComponent/list';
import React from 'react';
import './App.css';


const App = () => {
  

  const stories = [
    {
        title: 'React',
        url: 'https://google.com',
        auther: 'Abdul Moiz',
        num_comments: 3,
        points: 4,
        objectId: 0
    },
    {
        title: 'Angular',
        url: 'https://google.com',
        auther: 'Abdul hadi',
        num_comments: 3,
        points: 4,
        objectId: 1
    },
    {
        title: 'Laravel',
        url: 'https://google.com',
        auther: 'Haris',
        num_comments: 3,
        points: 4,
        objectId: 2
    },
];
// const searchData = "Hello"
const [searchData, setSearchData] = React.useState("");
const handleChange = event => {
  setSearchData(event.target.value)
  console.log(event.target.value)
}
  return (
  <div >
      <header >
        <h1>My Hacker Story</h1>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" onChange={handleChange}/>
        <p>you are searching <strong>{searchData}</strong></p>
      </header>

      <List list={stories}/>
    </div>
   
)
}

export default App;
