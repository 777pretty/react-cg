import React, { Component } from 'react'

import Osoba from './Osoba/Osoba'

class Osoby extends Component {
    componentWillMount(){
        console.log('SCOOP SCOOP xx in component will mount')
      }
      componentDidMount(){
        console.log('scupity xx in component did mount')
      }
      componentWillReceiveProps(nextProps){
        console.log('Lift YAZHURSELF xx in component will receive props', nextProps)
      }
      shouldComponentUpdate(nextProps, nextState){
        console.log('LETS get it on xx in should component update', nextProps, nextState)
        return nextProps.osoby !== this.props.osoby
      }
      componentWillUpdate(nextProps, nextState){
        console.log('DADADA DA DA xx component will update', nextProps, nextState)
      }
      componentDidUpdate(prevProps, prevState){
        console.log('da da xx component did update', prevProps, prevState)
      }
    render(){
        console.log('SCOOOOPITYYYYYYYYYYYYYYYYYYYYY')
    return  this.props.osoby.map((g, index) => {
        return <Osoba 
        clique={() => this.props.clique(index)}
        meno={g.meno} 
        lokacia={g.lokacia}
        key={g.id}
        zmenena={(event) => this.props.zmenena(event, g.id)}
        /> 
}) } 
}


export default Osoby