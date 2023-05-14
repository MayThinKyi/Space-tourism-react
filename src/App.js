import './App.css';
import { BrowserRouter as Router,Routes,Route,Link } from 'react-router-dom';
import Home from './pages/Home';
import Destination from './pages/Destination';
import Crew from './pages/Crew';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { SidebarContext } from './contexts/AppContext';
import { useState } from 'react';
import Technology from './pages/Technology';
function App() {
  const [sideBarState,setSideBarState]=useState(false);
  return (
    <SidebarContext.Provider value={{sideBarState,setSideBarState}}>

    <div className="relative App">
    <Router>

    <Navbar/>
    { sideBarState && <Sidebar/>}
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/destination' element={<Destination/>} />
        <Route path='/crew' element={<Crew/>} />
        <Route path='/technology' element={<Technology/>} />

      </Routes>
    </Router>
    </div>
    </SidebarContext.Provider>

  );
}

export default App;
