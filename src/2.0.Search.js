import { useState } from 'react';
import Form from './3.0.Form';

function Search(props) {
    const [activeTab, setActiveTab] = useState('form-by-name');

    return (
        <div className={props.className} id={props.id} >
            <div className='form-selector'>
                <button onClick={() => setActiveTab('form-by-name')}>By Name</button>
                <button onClick={() => setActiveTab('form-by-ingredient')}>By Ingredient</button>
            </div>

            { activeTab === 'form-by-name' ?
                <Form className='by-name' id='form-by-name' byIngredient={false}  />
                : <Form className='by-ingredient' id='form-by-ingredient' byIngredient={true} />
            }
        </div>
    )
}

export default Search;