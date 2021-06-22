import React from 'react'


export default function Hero({children,every}) {
    return <header className={every}>
        {children}
    </header>

}
Hero.defaultProps={
    every:'defaultHero'
}