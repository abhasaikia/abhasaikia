import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect } from "react";
// import  {render } from "react-dom";

// const Chart = () => {   

const Chart = () => {
 
     const [options, setOptions] = useState({
    title: {
      text: "Years"
    },
    tooltip: {
      valueSuffix: 'thousands'
    },
    chart: {
      type: 'bar'
    },
    
    categories: ['PV_2000','PV_2001','PV_2002','PV_2003','PV_2004'],
  });

  useEffect(() => {
    fetch('http://localhost/php_react/Api/PV_1.php')
    // fetch('http://localhost/php_react/Api/Test9.php')

      .then(response => {
        console.log(response)
        return response.json();
      })
      .then((result) => {
        //   console.log(result)
        console.log(result['PV_00-19'].map((e)=>Number(e.pv)))   
     
        setOptions( {
          chart: {
              type: 'bar'
          },
          title: {
              text: 'Malaria cases year-wise data'
          },
         
          xAxis: {
              categories: result['PV_00-19'].map((e)=>(e.Districts)),
              title: {
                  text: null
              }
          },
          yAxis: {
              min: 0,
              title: {
                  text: 'Cases',
                  align: 'high'
              },
              labels: {
                  overflow: 'justify'
              }
          },
          tooltip: {
              valueSuffix: 'thousand'
          },
          plotOptions: {
              bar: {
                  dataLabels: {
                      enabled: true,

                  }
              }
          },
          legend: {
              layout: 'vertical',
              align: 'right',
              verticalAlign: 'top',
              x: -40,
              y: 80,
              floating: true,
              borderWidth: 1,
              backgroundColor:
                  Highcharts.defaultOptions.legend.backgroundColor || '#FFFFFF',
              shadow: true
          },
          credits: {
              enabled: false
          },
          series: [{
              name: 'PV_2000',
              data: result['PV_00-19'].map((e)=>Number(e.PV_2000))
         }, 
         {
              name: 'PV_2001',
              data: result['PV_00-19'].map((e)=>Number(e.PV_2001))
          }, {
              name: 'PV_2002',
              data: result['PV_00-19'].map((e)=>Number(e.PV_2002))
          }, {
              name: 'PV_2003',
              data:result['PV_00-19'].map((e)=>Number(e.PV_2003))
          },{
            name: 'PV_2004',
            data: result['PV_00-19'].map((e)=>Number(e.PV_2004))
        }
          ]
      })
       
   })
 })  
  // }, []]);
 //   render(  
  return (

         <HighchartsReact highcharts={Highcharts} options={options}  />
  )
}
export default Chart;

