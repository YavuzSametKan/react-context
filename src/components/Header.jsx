import React from 'react'
import SwitchTheme from "./SwitchTheme"
import SwitchLanguage from "./SwitchLanguage"

export default function Header() {
    return (
        <header>
            <SwitchTheme />
            <SwitchLanguage />
        </header>
    )
}