
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.min"
import ViewRecipe from './Pages/ViewRecipe';
import Recipe from './Pages/Recipe';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/view' element={<Recipe/>} />
          <Route path='/viewrecipe' element={<ViewRecipe />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
