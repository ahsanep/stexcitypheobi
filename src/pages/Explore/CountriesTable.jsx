import React, { useEffect, useState } from 'react'
import DataTable from 'react-data-table-component'
import axios from 'axios';
import styles from "./CountriesTable.module.scss"
import { Shape } from '../../images'; 

const CountriesTable = () => {

    const [countries,setCountries] = useState([])

    const getCountries = async ()=>{
        try {
            const resp = await axios.get('https://restcountries.com/v2/all');
           console.log(resp.data)
            setCountries(resp.data)
        } catch (error) {
            console.log(error)
        }
    }
 const column = [
    {
        name:"#",
        selector:(row) => row.id,
    },
    {
     
        cell:(row) =><img src={<Shape className='Shape'/>} width={50} height={50} alt="no tloaded" />,
      
   
    },
     {
         name:"Name",
         selector:(row) => row.name,
       
    
     },
    
  ,
     {
        name:"Price",
        selector:(row) => row.nativeName,
    },
    {
        name:"24 Hours",
        selector:(row) => row.capital,
    },  {
        name:"24h Volume",
        selector:(row) =><img width={50} height={50} src={row.flag} />,
    },  {
        name:"Market Cap",
        selector:(row) => row.name,
    },
    {
        name:"1 year",
        cell:(row) => <button className={styles.tableButton}>Details</button>,
    },
 ]

    useEffect(()=>
    {
        getCountries()
    },[])
  return (
      <div className={styles.table}>
   <DataTable  columns={column} data={countries}  />
   </div>
  )
}

export default CountriesTable