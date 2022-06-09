import React from 'react'
import styles from "./Explore.module.scss"
import { Shape, Arrow } from '../../images'
import { Search, Filter } from '../../images'
import CountriesTable from './CountriesTable'
import Searchinput from './Searchinput'


const Explore = () => {
  return (
    <div className={styles.mainContainer}>
      <h3>Top Movers</h3>

      <div className={styles.parent}>

        <div className={styles.items}>

          <Shape className={styles.Shape} />
          <Arrow className={styles.Arrow} />
          <p>Ethrium <br></br> $2,812.00</p>
          <p className={styles.percentage}><b>22.7%</b></p>
        </div>
        <div className={styles.items}>

          <Shape className={styles.Shape} />
          <Arrow className={styles.Arrow} />
          <p>Ethrium <br></br> $2,812.00</p>
          <p className={styles.percentage}><b>22.7%</b></p>
        </div>
        <div className={styles.items}>

          <Shape className={styles.Shape} />
          <Arrow className={styles.Arrow} />
          <p>Ethrium <br></br> $2,812.00</p>
          <p className={styles.percentage}><b>22.7%</b></p>
        </div>

        <div className={styles.items}>

          <Shape className={styles.Shape} />
          <Arrow className={styles.Arrow} />
          <p>Ethrium <br></br> $2,812.00</p>
          <p className={styles.percentage}><b>22.7%</b></p>
        </div>
        <div className={styles.items}>

          <Shape className={styles.Shape} />
          <Arrow className={styles.Arrow} />
          <p>Ethrium <br></br> $2,812.00</p>
          <p className={styles.percentage}><b>22.7%</b></p>
        </div>

        <div className={styles.items}>

          <Shape className={styles.Shape} />
          <Arrow className={styles.Arrow} />

          <p>Ethrium <br></br> $2,812.00</p>
          <p className={styles.percentage}><b>22.7%</b></p>
        </div>


      </div>
      {/* div end here */}

      <Searchinput name="ahsan" endIcon={Search} imgIcons={Filter} />
 
      <div className={styles.table}>
        <CountriesTable />

      </div>
    </div>

  )
}

export default Explore;