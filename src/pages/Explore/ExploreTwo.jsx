import React from 'react'
import { Cryptocurrency, Arrow } from '../../images'
import styles from './ExploreTwo.module.scss'
import Graph from './Graph'
const ExploreTwo = () => {
    return (
        <>
            <div className={styles.MainBox}>
                <div className={styles.containerOne}>
                    <div className={styles.container}>
                        <div className={styles.iconCryptocurrency}>
                            <Cryptocurrency />
                        </div>

                        <div className={styles.forText}>
                            <p>Bitcoin <br />$38.2170</p>
                            <Arrow className={styles.Arrow} />
                            <p className={styles.arrowRateShow}>2.57%</p>
                            <button className={styles.buyButton}>Buy</button>
                            <button className={styles.sellButton}>Sell</button>

                        </div>


                    </div>

                    <div className={styles.fiatBalnceParent}>
                        <div className={styles.rightContainer}>
                            <h1>Fiat Balance </h1>
                            <p >330 BTC ≈ $1019565.00</p>
                          
                        </div>
                       <div className={styles.fiatBalanceinnerText}>
                           <h6>Coin Balance</h6>
                           <p className={styles.innerTextFiatBalance_BTC}>30 BTC</p>
                       </div>
                    </div>
                </div>
                <div className={styles.showGraph}>
                <Graph />
                </div> 
                {/* <div className={styles.Aaa}>
                    <h1 style={{ color: "red" }}>hello</h1>
                </div>

                {/* <div className={styles.Aaa}>

                </div> */}
            </div>

        </>
    )
}

export default ExploreTwo