import './_best_coffee_card.scss';

const BestCoffeeCard = (props) => {
    return(
        <div className='best_coffee_card'>
            <img src={props.image} alt = "best_coffee"/>
            <div className='title title_fz14 best_coffee_card__title'>{props.title}</div>
            <div className='title title_fz14 best_coffee_card__price'>{props.price}</div>
        </div>
    )
}

export default BestCoffeeCard;