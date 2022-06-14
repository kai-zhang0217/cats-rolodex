import Card from '../card/card.components';
import './card-list.styles.css';

const CardList = ({cats}) =>(
    <div className = 'card-list'>
        {cats.map((cat, index) => {
            return <Card cat={cat} key={index} />
        })}
        
    </div>
);

export default CardList;