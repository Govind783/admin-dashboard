import { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";

const StateContext = createContext();


const initialState = {
    chat: false,
    cart: false,
    userProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {

    const [activeMenu, setActiveMenu] = useState(true);
    const [isClicked, setIsClicked] = useState(initialState)

    const [screenSize, setScreenSize] = useState(undefined);

    const [currentColor, setCurrentColor] = useState('#03C9D7');
    const [currentMode, setCurrentMode] = useState('Light');
    const [themeSettings, setThemeSettings] = useState(false);

    const handleClick = (clicked) => {

        setIsClicked({ ...initialState, [clicked]: true })

    }

    const setColor = (color) => {
        setCurrentColor(color);
        localStorage.setItem('colorMode', color);

        setThemeSettings(false);
    };


    const setMode = (e) => {
         setCurrentMode(e.target.value);
        localStorage.setItem('themeMode', e.target.value);

        setThemeSettings(false);
    }

    return (
        <StateContext.Provider value={{ activeMenu, setActiveMenu, isClicked, setIsClicked, handleClick, screenSize, setScreenSize, currentColor, currentMode, setMode, setColor, themeSettings, setThemeSettings }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);