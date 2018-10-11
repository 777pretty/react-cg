import React, { Fragment } from 'react'
import zKlas from './Cockpit.css'


const cockpit = (props) => {
    const klasik = []
    if (props.osoby.length <= 2){
      klasik.push(zKlas.zelik)
    }
    if (props.osoby.length <= 1){
      klasik.push(zKlas.hrubik)
    }
    if (props.osoby.length <= 0){
      klasik.push(zKlas.velik)
    }
    let buttonKlas = ''
    if (props.ukazOsoby){
        buttonKlas = [zKlas.Button, zKlas.Zakliknuty].join(' ')
    }
    return(
    <Fragment>
        <br />
        <p className={klasik.join(' ')}>fungujem</p>
        <button className={buttonKlas} onClick={props.buttonKlik} >Stlac!</button>
        <br />
        <br />
        {/* <button */}
    </Fragment>
    )
}

export default cockpit