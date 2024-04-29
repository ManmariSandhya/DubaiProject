import './Mainpage.css';


import { HomeCategories } from '../../components/categories/categories.component';
import { HomeCards } from '../../components/card/card.component';
import { HowitWorks } from '../../components/how_itworks/how_itworks.component';
import { HomeSliderComponent } from '../../components/home-slider/home-slider.component';

export function MainPageComponent(){
    return(
        <div className="mt-5">
           
            <div>
                <HomeSliderComponent></HomeSliderComponent>
            </div>
            <div className='mt-5'>
                <HomeCategories></HomeCategories>
            </div>
            <div className='mt-5'>
                <HomeCards></HomeCards>
            </div>
            <div className='mt-5'>
                <HowitWorks></HowitWorks>
            </div>
        </div>
    )
}