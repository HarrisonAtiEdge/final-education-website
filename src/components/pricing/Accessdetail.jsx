import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { accessmedicine } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Back from "../common/back/Back"

function Accessdetail() {

    const { id } = useParams();
    const newid = id - 1;
    const [data, setData] = useState([accessmedicine])
    const PriceDetails = Object.entries(data[0][newid])
    const P_id = PriceDetails[0][1]
    const P_picture = PriceDetails[1][1]
    const P_name = PriceDetails[2][1]
    const P_oldPrice = PriceDetails[3][1]
    const P_price = PriceDetails[4][1]
    const P_desc = PriceDetails[5][1]
    const P_Sale = PriceDetails[6][1]
    const P_Restriction = PriceDetails[7][1]
    const P_Extent = PriceDetails[8][1]
    const P_Note = PriceDetails[9][1]

    // console.log(P_id)
    // console.log(P_picture)
    // console.log(P_name)
    // console.log(P_oldPrice)
    // console.log(P_price)
    // console.log(P_desc)

    return (
        <>
            <Back title={P_name} />
            <section className='aboutHome'>
                <div className='container101 flexSB'>
                    <div className='center row'>
                        <img src={P_picture} alt={'iedge-education-cousrse-destails'+P_name} />
                        <br />
                        <p>{P_desc}</p>
                        <br />
                    </div>
                    <div className='right1 row'>
                        <Heading title={P_name} />

                        <div className='items'>
                            <div className='item flexSB'>
                                <div className='img'>
                                    <h2>Current Price</h2>
                                </div>
                                <div className='text'>
                                    <p>$ {P_price}</p>
                                </div>
                            </div>
                            <div className='item flexSB'>
                                <div className='img'>
                                    <h2>Old Price</h2>
                                </div>
                                <div className='text'>
                                    <p>$ {P_oldPrice}</p>
                                </div>
                            </div>
                            <div className='items'>
                                <div className='item flexSB'>
                                    <div className='img'>
                                        <h2>Duration</h2>
                                    </div>
                                    <div className='text'>
                                        <p>{P_Extent}</p>
                                    </div>
                                </div>
                                <div className='item flexSB'>
                                    <div className='img'>
                                        <h2>NOTE</h2>
                                    </div>
                                    <div className='text'>
                                        <p>{P_Restriction}</p>
                                    </div>
                                </div>
                                <div className='item flexSB'>
                                    <h2>{P_Note}</h2>
                                </div>
                                <div className='subscription'>
                                    <h2>FOR SUBSCRIPTION CONTACT AS AT                              <a className="pricelogo" href="https://api.whatsapp.com/send/?phone=923343444500&text&type=phone_number&app_absent=0" target="blank">
                                        <i className='fab fa-whatsapp icon'></i>
                                    </a></h2>

                                </div>


                            </div>
                        </div>
                    </div>
                    <br />
                    <br />
                </div>
            </section>
        </>
    )
}

export default Accessdetail