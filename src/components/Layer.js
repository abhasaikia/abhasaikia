import Checkbox from "@material-ui/core/Checkbox";
import InfoIcon from "@material-ui/icons/Info";
import { useDispatch } from "react-redux";
import { setAnalyticsDetails, selectLayerDataSet } from "../features/layers/overlaylayerslice";
import { useSelector } from "react-redux";
import { setInfoDetails } from "../features/layers/infoboxslice";
import styled from "styled-components";

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
      setAnalyticsDetails({ ...state, id: id - 1, show: true, layer: date })
    );
  };

  return (
    <LAYER className={`${showLayer ? "active" : "task"}`}>
      <Checkbox
        color="primary"
        defaultChecked={task.show && true}
        onClick={(e) => toggleLayer(task.id, e.target.checked)}
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
            <option value="casesalert">Years</option>
            {/* <option value="malria:NE_gn_001">2001</option>
            <option value="malria:NE_gn_002">2002</option>
            <option value="malria:NE_gn_03">2003</option>
            <option value="malria:NE_04">2004</option>
            <option value="malria:NE_gn_05">2005</option>
            <option value="malria:NE_gn_07">2007</option>
            <option value="malria:Ne_gn_08">2008</option>
            <option value="malria:NE_gn_009">2009</option>
            <option value="malria:NE_gn_10">2010</option>
            <option value="malria:NE_gn_11">2011</option>
            <option value="malria:NE_Gn_12">2012</option>
            <option value="malria:NE_13">2013</option>
            <option value="malria:NE_gn_14">2014</option>
            <option value="malria:NE_gn_15">2015</option>
            <option value="malria:NorthEast_16">2016</option> */}
            {/* <option value="malria:NE_gn_17">2017</option> */}
            {/* <option value="malria:NE_gn_18">2018</option> */}
            {/* <option value="malria:NE_19">2019</option> */}
            <option value="	Malaria_1:PV_14">2014</option>
            <option value="	Malaria_1:PV_15">2015</option>
            <option value="	Malaria_1:PV_15">2016</option>
            <option value="Malaria_1:PV_17">2017</option>
            <option value="Malaria_1:PV_18">2018</option>
            <option value="Malaria_1:PV_data_0019">2019</option>
            
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
