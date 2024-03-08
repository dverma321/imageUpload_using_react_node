import React, { useEffect, useState } from 'react'
import Title from '../components/Title';
import '../screens/Registration.css';

// Import Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';

export const Register = () => {


  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    cpassword: ""
  })

  const [image, setImage] = useState([])

  const [allimages, setallimages] = useState([])



  async function handleSubmit(event) {

    event.preventDefault(); // this will not reload the page after calling function

    const { name, email, password, cpassword } = user;

    if (!name || !email || !password || !cpassword) {
      return window.alert("Please fill all the fields...");
    }

    if (password !== cpassword) {
      return window.alert("Password are not the same");
    }

    try {
      const URI = 'http://localhost:3000/registration';

      const response = await fetch(`${URI}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(user),
      });

    
      const data = await response.json();
      console.log("Data : ", data)

      if (data.status === 422 || !data) {
        window.alert('Invalid Registration  or Email/Phone number already exits');
        console.log("Invalid Registration");
      }
      else {
        window.alert(' Registration Successful');
        console.log(" Registration Successful");
        // history("/signin") // Login page of front end

      }

    }

    catch (error) {
      console.error('Error during registration:', error);
    }


  }

  function imageuploadmethod2(event) {
    event.preventDefault();

    const URI = 'http://localhost:3000/upload-image';

    const response = fetch(`${URI}`, {
      method: 'POST',
      crossDomain: true,
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        base64: image
      })
    }).then((res) => res.json()).then((data) => console.log(data));

  }


  // uploading images

  async function uploadImage(event) {
    event.preventDefault();

    const URI = 'http://localhost:3000/upload-image';

    try {

      const response = await fetch(`${URI}`, {
        method: 'POST',
        crossDomain: true,
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          base64: image
        })
      })

      const data = await response.json();

      console.log("Image Sent Successfully", data)
      setImage({
        image: ""
      })
    }

    catch {

      console.log("Image upload Error :")

    }

  }

  // getting images from database

  async function getImages(event) {
    

    const URI = 'http://localhost:3000/get-image';

    try {

      const response = await fetch(`${URI}`, {
        method: 'GET',
       
      })

      const data = await response.json();

      console.log("Images Read Successfully", data)
     setallimages(data.data)
    }

    catch {

      console.log("Image upload Error :")

    }

  }

  useEffect(() => {

    getImages();
  
  }, [])
  


  // function for image

  function convertToBase64(e) {
    console.log(e);
    var reader = new FileReader();
    reader.readAsDataURL(e.target.files[0]);

    reader.onload = () => {
      console.log(reader.result);
      setImage(reader.result);
    }

    reader.onerror = (err) => {
      console.log("Image upload Error : ", err)
    }

  }


  return (
    <form>


      <Title title="Registration Page" />
      <div className='Registration_container'>

        <input className='email' type='name' placeholder='Enter your name' value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} required />
        <input className='email' type='email' placeholder='Enter your Email Address' value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} required />
        <input className='password' type='password' placeholder='Enter Password' value={user.password} onChange={(e) => setUser({ ...user, password: e.target.value })} required />
        <input className='password' type='password' placeholder='Enter Confirm Password' value={user.cpassword} onChange={(e) => setUser({ ...user, cpassword: e.target.value })} required />

        {/*  using Ternary operator for image  */}

        <div className='yourprofilephoto'> Choose Your Photo

          <div className='yourimage'>

            {image === "" || image === null ? "" : <img width={100} height={100} src={image} />}
          </div>

        </div>

        <input accept='image/*' type='file' onChange={convertToBase64} />

        <button onClick={handleSubmit} > Submit </button>
        <button onClick={uploadImage}>Upload Image</button>

        <div className='imageholders'>

        {allimages.map(data => {
          return (

            <img width={100} height={100} src={data.image} />

          )
        })}

        </div>
        

      </div>
    </form>
  )
}
