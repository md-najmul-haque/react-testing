import './App.css';
import { Application } from './components/applications/application';
import { Skills } from './components/skills/skills';



function App() {
  return (
    <div className="App">
      <Application />
      <Skills skills={['HTML', 'CSS', 'JavaScript']} />
    </div>
  );
}

export default App;
