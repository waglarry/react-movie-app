import React, {useState} from 'react'
import { RiSwitchFill } from 'react-icons/ri'
import './Themes.css'

const Themes = () => {
    let clickedClass = "clicked"
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;


    if(localStorage){
        theme = localStorage.getItem("theme")
    }

    if(theme === lightTheme || theme === darkTheme) {
        body.classList.add(theme)
    } else {
        body.classList.add(lightTheme)
    }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
            setToggleMode(theme)
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme; 
            setToggleMode(theme)
        }
    }

    const [togglemode, setToggleMode] = useState(theme)

    const toggleText = (mode) => {
        switch (mode) {
            case "light":
                return "Light"
            case "dark":
                return "Dark"
            default:
                return ""
        }
    }

  return (
    <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
    }}>
        <span style={{
            color: "#fff",
        }}>{toggleText(togglemode)}</span>
        <button 
            className={theme === "dark" ? clickedClass : ""}
            id="darkMode"
            onClick={(e) => switchTheme(e)}
            ><RiSwitchFill /></button>
    </div>
  )
}

export default Themes