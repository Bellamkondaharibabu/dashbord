
import React, { useState } from 'react'
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill } from 'react-icons/bs'
import { Link, } from 'react-router-dom'
import { SlArrowRight } from "react-icons/sl";
// import { Bar } from "react-chartjs-2";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import PieChat from './PieChat';







const DashbordDesion = () => {

  const [toggle, setToggle] = useState(true);

  const data = [
    { name: 'Category 1', Xaxis: 10 },
    { name: 'Category 2', Xaxis: 20 },
    { name: 'Category 3', Xaxis: 15 },
    // Add more data as needed
  ];






  return (


    <Link to="/dashbord" onClick={() => setToggle(!toggle)} className='dashborddesion'>
   
      <main className='main-content'>

        <div className='main-body'>
          <div className='main-titel'>

            <h3>WELLCOME!</h3>
            <ul> <li> <SlArrowRight />Dashbord</li>
              <li>Welcome</li>
            </ul>

          </div>

          <div className='main-cards'>
            <div className='card'>
              <div className='card-inner'>
                <p >TOTAL SALES</p>
                <BsFillArchiveFill className='card_icon' />
              </div>
              <p>$354.5K</p>
            </div>

            <div className='card'>
              <div className='card-inner'>
                <p>TOTAL ITEM</p>
                <BsFillGrid3X3GapFill className='card_icon' />
              </div>
              <p>1256</p>
            </div>

            <div className='card'>
              <div className='card-inner'>
                <p>CUSTOMERS</p>
                <BsPeopleFill className='card_icon' />
              </div>
              <p>33</p>
            </div>

            <div className='card'>
              <div className='card-inner'>
                <p>ALERTS</p>
                <BsFillBellFill className='card_icon' />
              </div>
              <p>42</p>
            </div>
          </div>

          <div className='chates'>

            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="Xaxis" fill="yellow" />
              </BarChart>
            </ResponsiveContainer>
            <PieChat />

          </div>
         
        

        </div>

      </main>
      
    </Link>





  )
}

export default DashbordDesion