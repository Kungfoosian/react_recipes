import Form from './3.0.Form'

function Discover(props) {
    return (
        <div className={props.className}>
            <Form byIngredient={false} />
            <Form byIngredient={true} />
        </div>);
}

export default Discover;