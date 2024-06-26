import './App.css';
import Alerts from './Components/Alerts';
import Filters from './Components/Filters';
import Sidebar from './Components/Sidebar';
import React, {useState} from 'react';
function App() {
  const [filteredData, setFilteredData] = useState([]);
  return (
    <main className='flex h-screen relative'>
      <Sidebar className='navbar absolute h-full overflow-y-hidden w-1/8 z-20' />
      <div className="flex-1 bg-[#202020] overflow-y-auto ">
        <Alerts className='ml-24 alert h-full' filteredData={filteredData } />
      </div>
      <div className='w-1/4 h-screen bg-[#202020] py-4'>
        <Filters setFilteredData={setFilteredData } />
      </div>

    </main>
  );
}

export default App;
