import Head from 'next/head';
import styles from '../styles/Home.module.css';
import React, { useEffect, useState } from 'react';
function searchScreen(){
    
    const [data, setData] = useState()
    
    useEffect(() => {
        fetch("http://127.0.0.1:5000/listings").then(
            res => res.json()
        ).then(
            data => {
                setData(data)
                console.log(data)
            })
    }, [])
    return(
        <div>
          <Head className = {styles.Head}>
            <title>SearchScreen</title>
          </Head>
          <main className = {styles.container}>
            <h1 className = {styles.title}>Searchbar</h1>
              <div className = {styles.gridcontainer}>
              {(typeof data === 'undefined') ? (
                    <p>Loading...</p>
                ) : (
                data.map((listing, i ) =>(
                    <div className = {styles.griditem} key={i}>Address : {listing.Address}, Price per month : {listing.PCM}, Number of bathrooms : {listing.NumBathroom}, Number of bedrooms : {listing.NumBedroom}</div>
                ))
        )
    }
              </div>
          </main>
          <footer>

          </footer>
        </div>
    );

}

export default searchScreen