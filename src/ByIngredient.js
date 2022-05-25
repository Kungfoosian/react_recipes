import Form from './Form';

function ByIngredient(props){
    return (
        <div>
            <h2>By Ingredient</h2>
            <Form byIngredient={true} />
        </div>
    )
}


export default ByIngredient;