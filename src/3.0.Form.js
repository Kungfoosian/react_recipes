import FormByName from './4.0FormByName';
import FormByIngredient from './4.0.FormByIngredient';

function Form(props) {
    return props.byIngredient? <FormByIngredient /> : <FormByName />;
}

export default Form;