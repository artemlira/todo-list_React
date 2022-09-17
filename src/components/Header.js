import React from "react";


export default function Header({ authentification, logIn, logOut }) {
   return (
      <div className="header">
         <h2>Список завдань</h2>
         {
            authentification ?
               <div className="login" onClick={logOut}>
                  <div className="avatar">
                     <img src={authentification.photoURL} />
                  </div>
                  <div className="user__name">
                     <p>{authentification.displayName}</p>
                     <p className="email">{authentification.email}</p>

                  </div>
               </div>
               :
               <div className="login" onClick={logIn}>
                  Вхід
               </div>
         }
      </div>
   );
}