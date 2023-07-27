import { useState } from "react";
import style from "./contact.module.css"
import Output from "./Ouptut";

const Contact=()=>{
    const[name,setName]=useState("");
    const[phone,setPhone]=useState();
    const submit=(event)=>{
        console.log(event)
         event.preventDefault();
         setName(event.target[0].value)
         setPhone(event.target[1].value);
    }
    console.log(name+" "+phone);
    
    return(
        <div>
            <section>
            <form action="" onSubmit={submit}>
                <h2>fill this form</h2>
                <label htmlFor="">Name:</label>
                <input type="text" value={name}onChange={(e)=>{setName(e.target.value)}}/>
                <br /><br />
                <label htmlFor="">Phone:</label>
                <input type="number" value={phone} onChange={(e)=>{setPhone(e.target.value)}}/>
                <button>Contact-Me</button>
                

            </form>
            {/* <div className={style.output}>name :{name} phone : {phone}</div>
            <div></div> */}
            <Output name={name} phone={phone}/>
            </section>
        </div>
    )
}
export default Contact;