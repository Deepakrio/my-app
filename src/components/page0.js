import React from "react";
import './page0.css';

function Welcome()
{
    return <span>WELCOME</span>;
}

export class ToReact extends React.Component
{
    render()
    {
        return <center><span><Welcome/> TO REACT </span></center>;
    }
}

export default ToReact;