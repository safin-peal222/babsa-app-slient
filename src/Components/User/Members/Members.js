import React, { useEffect, useState } from 'react';
import Member from "../Member/Member"

const Members = () => {
    const[members,setMembers]=useState([])
    const getMembers = async ()=>{
        const response = await fetch("http://localhost:5000/users/all-users/confirmed-users");
        const data = await response.json();
     setMembers(data);
    }
    useEffect(()=>{
        getMembers();
   
    });

    return (
        <div className="container">
            <div className="row">
                
            {
                members.map((member)=>{
                    return(
                       
                        <div className="col-lg-4">
                           <Member member={member}></Member>
                       
                           </div>
                       
                    )
                }
                )
            }
        
         </div>
        </div>
    );
};

export default Members;
