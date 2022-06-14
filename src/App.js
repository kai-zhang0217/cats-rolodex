import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component';
import SearchBox  from './components/search-box/search-box.component';
import './App.css';

const App = () => {
  const [searchField, setSearchField] = useState(''); //[value, setValue]]
  const [cats, setCats] = useState([]);
  const [filteredCats, setFilteredCats] = useState(cats);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then((users) => setCats(users));
  }, []);

  useEffect(() => {
    const newFilteredCats = cats.filter((cat) => {
      return cat.name.toLocaleLowerCase().includes(searchField);
      });
      setFilteredCats(newFilteredCats)
  }, [cats, searchField])

  const onSearchChange = (event) =>{
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <div className = 'App'>
      <h1 className='app-title'>Cats Rolodex</h1>
      <SearchBox 
        className = 'cats-search-box'
        placeholder='Search Cats'
        onChangeHandler = {onSearchChange}
      />
      <CardList cats = {filteredCats}/>
    </div>
  );
};

export default App;
