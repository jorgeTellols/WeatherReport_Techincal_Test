import './App.css';
import Sidebar from './components/c-sidebar';
import Button from './components/c-button';
import es from './utils/es';
import en from './utils/en';
import { useState } from 'react';

function App() {

  const [languageSelected, setLanguageSelected] = useState(en)

  return (
    <div className="weather-app">
      <Sidebar languageSelected={languageSelected}></Sidebar>
      <div className="language-buttons-container">
        <Button isSelected={languageSelected == en ? "highlighted-button" : ""} handleLanguage={() => setLanguageSelected(en)} textContent={languageSelected.englishLanguage}></Button>
        <Button isSelected={languageSelected == es ? "highlighted-button" : ""} handleLanguage={() => setLanguageSelected(es)} textContent={languageSelected.spanishLanguage}></Button>
      </div>
      <div className="content">
      </div>
    </div>
  )
}

export default App
