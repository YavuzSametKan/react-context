import Header from "./components/Header";
import Footer from "./components/Footer";
import {useState} from "react";
import SiteContext from "./context/SiteContext";

function App() {
    const [theme, setTheme] = useState('light')
    const [language, setLanguage] = useState('en')

    const states = {
        theme,
        setTheme,
        language,
        setLanguage
    }

    return (
        <SiteContext.Provider value={states}>
            <Header />
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
            <Footer />
        </SiteContext.Provider>
    );
}

export default App;
