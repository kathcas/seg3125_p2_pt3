
import Navbar from './navbar';
import Home from './home';

function App() {
  
  const title = 'Grand Manan Cottages';

  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home />
      </div>
    </div>
  );
}

export default App;
