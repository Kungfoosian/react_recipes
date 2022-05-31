import Input from './5.1.Input';
import ActionBtn from './5.0.ActionBtn';

function FormByName(props){
    return (<div id={props.id} className={props.className}>
        <Input />
        <ActionBtn type='search' />
    </div>)
}

export default FormByName;