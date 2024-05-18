import './App.css';
import Alerts from './Components/Alerts';
import Sidebar from './Components/Sidebar';
function App() {
  return (
    <main className='flex h-screen relative'>
      <Sidebar className='navbar absolute h-full overflow-y-hidden w-1/4' />
      <div className="flex-1 overflow-y-auto bg-[#202020]">
        <Alerts className='ml-24 alert h-full' />
      </div>

    </main>
  );
}

export default App;
