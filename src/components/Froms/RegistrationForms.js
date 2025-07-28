import React, { useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Dropdown from 'react-bootstrap/Dropdown'
import './Form.css'
import Back1 from "../common/back/Back1"
import { blog } from "../../dummydata"
import { coursesCard } from "../../dummydata"
import emailjs from "@emailjs/browser";

function RegistrationForm() {

    // const [title, setTitle] = useState('Select Title *');
    const [title, setTitle] = useState('');
    const [fname, setFname] = useState('');
    const [lname, setLname] = useState('');
    const [date, setDate] = useState('');
    const [expiryDate, setExpiryDate] = useState('');
    const dateInputRef = useRef(null);
    const [cnic, setCNIC] = useState('');
    const [passport, setPassPort] = useState('');
    // const [gender, setGender] = useState('Select Gender *');
    const [gender, setGender] = useState('');
    const [pmdc, setPMDC] = useState('');
    const [currentAddress, setCurrentAddress] = useState('');
    const [permanentAddress, setPermanentAddress] = useState('');
    const [organisation, setOrganisation] = useState('');
    const [email, setEmail] = useState('');
    const [mobileNumber, setMobileNumber] = useState('');
    const [officeNumber, setOfficeNumber] = useState('');
    // const [country, setCountry] = useState('Select Country *');
    const [country, setCountry] = useState('');
    // const [qualification, setQualification] = useState('Select Qualification *');
    const [qualification, setQualification] = useState('');
    const [yearOfQualification, setYearOfQualification] = useState('');
    const [message, setMessage] = useState('');
    const [signature, setSignature] = useState('');
    const form = useRef();
    const [newTitle, setNewTitle] = useState('')
    // const [conferences, setConferences] = useState('Select Conferences ');
    const [conferences, setConferences] = useState('');
    // const [courses, setCourses] = useState('Select Courses ');

    const handleCountry = (e) => {
        console.log(e);
        setCountry(e)
    }
    const handleConferences = (e) => {
        console.log(e);
        setConferences(e)
    }

    // const handleCourses = (e) => {
    //     console.log(e);
    //     setCourses(e)
    // }

    const handleGender = (e) => {
        console.log(e);
        setGender(e)
    }
    const handleTitle = (e) => {
        console.log(e);
        setTitle(e)
        setNewTitle(e)
    }
    const handleQualification = (e) => {
        console.log(e);
        setQualification(e)
    }



    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_h1e5eyj', 'template_l0n7abf', form.current, 'm4iKMISmR1vd9sgfP')
            .then((result) => {
                // console.log(
                //     "Title : ", title,
                //     " First Name:  ", fname,
                //     " Last Name:  ", lname,
                //     " Date of Birth  :  ", date,
                //     " CNIC or PassPort Number:  ", cnic,
                //     " Gender:  ", gender,
                //     " PMDC:  ", pmdc,
                //     " Expiry Date (Of PMDC ) :  ", expiryDate,
                //     'Email: ', email,
                //     " WhatsApp Number:  ", mobileNumber,
                //     "Country:  ", country,
                //     "Current Address:  ", currentAddress,
                //     "Permanent Address:  ", permanentAddress,
                //     " Place Of Practice:  ", organisation,
                //     " Contact Number:  ", officeNumber,
                //     "Your Qualification: ", qualification,
                //     'Why Do you want to attend this course / conferences?: ', message,
                //     " Signature:  ", signature,
                //     " PassPort Number:  ", passport,
                //     "Conferences:  ", conferences,
                //     // "Course:  ", courses,
                // )
                console.log(result.text);
                alert('Your Details  hasbeen Sent..!')
                window.location.reload(false);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (
        <>
            <Back1 title='Pre Registration Form' />
            <div className='FormAlignment'>
                
                    <form ref={form} onSubmit={sendEmail}
                        style={{
                            display: 'grid',
                            gap: '20px',
                            alignContent: 'space-between',
                        }}
                    >
                        <div class="row">
                            <div class="col">
                                <label>Title</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_title'
                                    placeholder="Title*"
                                    value={title}
                                    onChange={(e) => setTitle(e.target.value)}
                                />
                                {/* <DropdownButton
                                    title={title}
                                    name='dropdown-advance1-button'
                                    value={title}
                                    id="dropdown-advance1-button"
                                    onSelect={handleTitle}
                                    variant={{ color: 'white' }}
                                    size="md"
                                >
                                    <div style={{ maxHeight: "300px", overflow: 'auto' }}>
                                        <Dropdown.Item id='dropdown-item' eventKey="Mr.">Mr.</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Ms.">Ms.</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Mrs.">Mrs.</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Dr.">Dr.</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Prof.">Prof.</Dropdown.Item>
                                    </div>
                                </DropdownButton> */}
                            </div>
                            <div class="col">
                                <label>First Name</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_Fname'
                                    placeholder="First Name *"
                                    value={fname}
                                    onChange={(e) => setFname(e.target.value)}
                                />
                            </div>
                            <div class="col">
                                <label>Last Name</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_Lname'
                                    placeholder="Last Name *"
                                    value={lname}
                                    onChange={(e) => setLname(e.target.value)}
                                />
                            </div>

                        </div>

                        <div class="row">
                            <div class="col">
                                <label>Date of Birth &nbsp;</label>
                                <input
                                    class="form-control"
                                    type="date"
                                    name='user_dob'
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    ref={dateInputRef}
                                />
                            </div>
                            <div class="col">
                                <label>CNIC (Optional)</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_cnic'
                                    placeholder="CNIC"
                                    value={cnic}
                                    onChange={(e) => setCNIC(e.target.value)}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label>PassPort Number (Optional)</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_passport'
                                    placeholder="PassPort Number"
                                    value={passport}
                                    onChange={(e) => setPassPort(e.target.value)}
                                />
                            </div>
                            <div class="col">
                                <label>Signature</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_signature'
                                    placeholder="Signature"
                                    value={signature}
                                    onChange={(e) => setSignature(e.target.value)}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label>Gender</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_gender'
                                    placeholder="Gender *"
                                    value={gender}
                                    onChange={(e) => setGender(e.target.value)}
                                />
                                {/* <DropdownButton
                                    title={gender}
                                    name='user_gender'
                                    id="dropdown-advance-button"
                                    onSelect={handleGender}
                                    variant={{ color: 'white' }}
                                    size="md"
                                >
                                    <div style={{ maxHeight: "300px", overflow: 'auto' }}>
                                        <Dropdown.Item id='dropdown-item' eventKey="Male">Male</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Female">Female</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Other">Other</Dropdown.Item>
                                    </div>
                                </DropdownButton> */}
                            </div>
                            <div class="col">
                                <label>PMDC (Optional)</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_pmdc'
                                    placeholder="PMDC (Optional)"
                                    value={pmdc}
                                    onChange={(e) => setPMDC(e.target.value)}
                                />
                            </div>
                            <div class="col">
                                <label>Expiry Date (Of PMDC )&nbsp;</label>
                                <input
                                    class="form-control"
                                    type="date"
                                    name='user_expirydate'
                                    value={expiryDate}
                                    onChange={(e) => setExpiryDate(e.target.value)}
                                    ref={dateInputRef}
                                />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label>Email</label>
                                <input
                                    class="form-control"
                                    type="email"
                                    name='user_email'
                                    placeholder="Email *"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </div>
                            <div class="col">
                                <label>WhatsApp Number </label>
                                <input
                                    class="form-control"
                                    type="number"
                                    name='user_whatsappno'
                                    placeholder="WhatsApp Number"
                                    value={mobileNumber}
                                    onChange={(e) => setMobileNumber(e.target.value)}
                                />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                {/* <label>Choose your Country</label> */}
                                <label>Country</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_country'
                                    placeholder="Country *"
                                    value={country}
                                    onChange={(e) => setCountry(e.target.value)}
                                />
                                {/* <DropdownButton
                                    title={country}
                                    name='user_country'
                                    id="dropdown-advance-button"
                                    onSelect={handleCountry}
                                    variant={{ color: 'white' }}
                                    size="md"
                                >
                                    <div style={{ maxHeight: "300px", overflow: 'auto' }}>
                                        <Dropdown.Item id='dropdown-item' eventKey="Afghanistan">Afghanistan</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Aland Island">Aland Island</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Albania">Albania</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="American Samoa">American Samoa</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Andorra">Andorra</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Angola">Angola</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Anguilla">Anguilla</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Antarctica">Antarctica</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Antigua and Barbuda">Antigua and Barbuda</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Argentina">Argentina</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Armenia">Armenia</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Aruba">Aruba</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Australia">Australia</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Austria">Austria</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Azerbaijan">Azerbaijan</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Bahamas">Bahamas</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Bangladesh">Bangladesh</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Barbados">Barbados</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Belarus">Belarus</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Belgium">Belgium</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Belize">Belize</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Benin">Benin</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Bermuda">Bermuda</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Bhutan">Bhutan</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Bolivia">Bolivia</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Bosnia and Herzegovina">Bosnia and Herzegovina</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Botswana">Botswana</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Bouvet Island">Bouvet Island</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Brazil">Brazil</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="British Indian Ocean Territory">British Indian Ocean Territory</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Brunei Darussalam">Brunei Darussalam</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Bulgaria">Bulgaria</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Burikina Faso">Burikina Faso</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Cambodia">Cambodia</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Cameroon">Cameroon</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Canada">Canada</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Cape Verde">Cape Verde</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Cayman Island">Cayman Island</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Central African Republic">Central African Republic</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Chad">Chad</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Chile">Chile</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="China">China</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Christmas Island">Christmas Island</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Cocos (Keeling) Island">Cocos (Keeling) Island</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Colombia">Colombia</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Comoros">Comoros</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Congo">Congo</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Cook Island">Cook Island</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Costa Rica">Costa Rica</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Cote Divire">Cote Divire</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Croatia">Croatia</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Cuba">Cuba</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Cyprus">Cyprus</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Czech Republic">Czech Republic</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Pakistan">Pakistan</Dropdown.Item>
                                    </div>
                                </DropdownButton> */}
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label>Current Address</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_currentAddress'
                                    placeholder="Current Address"
                                    value={currentAddress}
                                    onChange={(e) => setCurrentAddress(e.target.value)}
                                />
                            </div>
                            <div class="col">
                                <label>Permanent Address</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_permanentAddress'
                                    placeholder="Permanent Address"
                                    value={permanentAddress}
                                    onChange={(e) => setPermanentAddress(e.target.value)}
                                />
                            </div>
                        </div>

                        <div class="row">
                            <div class="col">
                                <label>Place Of Practice</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_placeOfPractice'
                                    placeholder="Place Of Practice"
                                    value={organisation}
                                    onChange={(e) => setOrganisation(e.target.value)}
                                />
                            </div>
                            <div class="col">
                                <label>Contact Number</label>
                                <input
                                    class="form-control"
                                    type="number"
                                    name='user_contactno'
                                    placeholder="Contact Number"
                                    value={officeNumber}
                                    onChange={(e) => setOfficeNumber(e.target.value)}
                                />
                            </div>

                        </div>
                        <div class="row">
                            <div class="col">
                                <label>Your Qualification</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_qualification'
                                    placeholder="Your Qualification"
                                    value={qualification}
                                    onChange={(e) => setQualification(e.target.value)}
                                />
                                {/* <DropdownButton
                                    title={qualification}
                                    id="dropdown-advance-button"
                                    name='user_qualification'
                                    onSelect={handleQualification}
                                    variant={{ color: 'white' }}
                                    size="md"
                                >
                                    <div style={{ maxHeight: "300px", overflow: 'auto' }}>
                                        <Dropdown.Item id='dropdown-item' eventKey="Under Graduate">Under Graduate</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Bachelor's degree">Bachelor's degree</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Master's degree">Master's degree</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Doctoral degree">Doctoral degree</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Professional degree ">Professional degree </Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Engineering">Engineering</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="PhD">PhD</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Diploma">Diploma</Dropdown.Item>
                                        <Dropdown.Item id='dropdown-item' eventKey="Certificate">Certificate</Dropdown.Item>
                                    </div>
                                </DropdownButton> */}
                            </div>
                            <div class="col">
                                <label>Year Of Qualification &nbsp;</label>
                                <input
                                    class="form-control"
                                    type="date"
                                    name='user_qualificationYear'
                                    value={yearOfQualification}
                                    onChange={(e) => setYearOfQualification(e.target.value)}
                                    ref={dateInputRef}
                                />
                            </div>
                        </div>
                        <div class="row">
                            <div class="col">
                                <label>Conferences</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_conferences'
                                    placeholder="Conferences"
                                    value={conferences}
                                    onChange={(e) => setConferences(e.target.value)}
                                />
                                {/* <DropdownButton
                                    title={conferences}
                                    // name='user_conference'
                                    id="dropdown-advance-button"
                                    onSelect={handleConferences}
                                    variant={{ color: 'white' }}
                                    size="md"
                                >
                                    {blog.map((val) => (
                                        <div style={{ maxHeight: "300px", overflow: 'auto' }}>
                                            <Dropdown.Item id='dropdown-item' name={val.title} eventKey={val.title}>{val.title}</Dropdown.Item>
                                        </div>
                                    ))}
                                </DropdownButton> */}
                            </div>
                        </div>
                        <div class="row">
                            {/* <div class="col">
                                <label>Courses</label>
                                <DropdownButton
                                    title={courses}
                                    name='user_course'
                                    id="dropdown-advance-button"
                                    onSelect={handleCourses}
                                    variant={{ color: 'white' }}
                                    size="md"
                                >
                                    {coursesCard.map((val) => (
                                        <div style={{ maxHeight: "300px", overflow: 'auto' }}>
                                            <Dropdown.Item id='dropdown-item' eventKey={val.coursesName}>{val.coursesName}</Dropdown.Item>
                                        </div>
                                    ))}
                                </DropdownButton>
                            </div> */}
                            <div class="col">
                                <label>Why Do you want to attend this course / conferences?</label>
                                <input
                                    class="form-control"
                                    type="text"
                                    name='user_message'
                                    placeholder="Why Do you want to attend this course?"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                />
                            </div>
                        </div>

                        <button className='submit-button' type="submit" value="Send">
                            SUBMIT
                        </button>
                    </form>
                </div>
            {/* </div> */}
        </>
    )
}

export default RegistrationForm