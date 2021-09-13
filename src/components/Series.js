import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect} from "react";
import { result } from 'lodash';
// import  {render } from "react-dom";
const Series = ({info, state}) => {

      const [options, setOptions] = useState({
      
        
    })

    const [featureInfo, setFeatureInfo] =useState()
     const getInfo = async () => {
      console.log(info)
      try { 
         setFeatureInfo({ data: [], isFetching: true });
         console.log("data");
        fetch(
          info.link +
            "?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&QUERY_LAYERS=" +
            info.layer +
            "&LAYERS=" +
            info.layer +
            "&INFO_FORMAT=application/json&FEATURE_COUNT=50&X=" +
            state.point.x +
            "&Y=" +
            state.point.y +
            "&WIDTH=" +
            state.shape.x +
            "&HEIGHT=" +
            state.shape.y +
            "&BBOX=" +
            state.bounds,
            //console.log(info),
          {
            method: "GET",
          }
        )
          .then((response) => response.json())
          .then((result) => {
            console.log(result)
            setFeatureInfo({ data: result.features[0].properties, isFetching: false });
          })
          .catch((error) => {
            console.error("Error:", error);
          });
        //setFeatureInfo({ ...featureInfo, isFetching: true });
      } catch (exception) {
        //console.log(exception);
          //setFeatureInfo({ featureInfo: featureInfo.data, isFetching: false });
      }
    };
     
  useEffect(( ) => {
     console.log(state )
    getInfo() 
    console.log(options)
   //featureInfo.map((e)=>console.log(e))
    console.log(featureInfo)
    let pv = featureInfo!==undefined&&Object.keys(featureInfo.data).map((e)=>(featureInfo.data[e]))
    console.log(pv)
    setOptions({

      title: {
          text: 'Time Series, 2000-2019',
      },
      yAxis: {
          title: {
              text: 'Number of Cases'
          }
      },  
      xAxis: {
          accessibility: {
              rangeDescription: 'Range: 2000 to 2019'
          }
      },  
      legend: {
          layout: 'vertical',
          align: 'right',
          verticalAlign: 'middle'
      }, 
      plotOptions: {
          series: {
              label: {
                  connectorAllowed: false
              },
              pointStart: 2010
          }
      },
     
     series : [{     
          name: 'PV1',
          data: pv
      }
      ,{
          name: 'PF1',
          data: [24916, 24064, 29742, 29851, 32490, 30282, 38121, 40434]
      }, {
          name: 'Mixed1',
          data: [11744, 17722, 16005, 19771, 20185, 24377, 32147, 39387]
      }, {
          name: 'Total1',
          data: [null, null, 7988, 12169, 15112, 22452, 34400, 34227]
      }
], 
      responsive: {
          rules: [{
              condition: {
                  maxWidth: 500
              },
              chartOptions: {
                  legend: {
                      layout: 'horizontal',
                      align: 'center',
                      verticalAlign: 'bottom'
                  }
              }
          }]
      }
  })



   
    
    }, [state])
  
 return (
         <HighchartsReact highcharts={Highcharts} options={options}  />
        )
 }
export default Series;