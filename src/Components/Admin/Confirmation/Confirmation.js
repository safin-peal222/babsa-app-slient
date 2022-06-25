import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';

const Confirmation = () => {



    const [conUser,setConUser]=useState([]);

    const updateUser=(id)=>{
        
        fetch(`http://localhost:5000/users/all-users/${id}`,
           {
            method : 'GET'
        //     headers: 
        //       {
        //               'Content-Type': 'application/json',
        //   },
        //     mode: 'cors'
          
            
           }).then(res=>{
            //  if(res){
            //     const remainingConusers=conUser.filter(user=>user._id !==id);
            //     setConUser(remainingConusers);
            //  }
            console.log("done");
            }
           ).catch((err)=>{
             console.log("problem");
           })
           
    
    }
    
    // useEffect(()=>{
    //     fetch("https://localhost:5000/users/all-users").then((res)=>{
    //         res.json()
    //     }).then((data)=>console.log(data));
    const getUsers = async ()=>{
        const response = await fetch("http://localhost:5000/users/all-users");
        const data = await response.json();
     setConUser(data);
    }
    useEffect(()=>{
        getUsers();
   
    });


    
    return (
        <div>
       <table className="table table-dark">
           <thead>
               <tr>
                   <th>
                       Serial
                   </th>
               <th>
                   Name
               </th>
               <th>
                   Batch
               </th>
               
               
               <th>
                   Email
               </th>
               </tr>

           </thead>
      
            
        {
            conUser.map((name,index)=>{
             return(
                 <tbody>
<tr>
    <td>{index+1}</td>
<td>{name.name}</td>
                     <td>{name.batch}</td>
                     <td>{name.email}</td>
                     <td><button className="btn btn-success" onClick={()=>updateUser(name._id)}>ADD</button></td>
                     <td><button className="btn btn-warning">REMOVE</button></td>
</tr>
                 </tbody>
             )
            })
        }
      </table>

        </div>
    );
};

export default Confirmation;