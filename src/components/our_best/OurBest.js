import './_our_best.scss';
import FirstBestCard from '../../resources/img/best_coffee/first.png';
import SecondBestCard from '../../resources/img/best_coffee/second.png';
import ThirdBestCard from '../../resources/img/best_coffee/third.png';
import BestCoffeeCard from './best_coffee_card/BestCoffeeCard';


const cardsData = [
    {
        image:FirstBestCard,
        title:'Solimo Coffee Beans 2 kg',
        price:'10.73$'
    },
    {
        image:SecondBestCard,
        title:'Presto Coffee Beans 1 kg',
        price:'15.99$'
    },
    {
        image:ThirdBestCard,
        title:'AROMISTICO Coffee 1 kg',
        price:'6.99$'
    }
]

const OurBest = () => {

    const cards = cardsData.map(({image,title,price})=> <BestCoffeeCard image = {image} title = {title} price = {price}/>)

    return(
        <section className='our_best'>
            <div className='container'>
                <h4 className='title title_fz24 our_best__title'>Our best</h4>
                <div className='our_best__wrapper'>{cards}</div>
            </div>
        </section>
    )
}

export default OurBest;