import React, {useContext} from 'react'
import SiteContext from "../context/SiteContext"

export default function SwitchLanguage() {
    const { language, setLanguage } = useContext(SiteContext)

    return (
        <>
            <button onClick={() => setLanguage(language === 'en' ? 'tr' : 'en')}>
                {language === 'tr' ? 'English' : 'Türkçe'}
            </button>
        </>
    )
}