import Input from './Input';
import ActionBtn from './5.0.ActionBtn';

function FormByName(props){
    return (<div>
        <button>By Name</button>
        <Input />
        <ActionBtn type='search' />
    </div>)
}

export default FormByName;