import React, { useState } from 'react'
import { FaRegPlayCircle } from 'react-icons/fa';
import CardStatsDetails from './CardStatsDetails.js';
import ActionBox from './ActionBox.js';
//1st way
import tshirtData from "../data/tshirt.json";
import './Card.css';

export default function Card() {
    const [data, setData] = useState(tshirtData)
    const [show, setShow] = useState(false);

    // console.log(data, "data from state")

    const handleChange = () => {
        setShow(!show);
    };

    if (data) {
    // render() {
        return (
            <div className="container d-flex f-wrap">
                {data && data.map((tshirt) => (
                    <div key={Math.random().toString(36).substr(2, 9)} className="cards">
                        <div className="card-main" onClick={handleChange}>
                            <div className="grid-container-top">
                                <div className="play-btn text-align-left"><FaRegPlayCircle/></div>
                                <div className="card-heading text-align-center">
                                <p>T-SHIRT<br />{tshirt.season}</p>
                                </div>
                                <div className="card-status text-align-right"><span className="dot-green"></span></div>
                            </div>
                            {show ? (
                                <ActionBox  />
                                ) : (
                                <CardStatsDetails
                                    tshirt_id={tshirt.tshirt_id}
                                    tshirt_img={tshirt.tshirt_img}
                                    wear_type={tshirt.wear_type}
                                    we={tshirt.we}
                                    actions={tshirt.actions}
                                    sales_rate={tshirt.sales_rate}
                                    first_sales={tshirt.first_sales}
                                    items_per_week={tshirt.items_per_week}
                                    return_rate={tshirt.return_rate}
                                    sale_price={tshirt.sale_price}
                                    sale_currency={tshirt.sale_currency}
                                    preorder={tshirt.preorder}
                                    reorder={tshirt.reorder}
                                    rearrangement={tshirt.rearrangement}
                                    delivered={tshirt.delivered}
                                    returned={tshirt.returned}
                                    sold={tshirt.sold}
                                    correction={tshirt.correction}
                                    stock={tshirt.stock}
                                    handleChange={handleChange} />
                                )}
                        </div>
                    </div>
                )
                )}
            </div>
        )
    }
}
