import CoffeeCard from '../coffee_card/CoffeeCard';
import './_coffee_search.scss';



const cards = [<CoffeeCard/>,<CoffeeCard/>,<CoffeeCard/>,<CoffeeCard/>,<CoffeeCard/>,<CoffeeCard/>]

const CoffeeSearch = () => {
    
    return (
        <div className='coffee_search'>
            <div className='container'>
                <div className='coffee_search__wrapper'>
                    <div className='coffee_search__search'>
                        <div className='title title_fz14'>Lookiing for</div>
                        <input value={"start typing here..."} className='title title_fz14 coffee_search__search_input'/>
                    </div>
                    <div className='coffee_search__filter'>
                      <div className='title title_fz14'>Or filter</div>
                      <div className='coffee_search__group_btn'>
                        <button className='coffee_search__button'>Brazil</button>
                        <button className='coffee_search__button'>Kenya</button>
                        <button className='coffee_search__button'>Columbia</button>
                      </div>
                    </div>
                </div>
                <div className='coffee_search__cards'>
                        {cards}
                </div>
            </div>
        </div>
    )
}

export default CoffeeSearch;