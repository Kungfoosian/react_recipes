
function Input(props) {
    let inputName = props.name === '' ? `input-${props.id}` : props.name;

    return (
        <label htmlFor={`input-${props.id}`} key={`input-${props.id}`} id={`input-${props.id}`}>
            <input type="text" id={props.id} placeholder={props.name === '' ? `ingredient ${props.id}` : props.name} onChange={props.handleChange} name={inputName} />
        </label>
    ) 
}

export default Input;