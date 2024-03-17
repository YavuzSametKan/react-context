import React from 'react'
import SwitchTheme from "./SwitchTheme"
import SwitchLanguage from "./SwitchLanguage"

export default function Footer() {
    return (
        <footer>
            <SwitchTheme />
            <SwitchLanguage />
        </footer>
    )
}