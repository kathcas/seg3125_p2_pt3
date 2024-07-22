
import Navbar from './navbar';
import Home from './home';
import cottages from './cottages';

function App() {
  
  const title = 'Grand Manan Cottages';

  return (
    <div className="App">
      <Navbar />
      <section id="home">
        <div className="content">
          <Home />
        </div>
      </section>
      <section id="cottages">
        <div className="content">
          <cottages />
        </div>
      </section>
      <section id="attractions">
        <div className="content">
          <attractions />
        </div>
      </section>
    </div>
  );
}

export default App;
