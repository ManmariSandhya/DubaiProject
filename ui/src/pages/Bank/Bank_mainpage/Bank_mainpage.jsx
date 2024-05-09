


import "./Bank_mainpage.css";
import money_saving from "../../../assets/images/money_saving.png";
import online_shopping from "../../../assets/images/online_shopping.png";
import credit_card from "../../../assets/images/credit_card.png";

export function BankMainPage() {
    return (
        <div>
            <div className="bank_background_image">
                <h1>Banking Solutions</h1>
                <p
                    style={{ width: "50%", textAlign: "center", margin: "auto" }}
                    className="mt-5"
                >
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus at
                    sit adipisci ipsum praesentium ab reprehenderit neque dolorum itaque
                    magni.
                </p>
            </div>
            <div className="bank_container">
                <div className="row">
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img
                            src={money_saving}  className="bank_sub_img"
                           
                        ></img>
                        <h4 className="text-center mt-3">Money Savings</h4>
                        <p className="text-center mt-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img
                            src={online_shopping}
                            className="bank_sub_img"
                        ></img>
                        <h4 className="text-center mt-3">Online Shopping</h4>
                        <p className="text-center mt-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12">
                        <img
                            src={credit_card}
                            className="bank_sub_img"
                        ></img>
                        <h4 className="text-center mt-3">Credit / Debit Card</h4>
                        <p className="text-center mt-2">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
