import { useState } from 'react';
import FormByName from './3.0.FormByName';
import FormByIngredient from './4.1.FormByIngredient';

function Search(props) {
    const [activeTab, setActiveTab] = useState('form-by-name');

    return (
        <div className={props.className} id={props.id} >
            <div className='form-selector'>
                <button className='tab by-name' onClick={() => setActiveTab('form-by-name')}>By Name</button>
                <button className='tab by-ingredient' onClick={() => setActiveTab('form-by-ingredient')}>By Ingredient</button>
            </div>

            { activeTab === 'form-by-name' ?
                <FormByName className='by-name' id='form-by-name' />
                : <FormByIngredient className='by-ingredient' id='form-by-ingredient' byIngredient={true} />
            }
        </div>
    )
}

export default Search;