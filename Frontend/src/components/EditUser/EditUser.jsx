import React, { useState } from 'react';
import { useSelector, useDispatch} from 'react-redux';
import './edituser.scss';
function EditUser() {
   
   const token = useSelector((state) => state.auth.token);
   const firstname = useSelector((state) => state.name.firstname);
   const lastname = useSelector((state) => state.name.lastname);

   const [showForm, setShowForm] = useState(false);
   const [newUsername, setNewUsername] = useState('');
   const [error, setError] = useState(false);

   const dispatch = useDispatch();

   const toggleForm = () => {
      setShowForm(!showForm);
   };

   const handleInputChange = (event) => {
      setNewUsername(event.target.value);
   };

   const handleSubmit = async (event) => {
      event.preventDefault();

      try {
         const response = await fetch('http://localhost:3001/api/v1/user/profile', {
         method: 'PUT',
         headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({userName: newUsername}),
         });

         if (response.ok) {
            setError(false);
         dispatch({
            type: 'SET_USER',
            payload: {
               username: newUsername,
               firstname: firstname,
               lastname: lastname,
            },
         });

         
         } else {
         setError(true);
         }
         
      } catch (error) {
         setError(true);
      }
      setNewUsername('');
      setShowForm(false);
   };

   return (
      <>
          <section className="account-header">
            <h1>Welcome back, {firstname} {lastname}!</h1>
            {error && <p className="sign-in__error-message">Erreur lors de la modification du User Name, merci de réessayer !</p>}
            {!showForm && (
               <button className="transaction-button button" onClick={toggleForm}>Edit your name</button>
            )}
         </section>

         {showForm && (
            <form className="account-form" onSubmit={handleSubmit}>
               <label>First Name:</label>
               <input type="text" value={firstname} disabled/>
               
               <label>Last Name:</label>
               <input type="text" value={lastname} disabled />
               
               <label>New Username:</label>
               <input type="text" value={newUsername} onChange={handleInputChange} required/>
               
               <button type="submit" className='transaction-button button'>Confirm</button>
            </form>

         )}
      </>
   );
}

export default EditUser;
