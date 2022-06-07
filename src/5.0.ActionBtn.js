function ActionButton(props){
    return <button onClick={props.onClick} disabled={props.disabled} className={props.className}>
        { props.type !== 'remove' ? props.type.toUpperCase() : '' }
    </button>
}

export default ActionButton;

