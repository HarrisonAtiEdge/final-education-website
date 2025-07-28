import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { partners } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Back from "../common/back/Back"

function PartnerDetails() {
    const { id } = useParams();
    const newid = id - 1;
    const [data, setData] = useState([partners])
    const Readmore = Object.entries(data[0][newid])
    const R_id = Readmore[0][1]
    const R_Title = Readmore[1][1]
    const R_Picture = Readmore[2][1]
    const R_Readmore = Readmore[3][1]
    const R_Para1 = Readmore[4][1]
    const R_Heading = Readmore[5][1]
    const R_Para2 = Readmore[6][1]
    return (
        <>
            <Back title={R_Title} />
            <section className='aboutHome'>
                <div className='container101 flexSB'>
                    <div className='end row'>
                        <img src={R_Picture} alt={'iedge-education-partnership-with-'+R_Title} />
                    </div>
                    <div className='right row'>
                        <div className='outline'>

                            <Heading title={R_Title} />
                            <p>{R_Para1}</p>
                            <br />
                            <h2>{R_Heading}</h2>
                            <br />
                            <p>{R_Para2}</p>
                            <br />

                        </div>
                    </div>
                </div>
                <br />
                <br />
            </section>
        </>
    )
}

export default PartnerDetails