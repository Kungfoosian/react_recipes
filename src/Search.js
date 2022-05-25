import ByName from './ByName';
import ByIngredient from './ByIngredient';
// import React from 'react';

function Search(props) {
    return (
        <div>
            <h2>Search</h2>
            <ByName />
            <ByIngredient />
        </div>
    )
}
// class Search extends React.Component {
//     // constructor(props) {
//     //     super(props);
//     // }

//     render(){
//         return (
//             <div>
//                 <h2>Search</h2>
//                 <ByName />
//                 <ByIngredient />
//             </div>
//         )
//     }
// }

export default Search;