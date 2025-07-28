import React from "react"
import Back3 from "../common/back/Back3"
import "./team.css"
import Awrapper from "../about/Awrapper"
import "../about/about.css"
import PartnerCard from "./PartnerCard"

function Partners() {
    return (
        <>
            <Back3 title='Partners' />
            <section className='team padding'>
                <div className='container101 grid'>
                    <PartnerCard />
                </div>
            </section>
            <Awrapper />
        </>
    )
}

export default Partners