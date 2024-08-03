import './App.css';
import Sidebar from './components/c-sidebar';
import Button from './components/c-button';
//import WeatherReport from './widgets/w-weather-report';
import Form from './modals/m-form';
import es from './utils/es';
import en from './utils/en';
import { useState } from 'react';

function App() {

  const [languageSelected, setLanguageSelected] = useState(en)
  const [isFormShowing, setIsFormShowing] = useState(true);

  return (
      <div className="weather-app">
        <Sidebar showModal={() => setIsFormShowing(true)} languageSelected={languageSelected}></Sidebar>
        <div className="language-buttons-container">
          <Button buttonType="button" styleButton="language-button" isSelected={languageSelected == en ? "highlighted-button" : ""} handleClick={() => setLanguageSelected(en)} textContent={languageSelected.englishLanguage}></Button>
          <Button buttonType="button" styleButton="language-button" isSelected={languageSelected == es ? "highlighted-button" : ""} handleClick={() => setLanguageSelected(es)} textContent={languageSelected.spanishLanguage}></Button>
        </div>
        <div className="content">
          {/* <WeatherReport></WeatherReport> */}
        </div>
        {isFormShowing ? (
                <Form languageSelected={languageSelected} hideModal={() => setIsFormShowing(false)}></Form>
        ) : ""}
      </div>
  )
}

export default App
