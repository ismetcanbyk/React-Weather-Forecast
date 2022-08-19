import Search from './Components/Search';
import './App.css';
import ApiContext, { ApiProvider } from './Context/ContextApi';


function App() {
  return (
    <div className="App">
      <ApiProvider>
      <Search/>
      </ApiProvider>
    </div>
  );
}

export default App;
