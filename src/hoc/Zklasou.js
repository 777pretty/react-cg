import React, { Component } from 'react'

const zklasou = (ObalenyKomponent, nazovKlasy) => {
    const ZKlasou = class extends Component {
    render(){
        return(
         <div className={nazovKlasy}>
               <ObalenyKomponent ref={this.props.posunutaRef} {...this.props} />
         </div>
    )
    }
}
    return React.posunutaRef((props, ref) => {
        return <ZKlasou {...props} posunutaRef={ref} />
    })
}

export default zklasou