import { useEffect, useState } from 'react';
import Card from './10.Card';
import Spinner from 'react-bootstrap/Spinner';
import './2.1.Discover.css';
import RecipeCard from './5.3.RecipeCard';

const axios = require('axios');

function Discover(props) {
    const [loading, setLoading] = useState(false);
    const [results, editResults] = useState([]);

    const clearResults = () => editResults([]);

    const refreshResults = () => {
        clearResults();

        getResults();
    }

    const getResults = () => {
        setLoading(true);

        const options = {
            method: 'GET',
            url: '/random-recipes',
        };
          
        axios.request(options)
        .then(response => editResults([...response.data]))
        .catch(error => console.error(error))
    }

    useEffect(() => getResults(), [])

    useEffect(() => {
        if(results.length) setLoading(false);
    }, [results])

    return (
        loading ?
        <div className="spinner-container">
            <Spinner animation="border" role="status">
            
                <span className="visually-hidden">Loading...</span>

            </Spinner>
        </div>
        : results.length ?
            <RecipeCard recipeList={results} refreshResults={refreshResults} />
            : ''

    );
}

export default Discover;