function ActionButton(props){
    return <button onClick={props.onClick}>
        { props.type }
    </button>
}

export default ActionButton;

