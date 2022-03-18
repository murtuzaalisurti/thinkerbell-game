import React from 'react'
import { KeyboardStyle } from './styled/KeyboardStyled'

const Keyboard = () => {
    
    return (
        <>
            <KeyboardStyle className='keyboard'>
                <div className="row" id="row-1"></div>
                <div className="row" id="row-2"></div>
                <div className="row" id="row-3"></div>
                <div className="row" id="row-4"></div>
            </KeyboardStyle>
            <div className="output"></div>
        </>
    )
}

export default Keyboard