import { Button } from 'antd';
import React, { useState } from 'react'
import countryRegion from '../../components/countryRegion'

import { CountryDropdown, RegionDropdown, CountryRegionData } from 'react-country-region-selector';



const Register = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [country, selectCountry] = useState("");
    const [region, selectRegion] = useState("");
    const [pincode, setPincode] = useState("");
    const [comments, setComments] = useState("");
    //const [state, setState] = useState("");
    //const [city, setCity] = useState("");

       
        const onSubmits = (event) => {

            event.preventDefault();
            console.log(name)
            console.log(email)
            console.log(phone)
            console.log(address)
            console.log(country)
            console.log(region)
            console.log(pincode)
            console.log(comments)

        };

     
    
     

    return (
        <div className="container p-5" style= {{backgroundcolor: "coral"}}>
            <div className="row">
                <div className="col-md-6 offset-md-3">
                    <h4>Register</h4>
                    <form onSubmit={(e) => onSubmits(e) }>
                        <input onChange={(e) => setName(e.target.value)} type="name" className="form-control" placeholder="Enter your name"  autoFocus />
                        <input  onChange= {(e) => setEmail(e.target.value)} type="email" className="form-control" placeholder="Enter your email" />
                        <input onChange= {(e) => setPhone(e.target.value)} type="phone" className="form-control" placeholder="Enter your phone" />
                        <textarea onChange= {(e) => setAddress(e.target.value)} type="address" className="form-control" placeholder="Enter your address"></textarea>
                        <CountryDropdown className="form-control" value={country} onChange={(val) => selectCountry(val)} />
                        <RegionDropdown className="form-control" country={country} value={region} onChange={(val) => selectRegion(val)} />
                        <input onChange= {(e) => setPincode(e.target.value)}  type="pincode" className="form-control" placeholder="Enter your pincode" />
                        <textarea onChange= {(e) => setComments(e.target.value)}  type="comments" className="form-control" placeholder="Enter your comments"></textarea>
                        
                        <Button onClick={(e) => onSubmits(e)} type="primary">Register</Button>

                    </form>
                    
                </div>
            </div>
        </div>
    );
};

export default Register;