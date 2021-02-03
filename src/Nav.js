import React , {useState,useEffect}from 'react';
import './Nav.css'

function Nav() {
    const [show,handleShow] = useState(false);
    useEffect(() => {
       window.addEventListener("scroll",()=>{
           if(window.scrollY>100){
               handleShow(true);
           }else handleShow(false);
       });
     return () =>{
       window.removeEventListener("scroll");
     };
    }, [])

    return (
        <div className={`nav ${show && "nav_black"}`}>
            <img className="nav_logo" src="http://whatchareading.com/wp-content/uploads/2015/01/Netflix_Logo_Digital-Video.png"/>

            <img className="nav_profile" src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"/>
        </div>
    )
}

export default Nav
