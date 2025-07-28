import React from 'react'
import { useState } from "react";
import { useParams } from "react-router-dom";
import { blog } from "../../dummydata"
import Heading from "../common/heading/Heading"
import { Table } from 'react-bootstrap';
import { Link } from "react-router-dom";
import Back8 from '../common/back/Back8';
import useFetch from './useFetch';
import './blog.css'
function BlogDetail() {

    const { id } = useParams();
    const { data: dataObject, isPending, error } = useFetch('https://edu-db-15-may-24-git-main-fahad-khataks-projects.vercel.app/show-data/' + id)
    return (
        <>
            {dataObject && (
                <div>
                    <Back8 title={dataObject.title} />
                    <section className='aboutHome'>
                        <div className='container101 flexSB'>
                            <div className='center row'>
                                <img src={dataObject.conferenceImage} alt={"iedge-education-Conferences-destails-of"+dataObject.title} />
                              
                                <p>{dataObject.description_0}</p>
                                <br />
                                <br />
                                <p>{dataObject.description_1}</p>
                                <br />
                                <br />
                                <p>{dataObject.description_2}</p>
                                {/* </div> */}
                            </div>
                            <div className='right1 row'>
                                <Heading title={dataObject.title} subtitle={dataObject.subTitle} />

                                <div className='items'>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>Venue</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.venue}</p>
                                        </div>
                                    </div>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>City</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.country}</p>
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
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>Start Date</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.startDate}</p>
                                        </div>
                                    </div>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>End Date</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.endDate}</p>
                                        </div>
                                    </div>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>Details</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.details}</p>
                                        </div>
                                    </div>
                                    <div className='item flexSB'>
                                        <div className='img'>
                                            <h2>{dataObject.discountHeading}</h2>
                                        </div>
                                        <div className='text'>
                                            <p>{dataObject.discount}</p>
                                        </div>
                                    </div>

                                    <h3 style={{ color: '#1e4682', textAlign: 'center' }}>{dataObject.taxDetails}</h3>
                                    <br />
                                    <Link to={`/enroll-now`}>
                                        <button className='outline-btn'>ENROLL NOW</button>
                                    </Link>
                                    <br />
                                    <br />
                                    <h2 style={{ textAlign: 'center', color: '#1e4682' }}>Pricing</h2>

                                    <h3 style={{ color: '#1e4682', textAlign: 'center' }}>{dataObject.note}</h3>

                                    <br />
                                    <br />
                                    <div className="TableStyle">
                  <Table hover>
                    <thead className='t_heading'>
                      <tr>
                        <th>{dataObject.categoryHeading}</th>
                        <th>{dataObject.registrationName1}</th>
                        <th>
                          {dataObject.registrationName2}
                        </th>
                        <th>
                          {dataObject.registrationName3}
                        </th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th>
                          {dataObject.category}
                        </th>
                        <td>{dataObject.registrationType1}</td>
                        <td>{dataObject.registrationType2}</td>
                        <td>{dataObject.registrationType3}</td>
                      </tr>
                      <tr>
                        <th>
                          {dataObject.category1}
                        </th>
                        <td>{dataObject.registrationType4}</td>
                        <td>{dataObject.registrationType5}</td>
                        <td>{dataObject.registrationType6}</td>
                      </tr>
                      <tr>
                        <th>
                          {dataObject.category2}
                        </th>
                        <td>{dataObject.registrationType7}</td>
                        <td>{dataObject.registrationType8}</td>
                        <td>{dataObject.registrationType9}</td>
                      </tr>
                    </tbody>
                  </Table>
                </div>
                                    
                                </div>
                            </div>
                        </div>
                    </section >
                </div>
            )}
        </>

    )
}

export default BlogDetail