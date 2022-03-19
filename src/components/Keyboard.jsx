import React from 'react'
import { KeyboardStyle } from './styled/KeyboardStyled'
import {addAction, subtractAction} from '../actions/actions'
import {connect} from 'react-redux';

const Keyboard = (props) => {
    
    return (
        <>
            <div className="output">{props.num}</div>
            <KeyboardStyle className='keyboard'>
                <div className="row" id="row-1"></div>
                <div className="row" id="row-2"></div>
                <div className="row" id="row-3"></div>
                <div className="row" id="row-4"></div>
            </KeyboardStyle>
        </>
    )
}

const mapStateToProps = state => ({
    ...state
  });
  
  const mapDispatchToProps = dispatch => ({
    addAction: () => dispatch(addAction),
    subtractAction: () => dispatch(subtractAction)
  });
  
  export default connect(mapStateToProps, mapDispatchToProps)(Keyboard);