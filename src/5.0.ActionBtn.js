function ActionButton(props){
    return <button onClick={props.onClick}>
        { props.type.toUpperCase() }
    </button>
}

export default ActionButton;

