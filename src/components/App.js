
import '../styles/App.scss'
import Navigation from './Navigation';
import Cards from "./Cards.js";
import Sidebar from "./Sidebar.js"




function App() {
  return (
    <div className="App">
      <Navigation/>
      <main>
        <div className='container'>
          <Cards/>
          <Sidebar/>
        </div>
      </main>
    </div>
  );
}

export default App;
