import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState, useEffect} from "react";
import { result } from 'lodash';
// import  {render } from "react-dom";
const Series = ({info, state, featureInfo1}) => {

      const [options, setOptions] = useState({
      
        
    })
    const [chartData, setChartData] = useState()
    const [pfData, setPfData]=useState()
    const[mixedData, setMixedData]= useState()
    const [featureInfo, setFeatureInfo] =useState()
    //  const getInfo = async () => {
    //   console.log(info)
    //   try { 
    //      setFeatureInfo({ data: [], isFetching: true });
    //      console.log("data");
    //     fetch(
    //       info.link +
    //         "?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&QUERY_LAYERS=" +
    //         info.layer +
    //         "&LAYERS=" +
    //         info.layer +
    //         "&INFO_FORMAT=application/json&FEATURE_COUNT=50&X=" +
    //         state.point.x +
    //         "&Y=" +
    //         state.point.y +
    //         "&WIDTH=" +
    //         state.shape.x +
    //         "&HEIGHT=" +
    //         state.shape.y +
    //         "&BBOX=" +
    //         state.bounds,
    //         //console.log(info),
    //       {
    //         method: "GET",
    //       }
    //     )
    //       .then((response) => response.json())
    //       .then((result) => {
    //         console.log(result)
    //         setFeatureInfo({ data: result.features[0].properties, isFetching: false });
    //       })
    //       .catch((error) => {
    //         console.error("Error:", error);
    //       });
    //     //setFeatureInfo({ ...featureInfo, isFetching: true });
    //   } catch (exception) {
    //     //console.log(exception);
    //       //setFeatureInfo({ featureInfo: featureInfo.data, isFetching: false });
    //   }
    // };
    const getInfo = async (e) => {
        //console.log(e)
    try {

      setFeatureInfo({ data: [], isFetching: true }); 
       console.log("data:"+e);
         //fetch("http://localhost/php_react/Api/PV_1.php",
         fetch("http://localhost/php_react/Api/trial3.php?name="+e,
        //  fetch("http://localhost/php_react/Api/Test7.php",
        //  console.log(info),
        {
          method: "GET",
        }
      )
        .then((response) => response.json())
        .then((result) => {
         console.log(result)
          //console.log(result['NE_19'][0].sum)     
          setChartData(result.pv.map((e)=>((Number(e)))))
          setPfData(result.pf.map((e)=>((Number(e)))))
          setMixedData(result.mixed.map((e)=>((Number(e)))))
          setFeatureInfo({ data: result[0], isFetching: false });       
          console.log(featureInfo)
          //setFeatureInfo({ data: result['NE_19'][0].sum, isFetching: false });
        })
        .catch((error) => {
          console.error("Error:", error);
        });
      setFeatureInfo({ ...featureInfo, isFetching: true });
    } catch (exception) {
       //console.log(exception);                                               
           //setFeatureInfo({ featureInfo: featureInfo.data, isFetching: false });    
    }
  };
  useEffect(( ) => {
     console.log(state )
    //  setChartData(featureInfo1.data.map((e)=>(Number(e))))
    console.log(featureInfo1.data.district)
    getInfo(featureInfo1.data.district) 
    console.log(options)
   //featureInfo.map((e)=>console.log(e))
    console.log(featureInfo)
    // let pv = featureInfo!==undefined&&Object.keys(featureInfo.data).map((e)=>(featureInfo.data[e]))
    // console.log(pv)
  
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
              pointStart: 2000
          }
      },
     
     series : [{     
          name: 'PV1',
          data: chartData
     },
     {     
        name: 'PF',
        data: pfData
     },{     
        name: 'Mixed',
        data: mixedData
     },

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