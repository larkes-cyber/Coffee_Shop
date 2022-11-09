import './_coffee_card.scss';
import Image from '../../resources/img/best_coffee/third.png';

const CoffeeCard = () => {
    return (
        <div className='coffee_card'>
            <img className='coffee_card__image' alt='coffee' src={Image}/>
            <div className='title title_fz14 coffee_card__title'>AROMISTICO Coffee 1 kg</div>
            <div className='title title_fz14 coffee_card__subtitle'>Brazil</div>
            <h4 className='title title_fz14 coffee_card__subtitle'>6.99$</h4>
        </div>
    )
}

export default CoffeeCard;