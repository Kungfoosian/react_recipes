import Form from './3.0.Form';

function Search(props) {
    const toggleTab = tabId => {
        console.log(tabId);
    }

    return (
        <div className={props.className}>
            <div>
                <button onClick={e => toggleTab('form-by-name')}>By Name</button>
                <button onClick={e => toggleTab('form-by-ingredient')}>By Ingredient</button>
            </div>

            <div>
                {/* <Form className='by-name' id='form-by-name' byIngredient={false}  /> */}
                <Form className='hidden' id='form-by-name' byIngredient={false}  />
                <Form className='by-ingredient' id='form-by-ingredient' byIngredient={true} />
            </div>
        </div>
    )
}

export default Search;