import SiteProvider from "./context/SiteContext"
import Home from "./pages/Home"

function App() {
    return (
        <SiteProvider>
            <Home />
        </SiteProvider>
    )
}

export default App
