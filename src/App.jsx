import './App.css';
import Sidebar from './widgets/w-sidebar';

function App() {

  return (
    <div className="weather-app">
      <Sidebar></Sidebar>
      <div className="language-buttons-container">
        <button className="language-button" type="button">English</button>
        <button className="language-button" type="button">Español</button>
      </div>
      <div className="content">
      </div>
    </div>
  )
}

export default App
