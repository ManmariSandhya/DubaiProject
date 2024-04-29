import './Bank_mainpage.css';
import money_saving from "../../../assets/images/money_saving.png";
import online_shopping from "../../../assets/images/online_shopping.png";
import credit_card from "../../../assets/images/credit_card.png";

export function BankMainPage() {
    return (
        <div>
            <div className="bank_background_image">
                <h1>Banking Solutions</h1>
                <p style={{ width: '50%', textAlign: 'center', margin: 'auto' }} className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus at sit adipisci ipsum praesentium ab reprehenderit neque dolorum itaque magni, voluptatem tempore deserunt mollitia hic repudiandae consectetur velit possimus! Reiciendis.</p>
            </div>
            <div className='bank_container'>
                
                <div className='row '>
                    <div className='col-3'>
                        <img src={money_saving} style={{ height: '100px', width: '100px', marginLeft: '100px' }}></img>
                    </div>
                    <div className='col-3'>
                        <img src={online_shopping} style={{ height: '100px', width: '100px', marginLeft: '100px' }}></img>
                    </div>
                    <div className='col-3'>
                        <img src={credit_card} style={{ height: '100px', width: '100px', marginLeft: '100px' }}></img>
                    </div>
                </div>
              
                <div className='row ' >
                    <div className='col-3'>
                        <h4 className='ml-5' style={{ width: '100%', textAlign: 'center', margin: 'auto' }}>Money Savings</h4>
                    </div>
                    <div className='col-3'>
                        <h4 className='ml-5' style={{ width: '100%', textAlign: 'center', margin: 'auto' }}>Online Shopping</h4>
                    </div>
                    <div className='col-3'>
                        <h4 className='ml-5' style={{ width: '100%', textAlign: 'center', margin: 'auto' }}>Credit / Debit Card</h4>
                    </div>
                </div>
             
                <div className='row '>
                    <div className='col-3'>
                        <p className='ml-5 mt-3' style={{ width: '100%', textAlign: 'center', margin: 'auto' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
                    </div>
                    <div className='col-3'>
                        <p className='ml-5 mt-3' style={{ width: '100%', textAlign: 'center', margin: 'auto' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.  </p>
                    </div>
                    <div className='col-3'>
                        <p className='ml-5 mt-3' style={{ width: '100%', textAlign: 'center', margin: 'auto' }}>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    </div>
                </div>
            </div>
        </div>

    )
}