import React, {useState ,useRef } from 'react'
import '../Addorganization/organizestyle.css'
import emailjs from "@emailjs/browser";

const Addform = () => {

  

// const  [userData, setUserData] = useState({

//   business_type:"", conference_focus: "", country: "", details: "", email: "",
//           end_date: "",name: "", phone_number: "", short_name: "",
//           start_date: "", title: "", venue: "", website: ""
// })

// let name, value;
// const postUserData =(event)=>{

//   name= event.target.name
//   value= event.target.value

//   setUserData({...userData, [name]: value })

// }
// //connect with firebase
// const submitData = async(event)=>{
//   event.preventDefault();
//   const { business_type, conference_focus, country, details, email,
//     end_date,name, phone_number, short_name,
//     start_date, title, venue, website } = userData;

//     if(business_type && conference_focus && country && details && email &&
//       end_date &&name && phone_number && short_name &&
//       start_date && title && venue && website ){

     
//   const res = fetch('https://addconferences-a374e-default-rtdb.firebaseio.com/userDataRecords.json',
//   {
//     method : "POST",
//     headers: {
//       "Content-Type":"application/json",
//     },
//     body: JSON.stringify({
//       business_type, conference_focus, country, details, email,
//     end_date,name, phone_number, short_name,
//     start_date, title, venue, website
//     }),
//   }
//   );
//   if(res){
//     setUserData({
//       business_type:"", conference_focus: "", country: "", details: "", email: "",
//       end_date: "",name: "", phone_number: "", short_name: "",
//       start_date: "", title: "", venue: "", website: ""
//     });
//     alert('Data stored');
//   }else{
//     alert('plz fill the data ')
//   }
//   }else{
//     alert('plz fill the data ')
// }
// };
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [number, setNumber] = useState('');
const [businesstype, setBusinesstype] = useState('');
const [website, setWebsite] = useState('');
const [title, setTitle] = useState('');
  const [subTitle, setSubTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const dateInputRef = useRef(null);
  const [country, setCountry] = useState('');
  const [venue, setVenue] = useState('');
  const [focus, setFocus] = useState('');
  const [details, setDetails] = useState('');
  // const [discountHeading, setDiscountHeading] = useState('');
  // const [discount, setDiscount] = useState('');
  // const [description_0, setDescription_0] = useState('');
  // const [description_1, setDescription_1] = useState('');
  // const [description_2, setDescription_2] = useState('');
  // const [categoryHeading, setCategoryHeading] = useState('');
  // const [category, setCategory] = useState('');
  // const [category1, setCategory1] = useState('');
  // const [category2, setCategory2] = useState('');
  // const [registrationName1, setRegistrationName1] = useState('');
  // const [registrationName2, setRegistrationName2] = useState('');
  // const [registrationName3, setRegistrationName3] = useState('');
  // const [registrationType1, setRegistrationType1] = useState('');
  // const [registrationType2, setRegistrationType2] = useState('');
  // const [registrationType3, setRegistrationType3] = useState('');
  // const [registrationType4, setRegistrationType4] = useState('');
  // const [registrationType5, setRegistrationType5] = useState('');
  // const [registrationType6, setRegistrationType6] = useState('');
  // const [registrationType7, setRegistrationType7] = useState('');
  // const [registrationType8, setRegistrationType8] = useState('');
  // const [registrationType9, setRegistrationType9] = useState('');
  // const [taxDetails, setTaxDetails] = useState('');
  // const [note, setNote] = useState('');

  const [conferenceImage, setConferenceImage] = useState();

  const onInputChange = (e) => {
    console.log('conferenceImage', e.target.files[0]);
    setConferenceImage(e.target.files[0])
  }
  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log("uploaded")
    const formData = new FormData();
    formData.append("title", title);
    formData.append("subTitle", subTitle);
    formData.append("startDate", startDate);
    formData.append("endDate", endDate);
    formData.append("country", country);
    formData.append("venue", venue);
    formData.append("focus", focus);
    formData.append("details", details);
    // formData.append("discountHeading", discountHeading);
    // formData.append("discount", discount);
    // formData.append("description_0", description_0);
    // formData.append("description_1", description_1);
    // formData.append("description_2", description_2);
    // formData.append("categoryHeading", categoryHeading);
    // formData.append("category", category);
    // formData.append("category1", category1);
    // formData.append("category2", category2);
    // formData.append("registrationName1", registrationName1);
    // formData.append("registrationName2", registrationName2);
    // formData.append("registrationName3", registrationName3);
    // formData.append("registrationType1", registrationType1);
    // formData.append("registrationType2", registrationType2);
    // formData.append("registrationType3", registrationType3);
    // formData.append("registrationType4", registrationType4);
    // formData.append("registrationType5", registrationType5);
    // formData.append("registrationType6", registrationType6);
    // formData.append("registrationType7", registrationType7);
    // formData.append("registrationType8", registrationType8);
    // formData.append("registrationType9", registrationType9);
    // formData.append("taxDetails", taxDetails);
    // formData.append("note", note);
    formData.append("conferenceImage", conferenceImage);


// const form = useRef();
//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm(
//         "service_y36zshl",
//         "template_u75jujm",
//         form.current,
//         "NWtnnJd7CGQxth2Bd"
//       )
//       .then(
//         (result) => {
//           console.log(result.text);
//           window.location.reload(false);
//         },
//         (error) => {
//           console.log(error.text);
//         }
//       );
//     e.target.reset();
//       }
    }

  return (
    <div >
        <div className='FormAlignment'>
        <div style={{
          display: 'grid',
          backgroundColor: 'white',
          textAlign: 'left',
          gridGap: 5,
          alignItems: 'center',
        }}
        >
        <form style={{
              display: 'grid',
              gap: '20px',
              alignContent: 'space-between',
            }}>
                <h3>Personal Information</h3>
      <div className="flex flexrow">
              <div className="col">
                <label>Entity Name</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Name*"
                  // name='name'
                  // value={userData.name}
                  // onChange={postUserData}
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div class="col">
                <label>Email</label>
                <input
                  class="form-control"
                  type="email"
                  placeholder="example@gmail.com "
                  // name='email'
                  // value={userData.email}
                  // onChange={postUserData}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div class="col">
                <label>Phone Number &nbsp;</label>
                <input
                  class="form-control"
                  type="number"
                  placeholder="03X XXXX XXXX "
                  // name='phone_number'
                  value={number}
                  onChange={(e) => setNumber(e.target.value)}
                />
              </div>
            </div>
            <div className="flex flexrow">
              <div className="col">
                <label>Business Type</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="medical school, syndicate, event organizer*"
                  // name='business_type'
                  // value={userData.business_type}
                  // onChange={postUserData}
                  value={businesstype}
                  onChange={(e) => setBusinesstype(e.target.value)}
                />
              </div>
              <div class="col">
                <label>Website</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="https//www.example.co"
                  // name='website'
                  // value={userData.website}
                  // onChange={postUserData}
                  value={website}
                  onChange={(e) => setWebsite(e.target.value)}
                />
              </div>
            </div>
            <h3>Add Conference Data</h3>
            <div className="flex flexrow">
              <div className="col">
                <label>Title of Conference</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Title*"
                  // name='title'
                  // value={userData.title}
                  // onChange={postUserData}
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div class="col">
                <label>Short Name of Conference / Another Name of Conference </label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Short Name of Conference *"
                  // name='short_name'
                  // value={userData.short_name}
                  // onChange={postUserData}
                  value={subTitle}
                  onChange={(e) => setSubTitle(e.target.value)}
                />
              </div>
              <div class="col">
                <label>Start Date &nbsp;</label>
                <input
                  class="form-control"
                  type="date"
                  // name='start_date'
                  // value={userData.start_date}
                  // onChange={postUserData}
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                  ref={dateInputRef}
                />
              </div>
            </div>
            <div class="flex flexrow">
              <div class="col">
                <label>End Date &nbsp;</label>
                <input
                  class="form-control"
                  type="date"
                  // name='end_date'
                  // value={userData.end_date}
                  // onChange={postUserData}
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                  ref={dateInputRef}
                />
              </div>
              <div class="col">
                <label>Country</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Country*"
                  name='country'
                  // value={userData.country}
                  // onChange={postUserData}
                  value={country}
                  onChange={(e) => setCountry(e.target.value)}
                 
                />
              </div>
              <div class="col">
                <label>Venue&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Venue*"
                  name='venue'
                  // value={userData.venue}
                  // onChange={postUserData}
                  value={venue}
                  onChange={(e) => setVenue(e.target.value)}
                />
              </div>
            </div>
            <div class="flex flexrow">
              <div class="col">
                <label>Focus&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Focus *"
                  name='conference_focus'
                  // value={userData.conference_focus}
                  // onChange={postUserData}
                  value={focus}
                  onChange={(e) => setFocus(e.target.value)}
                />
              </div>
              <div class='col'>
                <label>Details&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
                <input
                  class="form-control"
                  type="text"
                  placeholder="Details *"
                  name='details'
                  // value={userData.details}
                  // onChange={postUserData}
                  value={details}
                  onChange={(e) => setDetails(e.target.value)}
                />
              </div>
             
            </div>
        
            <div class='flex flexrow'>
            
              <div class='col'>
                <label>Conference Image</label>
                <input
                  class="form-control"
                  type="file"
                  accept="image/*"
                  onChange={onInputChange}
                />
              </div>
              <br />
              {/* {values.conferenceImage == "" || values.conferenceImage == null ? "" : <img className='updatecourse-algin' src={values.conferenceImage} />} */}
              <br /><br />
            </div>
          <div className='mb-3 pt-6 '>
            <button type='submit' value="Send" >Submit</button>
          </div>
        </form>
      </div>
      
    </div>
    </div>
  )
}

export default Addform


