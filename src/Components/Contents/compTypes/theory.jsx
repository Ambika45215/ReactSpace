import React from "react";
import { Component } from "react";

// functional components

function Theory(){
    return(
        <div>
        <h1>Hii</h1>
        </div>
    )
}

// export default Theory;

export function Example(){
    return(
        <div>
            <h1>Ambika</h1>
        </div>
    )
}

export default function Example1(){
    return (
        <div>
            <h1>How are u ?</h1>
        </div>
    )
}

// class components

const Cls= class Example2 extends Component{    //inheritance 
    constructor(){
        super();
    }

    render(){
        return(
            <div>
                <h1>I'm Fine</h1>
            </div>
        )
    }
}

// export default Example2;
export  {Cls};