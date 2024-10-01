import React, { useState, useEffect } from 'react';
import styles from '../styles/profile.module.css'


function ProfilePage() {
  const [accounts, setAccounts] = useState([]);

  // useEffect(() => {
  //   fetch('https://example.com/accounts')
  //     .then(response => response.json())
  //     .then(data => setAccounts(data))
  //     .catch(error => console.error(error));
  // }, []);

  return (
    <div class = {styles.containers}>
      <div class = {styles.profileContainer}>
        <div class = {styles.userPhoto}>
          {/* <img src={"mwphoto"} alt="userPhoto"/> */}
        </div>
        <ul class = {styles.infoBox}>
          <div class = {styles.username}>Mariam Wahba</div>
          <div class = {styles.jobPosition}>Front-end developer</div>
          <div class = {styles.location}>London, England</div>
          <div class = {styles.contact}> 
            {/* <Link to="/">Contact info</Link> */}
            Contact info
          </div>
        </ul>
      </div>

      <div class = {styles.connectSuggestContainer}>
        <section class = {styles.list}>
          <div class = {styles.listElement}>
            <div class = {styles.userPhoto}>
              {/* <img src={"mwphoto"} alt="userPhoto"/> */}
            </div>
            <ul class = {styles.infoBox}>
              <div class = {styles.username}>Mariam Wahba</div>
              <div class = {styles.jobPosition}>Front-end developer</div>
            </ul>
            <button class = {styles.button}>Connect</button>
          </div>
          
          <div class = {styles.listElement}>
            <div class = {styles.userPhoto}>
              {/* <img src={"mwphoto"} alt="userPhoto"/> */}
            </div>
            <ul class = {styles.infoBox}>
              <div class = {styles.username}>Mariam Wahba</div>
              <div class = {styles.jobPosition}>Front-end developer</div>
            </ul>
            <button class = {styles.button}>Connect</button>
          </div>

          <div class = {styles.listElement}>
            <div class = {styles.userPhoto}>
              {/* <img src={"mwphoto"} alt="userPhoto"/> */}
            </div>
            <ul class = {styles.infoBox}>
              <div class = {styles.username}>Mariam Wahba</div>
              <div class = {styles.jobPosition}>Front-end developer</div>
            </ul>
            <button class = {styles.button}>Connect</button>
          </div>

          <div class = {styles.listElement}>
            <div class = {styles.userPhoto}>
              {/* <img src={"mwphoto"} alt="userPhoto"/> */}
            </div>
            <ul class = {styles.infoBox}>
              <div class = {styles.username}>Mariam Wahba</div>
              <div class = {styles.jobPosition}>Front-end developer</div>
            </ul>
            <button class = {styles.button}>Connect</button>
          </div>
        </section>
      </div>
    </div>
    
    
  );
}

export default ProfilePage;
