/*
    In React component names must start in uppercase
    It is used as a tag name in other components
    ex: function Employee() { .. }
    other components can use <Employee />
*/

export function Employee() {
    // you can have the data in a variable
    let username = 'Alexandar';
    let age = 35;
    // a return statement must return an HTML template
    // {age} will display the data
    return (<div>
        <h2>Employee component</h2>
        <p>Name {username}, Age {age}</p>
    </div>)
}