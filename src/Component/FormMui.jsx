import React from "react";
import { FormControl, FormLabel, FormControlLabel, Radio, RadioGroup } from '@material-ui/core';
import { InputLabel, Input,Button} from '@material-ui/core';
import { useState } from "react";
import Tooltip from '@material-ui/core/Tooltip'


const FormMui = () => {
    const [fullname, setFullname] = useState({
        fname: "",
        lname: "",
        email: "",
        phone: "",
        pass: "",
        gender: "",
    });
    const [click, setClick] = useState(""); //hooks
    const inputEvent = (event) => {     //onChange Event
        console.log(event.target.value);
        console.log(event.target.name);
        const { value, name } = event.target;

        setFullname((preVal) => {
            console.log(preVal);
            return {
                ...preVal,
                [name]: value,
            }
        });
    };
   
    const onsubmits = (event) => {  //onClick Event
        event.preventDefault();
        alert("Form Submitted👍");
        setClick(fullname);
        };
    return (
        <>
    <div className="main_div">
        <div className="center_div">
     <form onSubmit={onsubmits}>
     <h1 >Login Form</h1>
        <h1 > Welcome {fullname.fname}  {fullname.lname}</h1>
        

  <FormControl margin="normal" fullWidth autoComplete="off">
 <InputLabel htmlfor="fname">FirstName</InputLabel>
 <Input id="fname" name="fname" type="text"onChange={inputEvent} 
 placeholder="Enter your FirstName" value={fullname.fname} />
 </FormControl>


 <FormControl margin="normal" fullWidth  >
    <InputLabel htmlfor="lname">LastName</InputLabel>
    <Input id="lname" type="text" name="lname" onChange={inputEvent}
    placeholder="Enter your LastName" value={fullname.lname} />
    </FormControl>

  <FormControl margin="normal" fullWidth  >
    <InputLabel htmlfor="Email">Email</InputLabel>
    <Input id="email"name="email" type="email" onChange={inputEvent}
 placeholder="Enter your Email" value={fullname.email} />
 </FormControl>
           
 <FormControl margin="normal" fullWidth  >
<InputLabel htmlfor="phone">Phone</InputLabel>
 <Input id="phone" type="phone" name="phone" onChange={inputEvent} 
 placeholder="Enter your Phone_no" value={fullname.phone} />
</FormControl>
       
  <FormControl size="large" margin="normal" fullWidth  >
    <InputLabel htmlfor="pass">Password</InputLabel>
 <Input id="pass" name="pass" type="password" onChange={inputEvent}
placeholder="Enter your Password" value={fullname.pass} />
</FormControl>

    <FormControl color="primary" margin="normal" fullWidth>
     <FormLabel>Select Gender:</FormLabel>
    <RadioGroup row name="gender" onChange={inputEvent}>
    <FormControlLabel  value="Male" control={<Radio color="primary"/>} label="Male" />
    <FormControlLabel  value="Female" control={<Radio  color="primary" />} label="Female" />
     <FormControlLabel value="other"  control={<Radio color="primary"/>} label="Other" />
     </RadioGroup>
    </FormControl>

             
         
<FormControl variant="outlined" margin="normal" fullWidth>
 <InputLabel htmlFor="msg">Message</InputLabel>
 <Input id="msg" multiline 
 rows={1} />
</FormControl>

<div className="yip">
             <Tooltip title="Click me!">
<Button variant="contained" onClick={onsubmits} size="large"
color="primary">Submit</Button>
</Tooltip>

    </div>
    </form>
            </div>
            </div>
            
        </>
    );
};
export default FormMui;
