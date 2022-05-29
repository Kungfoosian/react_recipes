import Form from './3.0.Form';

function Search(props) {
    const toggleTab = tabId => {
        let otherTabId = tabId === 'form-by-name' ? 'form-by-ingredient' : 'form-by-name';

        const otherForm = document.getElementById(otherTabId);

        otherForm.className = '';

        otherForm.classList.add('hidden');
        
        const form = document.getElementById(tabId);

        form.classList.remove('hidden');
        
        if (tabId === 'form-by-name') form.classList.add('by-name');
        else form.classList.add('by-ingredient');
    }

    return (
        <div className={props.className}>
            <div>
                <button onClick={e => toggleTab('form-by-name')}>By Name</button>
                <button onClick={e => toggleTab('form-by-ingredient')}>By Ingredient</button>
            </div>

            <div>
                <Form className='hidden' id='form-by-name' byIngredient={false}  />
                <Form className='by-ingredient' id='form-by-ingredient' byIngredient={true} />
            </div>
        </div>
    )
}

export default Search;