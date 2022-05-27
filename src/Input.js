
function Input(props) {
    return (
        <label htmlFor={`ingredient-${props.id}`} key={`ingredient-${props.id}`} id={`ingredient-${props.id}`}>
            <input type="text" id={props.id} placeholder={props.ingredient} onChange={props.handleChange} />
        </label>
    ) 
}

export default Input;