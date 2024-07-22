
import Navbar from './navbar';
import Home from './home';
import Cottages from './cottages';
import Attractions from './attractions';
import FAQ from './faq';
import Contact from './Contact';

function App() {
  
  const title = 'Grand Manan Cottages';

  return (
    <div className="App">
      <Navbar />
        <section id="home">

        </section>
        <div className="content">
          <section id="home">
            <Home />
          </section>
          <br></br>
          <section id="cottages">
            <Cottages />
          </section>
          <br></br>
          <section id="attractions">
            <Attractions />
          </section>
          <br />
          <section id="faq">
            <FAQ />
          </section>
          <br />
          <section id="contact">
            <Contact />
          </section>
        </div>
    </div>
  );
}

export default App;
