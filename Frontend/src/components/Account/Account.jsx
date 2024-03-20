// IMPORTS
import { NavLink } from 'react-router-dom'
import React from 'react';


import './account.scss'


function Account() {

   return (
      <>
            <div className='cont-user'>
               <NavLink className='btn-user' to="/signup">
                  <p>Sign Up</p>
               </NavLink>
            </div>
      </>
   )
 }
 
export default Account