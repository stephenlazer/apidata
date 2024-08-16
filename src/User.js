import React from 'react';
// Pass Function as Props
function User(props){
    return(
        <div className="alert-cta">
            <button onClick={props.userDataPassing}>Click</button>
        </div>
    )
}
export default User;