import { useEffect, useState } from 'react';
import fetchDogContent from './api/dogsService';
import SidebarLayout from './layouts/SidebarLayout';
import DogTree from './components/DogTree';
import DogPicList from './components/DogPicList';
import Toggle from './components/Toggle';
import './styles/global.scss';

function App() {
  const [dogs, setDogs] = useState({});
  const [theme, setTheme] = useState('light');
  const [dogFilter, setDogFilter] = useState([]);

  function handleThemeChange(darkMode: boolean) {
    setTheme(darkMode ? 'dark' : 'light');
  }

  useEffect(() => {
    console.log('fetching');
    fetchDogContent('breeds/list/all').then(data => setDogs(data));
  }, [])

  return (
    <div className="App" data-theme={theme}>
      <SidebarLayout
        sidebar={<DogTree dogs={dogs} onClick={setDogFilter} />}
        sidebarBottom={<Toggle onToggle={handleThemeChange}>Dark mode</Toggle>}
        content={<DogPicList dogs={dogs} dogFilter={dogFilter} />}
      />
    </div>
  );
}

export default App;
