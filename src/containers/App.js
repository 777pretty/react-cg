import React, { PureComponent } from 'react'

import zKlas from './App.css'
import Osoby from '../components/Osoby/Osoby'
import Cockpit from '../components/Cockpit/Cockpit'
import Aukz from '../hoc/Aukz'
import zklasou from '../hoc/zklasou'



export const overKontext = React.createContext(false) //false value is optional 

class App extends PureComponent {
  constructor(props){
    super(props)
    console.log('SCoopidty scoop xx in constructor', props)
  }

  componentWillMount(){
    console.log('SCOOP SCOOP xx in component will mount')
  }
  componentDidMount(){
    console.log('scupity xx in component did mount')
  }

  // shouldComponentUpdate(nextProps, nextState){
  //   console.log('LETS get it on xx in should component update', nextProps, nextState)
  //   return nextState.osoby !== this.state.osoby ||
  //          nextState.ukazOsoby !== this.state.ukazOsoby
  // }
  componentWillUpdate(nextProps, nextState){
    console.log('DADADA DA DA xx component will update', nextProps, nextState)
  }

  static getDerivedStateFromProps(nextProps, prevState){
    console.log(
      '[UPD App.js] SSSSSS xx in get derived state from props', nextProps, prevState
    )
    return prevState
  }

  componentDidUpdate(prevProps, prevState){
    console.log('da da xx component did update', prevProps, prevState)
  }

  state = {
    osoby: [
      { id: 'qwes', meno: 'Kristof', lokacia: 'Nove Zamky' },
      { id: 'reqs', meno: 'Lucia', lokacia: 'Bratislava' },
      { id: 'qqwe', meno: 'Karol', lokacia: 'Svidnik' }
    ],
    
    ukazOsoby: false,
    togglKliknuty: 0,
    overeny: false
  }


  zmen = (event, id) => {
    const osobaIndex = this.state.osoby.findIndex(g => {
      return g.id === id
    })
    const osoba = {
      ...this.state.osoby[osobaIndex]
    }
    osoba.meno = event.target.value
    const osoby = [...this.state.osoby]
    osoby[osobaIndex] = osoba
    this.setState({
      osoby: osoby
    })
  }

  togglniOsobaHandler = () => {
    const ukazuje = this.state.ukazOsoby
    this.setState((prevState, props) => {
      return {
             ukazOsoby: !ukazuje,
             togglKliknuty: prevState.togglniKlikom + 1
      }
    })
  }

  zmazOsobaHandler = (osobyIndex) => {
    const osoby = [...this.state.osoby]
    osoby.splice(osobyIndex, 1)
    this.setState({osoby: osoby})
  }

  loginHandler = () => {
    this.setState({
      overeny: true
    })
  }

  render() {
    console.log('doot doot xx inside render ')

    let osDis = null

    if (this.state.ukazOsoby){
      osDis = (
        <Osoby osoby={this.state.osoby} 
               clique={this.zmazOsobaHandler} 
               zmenena={this.zmen}/>
      )
    }

    return (
      <Aukz>
        <button onClick={()=>{this.setState({ukazOsoby: true})}}>Ukaz osoby</button>
        <Cockpit ukazOsoby={this.state.ukazOsoby} 
                 osoby={this.state.osoby} 
                 buttonKlik={this.togglniOsobaHandler}
                 login={this.loginHandler}
                 />
        <overKontext.Provider value={this.state.overeny}>{osDis}</overKontext.Provider>
        
     </Aukz>
    )
  }
}


export default zklasou(App, zKlas.App)