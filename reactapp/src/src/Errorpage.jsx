import React from 'react'
import styles from './Error.module.css'


const Errorpage = () =>{
    return (
        <>
        <div id="not found" className={styles.container}>
            <div className="not found">
                <h1>404</h1>
            </div>
            <h2>Sorry,Page Not Found</h2>
        </div>
        </>
    )
}
export default Errorpage
