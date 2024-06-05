import React from "react";

const Nezuko = () =>{
    // return (
        // Using JSX
        // <div>
        //     <h3>Demon</h3>
        // </div>

        // Without using JSX
    // )
    // return React.createElement('h1', null, 'Nezuko');
    return React.createElement('div', {id: "demon", className: "demon slayer corps"}, React.createElement('h1', null, 'Nezuko'));
}

export default Nezuko;