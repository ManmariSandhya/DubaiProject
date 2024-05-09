import './card.component.css';
import tut1 from '../../assets/images/tut1.jpg';
import tut2 from '../../assets/images/tut2.jpg';
import tut3 from '../../assets/images/tut3.jpg';
import tut4 from '../../assets/images/tut4.jpg';
import tut5 from '../../assets/images/tut5.jpg';
import tut6 from '../../assets/images/tut6.jpg';
import res1 from '../../assets/images/res1.jpg';
import res2 from '../../assets/images/res2.jpg';
import res3 from '../../assets/images/res3.jpg';
import res4 from '../../assets/images/res4.jpg';
import res5 from '../../assets/images/res5.jpg';
import res6 from '../../assets/images/res6.jpg';
import shop1 from '../../assets/images/shop1.jpg';
import shop2 from '../../assets/images/shop2.jpg';
import electric1 from '../../assets/images/electric1.jpg';
import electric2 from '../../assets/images/electric2.jpg';
import plum1 from '../../assets/images/plumb1.jpg';
import plum2 from '../../assets/images/plumb2.jpg';
import trans1 from '../../assets/images/trans1.jpg';
import trans2 from '../../assets/images/trans2.jpg';

import { useState, useEffect } from 'react';
import { Button, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

export function HomeCards() {
  const [selectedCategory, setSelectedCategory] = useState('tutor');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
  };

  const categories = {
    tutor: [
      {
        imageUrl: tut1,
        heading4: 'English Tutor',
        heading6: 'Abu Dhabi',
        atag: 'View Profile',
      },
      {
        imageUrl: tut2,
        heading4: 'Hindi Tutor',
        heading6: 'Dubai',
        atag: 'View Profile',
      },
      {
        imageUrl: tut3,
        heading4: 'Arabic Tutor',
        heading6: 'Ajman',
        atag: 'View Profile',
      },
      {
        imageUrl: tut4,
        heading4: 'Bengali Tutor',
        heading6: 'Dubai',
        atag: 'View Profile',
      },
      

    ],
    restaurant: [
      {
        imageUrl: res1,
        heading4: 'Verde Beach Dubai',
        heading6: 'Dubai',
        atag: 'View Restaurant',
      },
      {
        imageUrl: res2,
        heading4: 'Zenon',
        heading6: 'Dubai',
        atag: 'View Restaurant',
      },
      {
        imageUrl: res3,
        heading4: 'Lena',
        heading6: 'Order Online',
        atag: 'View Restaurant',
      },
      {
        imageUrl: res4,
        heading4: 'Smoki Moto',
        heading6: 'Dubai',
        atag: 'View Restaurant',
      },
     

    ],
    onlineShopping: [
      {
        imageUrl: shop1,
        heading4: 'Dubai Mall',
        heading6: 'Dubai',
        atag: 'View Mall',
      },
      {
        imageUrl: shop2,
        heading4: 'Mall of Emirates',
        heading6: 'Dubai',
        atag: 'View Mall',
      },

    ],
    electricians: [
      {
        imageUrl: electric1,
        heading4: 'Abu Dhabi',
        atag: 'Menu',
      },
      {
        imageUrl: electric2,
        heading4: 'Dubai',
        atag: 'Menu',
      }

    ],
    plumber: [
      {
        imageUrl: plum1,
        heading4: 'Dubai',
        atag: 'Menu',
      }
      ,
      {
        imageUrl: plum2,
        heading4: 'Dubai',
        atag: 'Menu',
      },
    ],
    transport: [
      {
        imageUrl: trans1,
        heading4: 'Dubai',
        atag: 'Book Taxi',
      }
      ,
      {
        imageUrl: trans2,
        heading4: 'Dubai',
        atag: 'Book Taxi',
      },
    ]
  };


  useEffect(() => {

    const defaultItems = categories[selectedCategory];

  }, [selectedCategory]);


  const [rating, setRating] = useState(0);



  const handleRatingClick = (value) => {
    setRating(value);
  };
  return (
   
      <div>
        <h3 className="mpcategories-heading">Explore Directory Catergory</h3>
        <div className="mt-5 directory-catergory">
          <Row className="mt-3" xs={12} md={6} lg={6} style={{ textAlign: "center" ,width:'100%'}}>
            <Col>
              <Button onClick={() => handleCategoryClick('tutor')}>Tutor</Button>
            </Col>
            <Col>
           
              <Button onClick={() => handleCategoryClick('restaurant')}>Restaurant</Button>
            
            </Col>
            <Col>
              <Button onClick={() => handleCategoryClick('onlineShopping')}>Shopping</Button>
            </Col>
            <Col>
              <Button onClick={() => handleCategoryClick('electricians')}>Electricians</Button>
            </Col>
            <Col>
              <Button onClick={() => handleCategoryClick('plumber')}>Plumber</Button>
            </Col>
            <Col>
              <Button onClick={() => handleCategoryClick('transport')}>Transport</Button>
            </Col>

          </Row>
          <div style={{marginLeft:'23px'}}>
          <Row className="mt-5" style={{width:'100%'}}>
            {categories[selectedCategory].map((item, index) => (
              <Col key={index} xs={12} md={6} lg={3} className="mb-3">
                <div className="card ">

                  <img src={item.imageUrl} className="card-img-top" />
                  <div className="card-body">
                    <h4 className="card-title" style={{ textAlign: "center" }}>{item.heading4}</h4>
                    <h6 className="card-text mt-4" style={{ textAlign: "center" }}>{item.heading6}</h6>
                    <a href="/restaurant" className="btn btn-primary cards_button " style={{ marginLeft: '36%' , color:'    color: #e73a34;' }}>{item.atag}</a>
                  </div>

                  <div style={{ textAlign: 'center', marginLeft: '0px' }}>
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span
                        key={star}
                        onClick={() => handleRatingClick(star)}
                        style={{ cursor: 'pointer', color: star <= rating ? 'gold' : 'gray' }}
                      >
                        ★ 
                      </span>
                    ))}
                    <p style={{ display: 'none' }}>Selected rating: {rating}</p>
                  </div>

                </div>


              </Col>
            ))}

          </Row>
          </div>
        </div>
      </div>
    
  )
}

