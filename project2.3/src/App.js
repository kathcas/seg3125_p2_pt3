
import Navbar from './navbar';
import Home from './home';
import cottages from './cottages';

function App() {
  
  const title = 'Grand Manan Cottages';

  return (
    <div className="App">
      <Navbar />
        <div className="content">
          <Home />
        </div>
        <div className="content">
          <cottages />
        </div>
        <div className="content">
          <attractions />
        </div>
    </div>
  );
}

export default App;
