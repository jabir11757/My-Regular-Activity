import './App.css';
import Activities from './components/Activities/Activities';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Activities></Activities>
      <Quiz></Quiz>
      <Footer></Footer>
    </div>
  );
}

export default App;
