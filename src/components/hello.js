import React from 'react'
//JSX translates into React.createElement which in turn uses the React Library hence the import React statement above

/* JSX method
 const Hello = () => {
    return (
        <div>
            <h1>Hello Joe</h1>
        </div>
    )
} */

const Hello = () => {
    return React.createElement(
        'div',
        {id:'hello', className: 'dummyClass'},
        React.createElement('h1', null, 'Hello Joe')
    )
}

export default Hello