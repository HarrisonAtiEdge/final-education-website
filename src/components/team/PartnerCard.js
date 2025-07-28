import React from "react"
import { partners } from "../../dummydata"
import { Link } from "react-router-dom";

function PartnerCard() {
    return (
        <>
            {partners.map((val) => (
                <div className='items shadow'>
                    <div className='img'>
                        <img src={val.cover} alt={'iedge-education-partner-with'+val.title} />
                        <div className='overlay'>

                            <a className="ankeretag" href="https://pk.linkedin.com/showcase/iedge-ie/?trk=affiliated-pages" target="blank">
                                <i className='fab fa-linkedin icon'></i>
                            </a>
                            <a className="ankeretag" href="https://api.whatsapp.com/send/?phone=923343444500&text&type=phone_number&app_absent=0" target="blank">
                                <i className='fab fa-whatsapp icon'></i>
                            </a>
                        </div>
                    </div>
                    <Link to={`/partners-detail/${val.id}`} className='linking'>
                        <div className='details'>
                            <h2>{val.name} &nbsp;&nbsp;<i className='fa fa-long-arrow-alt-right'></i></h2>
                        </div>
                    </Link>
                </div>
            ))}
        </>
    )
}

export default PartnerCard