import { List } from './ListComponent/list';
import React from 'react';

import { InputWithLabel } from './inputComponent/inputWithLabel';
import './App.css';


const initialStories = [
  {
    title: 'The Road to React',
    url: 'https://google.com',
    author: 'Abdul Moiz',
    num_comments: 3,
    points: 4,
    objectId: 0
  },
  {
    title: 'React.Js Essentials - 2015',
    url: 'https://google.com',
    author: 'Fedosejev',
    num_comments: 3,
    points: 4,
    objectId: 1
  },
  {
    title: 'React Hooks in Action',
    url: 'https://google.com',
    author: 'Haris',
    num_comments: 3,
    points: 4,
    objectId: 2
  },
];

const getAsyncStories = () => 
  new Promise(resolve => 
    setTimeout(() => resolve({stories: initialStories}), 2000)
  )

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

  const [searchData, setSearchData] = useSemiPersistentState('search', '');
  

  const [stories, setStories] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  React.useEffect(() => {
    setIsLoading(true);
    getAsyncStories().then(result => {
      setStories(result.stories)
      setIsLoading(false);
    }).catch(() => {
      setIsError(true);
    });
  }, [])
  const removeStory = objId => {
    const leftStories = stories.filter(story =>
      objId !== story.objectId
      );
    console.log("Left Stories", leftStories);
    
    setStories(leftStories)
    console.log("After Left Stories", leftStories)
  }
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
        <h1>My Hacker Story</h1>
        
        <InputWithLabel 
          type="text"
          id="search"
          searchTerm={searchData} 
          onSearch={handleChange}
          isFocused>
            <strong>Search</strong>
          </InputWithLabel>
 
          {
          isLoading? ( <h4>Loading...</h4> ) : (
            <List onRemoveStory={removeStory} list={searchedData} />
          ) 
        }

        {
          isError && <h4>Something Went Wrong... Try Again Later..</h4>
        }

      
    </div>
  )
}

export default App;
