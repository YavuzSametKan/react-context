import React, {useContext} from 'react'
import { Context } from "../context/SiteContext"

export default function SwitchTheme() {
    const { theme, setTheme, language } = useContext(Context)

    return (
        <>
            <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {
                    language === 'tr' ? 'Tema Değiştir' : 'Switch Theme'
                }
            </button>
        </>
    )
}