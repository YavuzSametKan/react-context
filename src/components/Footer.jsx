import React, {useContext} from 'react'
import SwitchTheme from "./SwitchTheme"
import SwitchLanguage from "./SwitchLanguage"
import {Context} from "../context/SiteContext";

export default function Footer() {
    const {language} = useContext(Context)
    return (
        <footer>
            <SwitchTheme />
            {language === 'en' ? 'Footer' : 'Alt Kısım'}
            <SwitchLanguage />
        </footer>
    )
}