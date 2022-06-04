import Card from './3.1.Card';
import Keywords from './3.2.Keywords';


function Discover(props) {
    return (
        <div className={props.className} id={props.id} >
            <Card className='card' />
            <Keywords className='keywords' keywords={['keyword 1', 'keyword 2', 'keyword 3', 'keyword 4', 'keyword 1', 'keyword 2', 'keyword 3', 'keyword 4']} />
        </div>);
}

export default Discover;