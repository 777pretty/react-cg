import React, { Component, Fragment } from 'react'
import PropTypes from 'prop-types'

import zKlas from './Osoba.css'
import zklasou from '../../../hoc/zklasou'


class Osoba extends Component {
    constructor(props){
        super(props)
    this.inputtElementt = React.createRef()
    }

    componentDidMount(){
        console.log( '[Osoba.js]SCOOB xx in component did mount' )
        if (this.props.pozicia === 0){
        this.inputtElementt.current.focus()
        }
    }

    focus(){
        this.inputtElementt.current.focus();
    }

    render(){
    
    return (
    <Fragment>
    <h4>Moje meno je {this.props.meno}.</h4>
    <p onClick={this.props.clique}>Pochadzam z {this.props.lokacia}. A mam {Math.floor(Math.random()*100)} rokov lmao.</p>
    <h1>{this.props.children}</h1>
    <input type='text'
           ref={this.inputtElementt} 
           onChange={this.props.zmenena} 
           value={this.props.meno} />
    </Fragment>
    )
    }
}


Osoba.propTypes = {
    clique: PropTypes.func,
    meno: PropTypes.string,
    lokacia: PropTypes.string,
    zmenena: PropTypes.func
}

export default zklasou(Osoba, zKlas.Osoba)

