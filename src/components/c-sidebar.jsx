/* eslint-disable react/prop-types */
import { useState} from "react";
import Button from "./c-button";

function Sidebar(props) {

    const [isVisible, setIsVisible] = useState(false)
    const [firstTime, setFirstTime] = useState(true);

    const handleClick = (prop) => {
        prop();
        setIsVisible(false);
    };

    return (
        <>
            {firstTime ? 
                (
                    <div className="sidebar first-time">
                        <div className="toggle-sidebar" onClick={() => {
                            setIsVisible(!isVisible)
                            setFirstTime(false);
                        }}>
                            <h1 className="show">🌏</h1>
                        </div>
                    </div>
                ) 
                : 
                (
                    <div className={`${isVisible ? "visible" : "not-visible"} sidebar`}>
                        <h1>{(props.languageSelected).sidebarTitle}</h1>
                        <Button 
                            handleClick={() => handleClick(props.handleClickLondon)} 
                            textContent={(props.languageSelected).sidebarLondon}
                            >
                        </Button>
                        <Button 
                            handleClick={() => handleClick(props.handleClickToronto)} 
                            textContent={(props.languageSelected).sidebarToronto}>
                        </Button>
                        <Button 
                            handleClick={() => handleClick(props.handleClickSingapore)} 
                            textContent={(props.languageSelected).sidebarSingapore}>
                        </Button>
                        <p>{(props.languageSelected).sidebarForm}<a onClick={props.showModal}>{(props.languageSelected).sidebarFormLink}</a></p>
                        <div className="toggle-sidebar" onClick={() => setIsVisible(!isVisible)}>
                            {isVisible ? 
                            (
                                <h1 className="hide">🌏</h1>
                            ) : 
                            (
                                <h1 className="show">🌏</h1>
                            )}
                        </div>
                    </div>
                )
            }
        </>
    )
}

export default Sidebar;