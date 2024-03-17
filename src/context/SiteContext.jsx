import {createContext, useState} from "react"

export const Context = createContext()

const Provider = ({ children }) => {
    const [theme, setTheme] = useState('light')
    const [language, setLanguage] = useState('en')

    const states = {
        theme,
        setTheme,
        language,
        setLanguage
    }

    return (
        <Context.Provider value={states}>
            {children}
        </Context.Provider>
    )
}
export default Provider
