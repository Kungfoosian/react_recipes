import FormByName from './FormByName';
import FormByIngredient from './FormByIngredient';

function Form(props) {
    return props.byIngredient? <FormByIngredient /> : <FormByName />;
}

export default Form;