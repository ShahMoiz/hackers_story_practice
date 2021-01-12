import { List } from './ListComponent/list';
import React from 'react';

import { Search } from './searchComponent/search';
import './App.css';

const useSemiPersistentState = (key, initialValue) => {
  const [value, setValue] = React.useState(
    localStorage.getItem(key) || initialValue
  )
  React.useEffect(() => {
    localStorage.setItem(key, value)
  }, [value])

  return [value, setValue]
}

const App = () => {


  const stories = [
    {
      title: 'The Road to React',
      url: 'https://google.com',
      author: 'Abdul Moiz',
      num_comments: 3,
      points: 4,
      objectId: 0
    },
    {
      title: 'Angular',
      url: 'https://google.com',
      author: 'Abdul hadi',
      num_comments: 3,
      points: 4,
      objectId: 1
    },
    {
      title: 'Laravel',
      url: 'https://google.com',
      author: 'Haris',
      num_comments: 3,
      points: 4,
      objectId: 2
    },
  ];

 

  const [searchData, setSearchData] = useSemiPersistentState('search', 'react');
  
  // React.useEffect(() => {
  //   localStorage.setItem('search', searchData );
  // }, [searchData])
  
  const handleChange = event => {
    setSearchData(event.target.value);
    console.log(event.target.value)   // props.onSearch(event);
    // localStorage.setItem('search', event.target.value )

  }
  const searchedData = stories.filter(story =>
    story.title.toLowerCase().includes(searchData.toLowerCase()))

  return (
    <div >
      <header >
        <h1>My Hacker Story</h1>
        <Search searchTerm={searchData} onSearch={handleChange} />
      </header>

      <List list={searchedData} />
    </div>
  )
}

export default App;
