import React, {useContext} from 'react'
import { Context } from "../context/SiteContext"

export default function SwitchLanguage() {
    const { language, setLanguage } = useContext(Context)

    return (
        <>
            <button onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}>
                {language === 'tr' ? 'English' : 'Türkçe'}
            </button>
        </>
    )
}