import Form from './3.0.Form';

function Search(props) {
    return (
        <div className={props.className}>
            <Form className='by-name' byIngredient={false} />
            <Form className='by-ingredient' byIngredient={true} />
        </div>
    )
}

export default Search;