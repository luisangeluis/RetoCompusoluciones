import { Route, Routes } from 'react-router-dom';
import './App.css';

//Components
import MainLayout from './components/shared/MainLayout';
import Home from './components/Home';

function App() {
  return (
    <div className="App d-flex flex-column justify-content-between">
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
