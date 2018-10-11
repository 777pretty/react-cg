import React, { Component } from 'react'

const zklasou = (ObalenyKomponent, nazovKlasy) => {
    const Zklasou = class extends Component {
    render(){
        return(
         <div className={nazovKlasy}>
               <ObalenyKomponent ref={this.props.posunutaRef} {...this.props} />
         </div>
    )
    }
}
    return React.forwardRef((props, ref) => {
        return <Zklasou {...props} posunutaRef={ref} />
    })
}


export default zklasou