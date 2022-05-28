import Form from './3.0.Form';

function Search(props) {
    return (
        <div className={props.className}>
            <div>
                <button>By Name</button>
                <button>By Ingredient</button>
            </div>

            <div>
                {/* <Form className='hidden by-name' byIngredient={false} /> */}
                <Form className='hidden' byIngredient={false} />
                <Form className='by-ingredient' byIngredient={true} />
            </div>
        </div>
    )
}

export default Search;