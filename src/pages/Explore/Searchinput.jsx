import React from 'react'
import styles from './Searchinput.module.scss'
// import { Search, Filter } from '../../images'


function Searchinput({ name, endIcon, imgIcons }) {
    const EndIcon = endIcon;
    const Imageicons = imgIcons

    return (
        <>
            <div className={styles.searching}>

                <input className={styles.search} type="text" placeholder={name} />
                <EndIcon className={styles.searchIcon} />
                <Imageicons className={styles.Filter} />
            </div>
        </>
    )


}


export default Searchinput;