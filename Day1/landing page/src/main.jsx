import React from 'react'
import ReactDOM from 'react-dom/client'

import {jsx as _jsx} from "react/jsx-runtime"
// const reactElement = {
//     type: 'a',
//     props:{
//         href:'https://google.com',
//         target:'_blank'
//     },
//     children:'click me to visit google'
// }
function MyApp(){
    return (
        <div>
            <h1>Custom App | chai</h1>
        </div>
    )
}
const anotherUser = "chai aur react"

const anotherElement = (
        <a href="https://google.com" target='_blank'>Visit google</a>
)
const reactElement = React.createElement(
    'a',
    {href:'https://google.com',target:_blank},
    'click me to visit google',
    anotherElement
)
ReactDOM.createRoot(document.getElementById('root')).render(
 
  <App />
)