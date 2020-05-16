import React, {useState} from 'react';
import Navigation from './components/Navigation';
import Feed from './components/Feed';
import './App.css';

export default function App() {

  const [state,setState] = useState(
    {
      searchValue: ''
    }
  );

  const setSearchVal = (value) => {
    setState({
      searchValue: value
    })
  };

  return (
    <div>
      <Navigation srchval = {setSearchVal}/>
      <Feed search = {state.searchValue} />
      
    </div>
  );
}
