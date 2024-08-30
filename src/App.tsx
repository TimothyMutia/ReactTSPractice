import { Outlet } from 'react-router-dom';
import Header from './Components/Header';


function App() {

  return (
    <div>
      <Header/>
      <div>
        <Outlet/>
      </div>
    </div>
  );
}

export default App