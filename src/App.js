import './App.css';
import Activities from './components/Activities/Activities';
import Header from './components/Header/Header';
import Quiz from './components/Quiz/Quiz';

function App() {

  return (
    <div className="App">
      <Header></Header>
      <Activities></Activities>
      <Quiz></Quiz>
    </div>
  );
}

export default App;
