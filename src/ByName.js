import Form from './Form';

function ByName(props){
    return (
        <div>
            <h2>By Name</h2>
            <Form byIngredient={false} />
        </div>
    )
}


export default ByName;