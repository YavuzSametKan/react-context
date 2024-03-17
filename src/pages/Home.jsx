import React, {useContext} from 'react';
import Header from "../components/Header";
import Footer from "../components/Footer";
import {Context} from "../context/SiteContext";

function Home() {
    const {theme, language} = useContext(Context)

    return (
        <div className={theme + ' container'}>
            <Header/>
            <main>
                {language === 'en' ? 'Theme' : 'Tema'} =
                {
                    language === 'tr'
                        ? theme === 'light'
                            ? 'açık'
                            : 'koyu'
                        : theme
                }
                <br/>
                {language === 'en' ? 'Language' : 'Dil'} = {language}
            </main>
            <Footer/>
        </div>
    )
}

export default Home