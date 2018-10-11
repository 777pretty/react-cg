import React from 'react'

const zklasou = (ObalenyKomponent, nazovKlasy) => {
    return (props) => (
    <div className={nazovKlasy}>
        <ObalenyKomponent ref={props.posunutaRef} {...props} />
    </div>
    )
}

export default zklasou