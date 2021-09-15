import React from "react";
import Info from "./Info";
import styled from "styled-components";
import CircularProgress from "@material-ui/core/CircularProgress";
import { useSelector } from "react-redux";
import { selectMapstate } from "../features/maps/mapStateSlice";
import { useState, useEffect } from "react";
//import Chart from "./Chart";
// import Timeseries from "./Timeseries";
 import Series from "./Series";

const InfoBox = () => { 
  const state = useSelector(selectMapstate);
  const info = state.overlays.filter((layers)=>layers.class!=="Lightning");

  const [featureInfo, setFeatureInfo] = useState({
    data: [],
    isFetching: false,
  });

  // const getInfo = async () => {
  //       console.log(info)
  //   try {

  //     setFeatureInfo({ data: [], isFetching: true }); 
  //      console.log("data");
  //        //fetch("http://localhost/php_react/Api/PV_1.php",
  //        fetch("http://localhost/php_react/Api/trial3.php?name=Aizawl",
  //       //  fetch("http://localhost/php_react/Api/Test7.php",
  //        console.log(info),
  //       {
  //         method: "GET",
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((result) => {
  //        console.log(result)
  //         //console.log(result['NE_19'][0].sum)     
  //         setFeatureInfo({ data: result[0], isFetching: false });       
  //         console.log(featureInfo)
  //         //setFeatureInfo({ data: result['NE_19'][0].sum, isFetching: false });
  //       })
  //       .catch((error) => {
  //         console.error("Error:", error);
  //       });
  //     setFeatureInfo({ ...featureInfo, isFetching: true });
  //   } catch (exception) {
  //      //console.log(exception);                                               
  //          //setFeatureInfo({ featureInfo: featureInfo.data, isFetching: false });    
  //   }
  // };


  const getInfo = async () => {
    console.log(info)
    try { 
       setFeatureInfo({ data: [], isFetching: true });
       console.log("data");
      fetch(
        info[info.length-1].link +
          "?SERVICE=WMS&VERSION=1.1.1&REQUEST=GetFeatureInfo&QUERY_LAYERS=" +
          info[info.length-1].layer +
          "&LAYERS=" +
          info[info.length-1].layer +
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
  useEffect(() => {
    // AddAnalytics()
    console.log(state)
    getInfo();
  }, [state]);
  return(
  
console.log(info),
    <InfoBoxx>
      <React.Fragment>
        <div className="Rows">
         <div className="Total">  
            Total<p>{featureInfo.data.total}</p> </div>  
           {/* <div className = "Total">{featureInfo.data}</div>                                           ............................... */}
        </div>
        <div className="Rows">
          <div className="Total">PV Cases<p>{featureInfo.data.pv}</p></div>
          <div className="Total">PF Cases<p>{featureInfo.data.pf}</p></div>
          <div className="Total">Mixed Cases<p>{featureInfo.data.mixed}</p></div>
        </div>
          {info !== undefined &&  <Series info={info[info.length-1]} state={state} featureInfo1 ={featureInfo}/>
          
          //   info.map((task, index) => (
          //   //  <Info key={index} info={task} state={state} />    
          //    <Series info={task} state={state}/>            
          //    /*.......................*/
          // ))
          }      
               
            {/* <Chart/>  */}
         
            {/* <Timeseries/> */}

      </React.Fragment>
    </InfoBoxx>
  );
};
//export default InfoBox;
export default InfoBox;

const InfoBoxx = styled.div`
  top: 8px;
  right: 0px;
  position: absolute;
  background: rgba(0, 0, 0, 0.74);
  z-index: 10000;
  max-height: 80%;
  max-width: 22rem;
  overflow-y: auto;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(0, 0, 0, 0.25);
  margin-left: 10px;
  margin-right: auto;

  .Rows {
    display: flex;
  }
  .Total {
    /* Frame 31 */
    /* Auto Layout */
    text-align: center;
    align-items: center;
    padding: 20px 0px;
    width: 100%;
    height: 80px;
    background: #222222;
    color: #f50000;
    margin: 5px;
  }
  .Image{
    position:center;
    width:100%;
    height:50px;
    border: 1px solid rgba(214, 214, 214, 0.2);
    box-sizing: border-box;
  }
  ${'' /* .chart{
    width: 100%;
  } */}
${'' /* .Chart{
  position:center;
  width:100%;
  height:50px;
  padding: 0.5em;
} */}
  }
`;
