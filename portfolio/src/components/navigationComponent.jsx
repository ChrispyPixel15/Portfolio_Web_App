import React from "react";

function NavigationComponent({key, name, navFunction, pos}) {
    return (
        <button key={key} onClick={navFunction} className={`button ${pos}`}>
            {name}
        </button>
    )
}

export default NavigationComponent;