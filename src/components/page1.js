import React from 'react'

export default function Page1(props) {
    return <div>
    <h3>{props.title}   </h3>
    
    <p> React makes it painless to create interactive UIs. Design simple views for 
        each state in your application, and React will efficiently update and render 
        just the right components when your data changes.Declarative views make your 
        code more predictable and easier to debug.
    </p>


    <h3>{props.title2}</h3>
         <p> Build encapsulated components that manage their own state, then compose them to
              make complex UIs.Since component logic is written in JavaScript instead of templates,
               you can easily pass rich data through your app and keep state out of the DOM.
        </p>
    
</div>
}