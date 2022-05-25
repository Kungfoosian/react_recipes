// function AddIngredientBtn(props){
//     return <button>Add</button>
// }

// export default AddIngredientBtn;


function ActionButton(props){
    return <button onClick={props.onClick}>
        { props.type }
    </button>
}

export default ActionButton;

