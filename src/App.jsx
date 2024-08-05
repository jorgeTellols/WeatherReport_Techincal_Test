import './App.css';
import Sidebar from './components/c-sidebar';
import Button from './components/c-button';
import WeatherReport from './widgets/w-weatherReport';
import Form from './modals/m-form';
import es from './utils/es';
import en from './utils/en';
import { useState, useEffect } from 'react';

function App() {

  const [languageSelected, setLanguageSelected] = useState(en)
  const [isFormShowing, setIsFormShowing] = useState(false);
  const [selectedCityName, setSelectedCityName] = useState("");

  useEffect(() => {
    if((selectedCityName == (en.sidebarLondon)) || (selectedCityName == (es.sidebarLondon)))
    {
      setSelectedCityName(languageSelected.sidebarLondon)
    }
    else if(selectedCityName == en.sidebarToronto)
      {
      setSelectedCityName(languageSelected.sidebarToronto)
    }
    else if((selectedCityName == (en.sidebarSingapore)) || (selectedCityName == (es.sidebarSingapore)))
      {
      setSelectedCityName(languageSelected.sidebarSingapore)
    }
  }, [languageSelected])

  function setContentBackground()
  {
    if((selectedCityName == (en.sidebarLondon)) || (selectedCityName == (es.sidebarLondon)))
    {
      return "london"
    }
    else if((selectedCityName == (en.sidebarToronto)) || (selectedCityName == (es.sidebarToronto)))
    {
      return "toronto"
    }
    else if((selectedCityName == (en.sidebarSingapore)) || (selectedCityName == (es.sidebarSingapore)))
    {
      return "singapore"
    }
  }

  return (
      <div className="weather-app">
        <Sidebar 
          handleClickLondon={() => setSelectedCityName(languageSelected.sidebarLondon)} 
          handleClickToronto={() => setSelectedCityName(languageSelected.sidebarToronto)} 
          handleClickSingapore={() => setSelectedCityName(languageSelected.sidebarSingapore)} 
          showModal={() => setIsFormShowing(true)} 
          languageSelected={languageSelected}>
        </Sidebar>
        <div className="language-buttons-container">
          <Button 
            buttonType="button" 
            styleButton="language-button" 
            isSelected={languageSelected == en ? "highlighted-button" : ""} 
            handleClick={() => setLanguageSelected(en)} 
            textContent={languageSelected.englishLanguage}>
          </Button>
          <Button 
            buttonType="button" 
            styleButton="language-button" 
            isSelected={languageSelected == es ? "highlighted-button" : ""} 
            handleClick={() => setLanguageSelected(es)} 
            textContent={languageSelected.spanishLanguage}>
          </Button>
        </div>
        <div className={`${setContentBackground()} content`}>
          {selectedCityName == "" ? (
            <div className="empty-content">
              <img className="emoji" src="../public/assets/thinking.gif"/>
              <h1>{languageSelected.emptyContentTitle} </h1>
              <span>{languageSelected.emptyContentSpan}</span>
            </div>
            ) : (
            <WeatherReport 
              selectedCityName={selectedCityName} 
              languageSelected={languageSelected}>
            </WeatherReport>
          )}
        </div>
        {isFormShowing ? (
                <Form 
                  languageSelected={languageSelected} 
                  hideModal={() => setIsFormShowing(false)}>
                </Form>
        ) : ""}
      </div>
  )
}

export default App
