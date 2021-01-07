import {List} from './ListComponent/list'
import './App.css';


const App = () => {
  const handleChange = event => {
    console.log(event.target.value)
  }

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
  return (
  <div >
      <header >
        <h1>My Hacker Story</h1>
        <label htmlFor="search">Search:</label>
        <input id="search" type="text" onChange={handleChange}/>
      </header>

      <List list={stories}/>
    </div>
   
)
}

export default App;
