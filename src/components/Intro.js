import React from 'react'

const Intro = () => {
    return (
        <div style={{backgroundColor: 'white',fontFamily: 'sans-serif', borderRadius: '8px' ,width: '80%', padding: '20px',maxWidth: '900px',margin:'auto', marginTop: '40px'}}>
            <h2>Nasa Database Search</h2>
            <p>This search is pull data from Nasa's Image and Video Library API.</p>

            <p>Search anything and if it is in Nasa's system, it will display the top 10 results.</p>
        </div>
    )
}

export default Intro
