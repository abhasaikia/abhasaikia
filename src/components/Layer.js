import Checkbox from "@material-ui/core/Checkbox";
import InfoIcon from "@material-ui/icons/Info";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails, selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { useSelector } from "react-redux";
import { setInfoDetails } from "../features/layers/infoboxslice";
//import { indexInfo, setIndexInfo} from "../components/InfoBox";
import styled from "styled-components";
import { useEffect, useState } from "react";
// import { setAnalyticsDetails1 } from "../features/layers/overlaylayerslice";

const Layer = ({ task, showLayer }) => {
  
  const dispatch = useDispatch();
  const state = useSelector(selectLayerDataSet);

  const toggleLayer = (id, e) => {
    dispatch(setAnalyticsDetails({ ...state, id: id - 1, show: e }));
  };
  const showInfo = (data,info) => {
    dispatch(setInfoDetails({ dataset: data, info:info, show: true }));

  };
 
  const changeDate = (date, id) => {
    console.log("Here");
    dispatch(setAnalyticsDetails({ ...state, id: id - 1, show: false }));
    setTimeout(console.log(""), 10000);

    dispatch(
      //setAnalyticsDetails({ ...state, id: id - 1, show: true, layer: date })
      setAnalyticsDetails({ ...state, id: id - 1, show: true, layer: date, style:"Test" })
    );
  };
  const changeStyle = (date, id) => {
    console.log(date);
    dispatch(setAnalyticsDetails({ ...state, id: id - 1, show: false }));
    setTimeout(console.log(""), 10000);
    console.log("hfhfhfhf")
    dispatch(
      //setAnalyticsDetails({ ...state, id: id - 1, show: true, layer: date })
      setAnalyticsDetails({ ...state, id: id - 1, show: true, style: date })
    );
  };


 
  return (
 
    <LAYER className={`${showLayer ? "active" : "task"}`}>
      <Checkbox
        color="primary"
        defaultChecked={task.show && true}
        onClick={(e) => toggleLayer(task.id, e.target.checked)}
        //onClick={(e) => indexInfo(task.id, e.target.checked)}
      />
    
      {task.text}{" "}
      <InfoIcon className="info" onClick={(e) => showInfo(task.text, task.info)} />
      
      {task.options !== undefined && (
     
        <>
          
          {" "}
          <select
            id="date"
            onChange={(event) => {
              changeDate(event.target.value, task.id);
            }}
          >
           
            <option value="casesalert">Types</option>
            <option value="Malaria_1:PV_data_0019">PV  </option>
            <option value="Malaria_1:PF_ref_0019">PF</option>
            <option value="mixed">Mixed</option>
            <option value="total">Total</option>    
          </select>
          <select
            id="date"
            onChange={(event) => {
              changeStyle(event.target.value, task.id);
            }}
          >
           
            <option value="casesalert1">Years</option>
            
            <option value="Malaria_1:pv_14">2014  </option>
            <option value="Malaria_1:pv_15">2015</option>
            <option value="Malaria_1:pv_16">2016</option>
            <option value="Malaria_1:pv_17">2017</option>
            <option value="Malaria_1:pv_18">2018</option>
            {/* <option value="PV_data_0019">2019</option> */}
            
          </select>
        </>   
      )}
    </LAYER>
     );
    };
    
export default Layer;

const LAYER = styled.div`
  font-size: 14px;
  .MuiSvgIcon-root {
    font-size: 16px;
    cursor: pointer;
  }
  .info {
    cursor: pointer;

    margin-top: 5px;
    display: block;
    margin-inline-end: 15px;
    float: right;
    color: rgb(73, 73, 245);
    font-size: small;
    margin-top: 10px;
  }
`;
