import React from 'react'

export default function Alert(props) {
    const Capitalize=(word)=>
    {
        const lower=word.toLowerCase();
        return lower.charAt(0).toUpperCase()+ lower.slice(1);
    }
    return ( 
        // If props.alert is null initially, it will show error so we use the below mentioned syntax to tackle that
        
        props.alert && <div class={`alert alert-${props.alert.type} alert-dismissible fade show`}role="alert" >
           <strong>{Capitalize(props.alert.type)} : </strong>{props.alert.msg}
        </div>
    )
}
