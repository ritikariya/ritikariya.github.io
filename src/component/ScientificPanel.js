import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button';

import '../index.css';
 
export default class ScientificPanel extends React.Component {
    static propTypes = {
        clickHandler :PropTypes.func
    }

    handleClick = buttonName => {
        this.props.clickHandler(buttonName)
    }

    render(){
        return (
            <div className='component-button-panel'>
            
            <div>
                <Button name='+/-' clickHandler={this.handleClick} />
                <Button name='²' clickHandler={this.handleClick} />
                <Button name='√' clickHandler={this.handleClick} />
            </div>

        </div>
        )
    }
}