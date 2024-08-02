/* eslint-disable react/prop-types */
import { useState} from "react";

function Sidebar(props) {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <>
            <div className={`${isVisible ? "visible" : "not-visible"} sidebar`}>
                <h1>{(props.languageSelected).sidebarTitle}</h1>
                <span>{(props.languageSelected).sidebarLondon}</span>
                <span>{(props.languageSelected).sidebarToronto}</span>
                <span>{(props.languageSelected).sidebarSingapore}</span>
                <p>{(props.languageSelected).sidebarForm}<a href="">{(props.languageSelected).sidebarFormLink}</a></p>
                
                <div className="toggle-sidebar" onClick={() => setIsVisible(!isVisible)}>
                    {isVisible ? (<h1 className="hide">🌏</h1>) : (<h1 className="show">🌏</h1>)}
                </div>
            </div>
        </>
    )
}

export default Sidebar;