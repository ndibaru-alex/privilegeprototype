import React from 'react'

const STYLES =['btn--primary','btn--outline']

const SIZES =['btn--medium','btn--large','btn--mobile','btn--wide']

const COLOR =['primary','blue','red','green']


export const Button= ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize,
    buttonColor 
})=>{
    const checkButtonStyle =STYLES.includes(buttonStyle)?buttonStyle:STYLES[0]
    const checkButtonSizes =SIZES.includes(buttonSize)?buttonSize:SIZES[0]
    const checkButtonColor =COLOR.includes(buttonColor)?buttonColor:null;
    return(
        <button className={`btn ${checkButtonStyle} ${checkButtonSizes} ${checkButtonColor}`}
        onclick={onClick} type={type}>{children}</button>
    )
}
