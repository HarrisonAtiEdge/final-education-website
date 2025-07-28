import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { coursesCard } from "../../dummydata"
import Heading from "../common/heading/Heading"
import Back from "../common/back/Back"
import useFetch from './useFetch';

function CoursesDetails() {
    const { id } = useParams();
    const { data: dataObject, isPending, error } = useFetch('https://edu-db-15-may-24-git-main-fahad-khataks-projects.vercel.app/read-course/' + id)

    return (
        <>
            {dataObject && (
                <div>
                    <Back title={dataObject.title} />
                    <section className='aboutHome'>
                        <div className='container101 flexSB'>
                            <div className='center row'>
                                <img src={dataObject.courseImage} alt={'iedge-education-cousrse-destails-of'+dataObject.title} />
                                <br />
                                <p>{dataObject.description}</p>
                                <br />
                                <br />
                                <p>{dataObject.description_0}</p>
                                <br />
                                <br />
                                <p>{dataObject.description_1}</p>
                                <br />
                                <br />
                                <p>{dataObject.description_2}</p>
                                <br />
                                <p>{dataObject.bulitPoint1}</p>
                                <br />
                                <p>{dataObject.bulitPoint2}</p>
                                <br />
                                <p>{dataObject.bulitPoint3}</p>
                                <br />
                                <p>{dataObject.bulitPoint4}</p>
                                <br />
                                <p>{dataObject.bulitPoint5}</p>
                                <br />
                                <p>{dataObject.bulitPoint6}</p>
                                <br />
                                <p>{dataObject.bulitPoint7}</p>
                                <br />
                                <p>{dataObject.bulitPoint8}</p>
                                <br />
                                <p>{dataObject.bulitPoint9}</p>
                                <br />
                                <p>{dataObject.bulitPoint10}</p>
                                <br />
                                {/* <br /> */}
                            </div>
                            <div className='right1 row'>
                                <Heading title={dataObject.title} subtitle={dataObject.courseBy} />
                                <div className='items'>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>Date</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.startDate}</p>
                                        </div>
                                    </div>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>Time</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.startTime}</p>
                                        </div>
                                    </div>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>Duration</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.courseDuration}</p>
                                        </div>
                                    </div>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>Price</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.price}</p>
                                            <p>{dataObject.price1}</p>
                                            <p>{dataObject.price2}</p>
                                            <p>{dataObject.price3}</p>
                                        </div>
                                    </div>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>Modality</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.mode}</p>
                                        </div>
                                    </div>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>Focus</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.focus}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <br />
                        <br />
                    </section>
                </div>
            )}
        </>
       
    )
}

export default CoursesDetails