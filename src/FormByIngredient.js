import React from 'react';
import Input from './Input';
import SearchBtn from './SearchBtn';
import ActionButton from './ActionBtn';

class FormByIngredient extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            ingredients: [
                { name: 'placeholder' },
            ],
        }
    }

    render() {
        let ingredientList = this.state.ingredients;
        console.log('\n\nIngredients rendering: ' + ingredientList.length);

        return (
            <div>
                {ingredientList.map((ingredient, index) => {
                    return (
                        <div key={`ingredient-${index}`} id={index}>
                            <Input key={index} id={index}/>
                            { ingredientList.indexOf(ingredient) > 0 ? 
                                <ActionButton type='remove' onClick={ () => this.removeIngredient(index) }/> 
                                : null
                            }
                        </div>
                    )
                })}

                <div>
                    <ActionButton type='add' onClick={ () => this.addIngredient() } />
                    <SearchBtn />
                </div>
            </div>
        )
    }

    addIngredient(){
        let ingredient = { name: '' };

        let newList = this.state.ingredients;
        newList.push(ingredient);

        this.setState({
            ingredients: newList
        })
    }

    removeIngredient(id){
        console.log('removing ' + id);
        let newList = this.state.ingredients;
        
        this.setState({
            ingredients: newList.splice(id, 1)
        })
        console.log('result ' + this.state.ingredients);
    }
}

export default FormByIngredient;