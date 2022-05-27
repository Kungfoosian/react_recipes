import Form from './3.0.Form'

function Discover(props) {
    return (<div>
                <Form byIngredient={false} />
                <Form byIngredient={true} />
            </div>);
}

export default Discover;