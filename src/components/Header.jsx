import React, {useContext} from 'react'
import SwitchTheme from "./SwitchTheme"
import SwitchLanguage from "./SwitchLanguage"
import {Context} from "../context/SiteContext";

export default function Header() {
    const {language} = useContext(Context)
    return (
        <header>
            <SwitchTheme />
            {language === 'en' ? 'Header' : 'Baş Kısım'}
            <SwitchLanguage />
        </header>
    )
}