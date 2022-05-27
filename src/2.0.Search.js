import Form from './3.0.Form';

function Search(props) {
    return (
        <div class={props.class}>
            <Form byIngredient={false} />
            <Form byIngredient={true} />
        </div>
    )
}

export default Search;