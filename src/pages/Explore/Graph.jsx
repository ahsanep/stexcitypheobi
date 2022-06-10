import React from 'react'
import { ResponsiveContainer, LineChart, Line ,XAxis,YAxis,Legend} from "recharts"


const pData = [
  {
    name: "January",
    student: 13,
    fees: 10
  },
  {
    name: "February",
    student: 18,
    fees: 10
  },
  {
    name: "March",
    student: 13,
    fees: 10
  },
  {
    name: "April",
    student: 28 ,
    fees: 10
  },
]




const Graph = () => {
  return (
    <>
      <ResponsiveContainer width="100%" aspect={3}>
        <LineChart data={pData}>
          <XAxis  dataKey="name" interval={'preserveStartEnd'}  />
          <YAxis /> 
          <Line type="monotone" dataKey="student"  activeDot={{r:18}}/>
<Legend />
        </LineChart>

      </ResponsiveContainer>
    </>
  )
}

export default Graph