//import necessary lib
import React, { Component } from 'react'
import SidePanel from './SidePanel'
import LayerTree from './LayerTree'
import AnalyticsLayers from './AnalyticsLayers'
import SatelliteIcon from '@material-ui/icons/Satellite';
import MapIcon from '@material-ui/icons/Map';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Select from 'react-select';

// import CreatableSelect from 'react-select/creatable';
//end of import 

const SideBarWrapper = ({ tasks, analyticsLayers, activateLayer, activateLayer1, changeVisibility, visibility, ChangeMap }) => {
    //Tab view start 
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {
        setValue(newValue);

    };
    //tab view ends

    //accordion start
    const useStyles = makeStyles((theme) => ({
        root: {
            width: '100%',
        },
        heading: {
            fontSize: theme.typography.pxToRem(15),
            fontWeight: theme.typography.fontWeightRegular,
        },
    }));
    const classes = useStyles();
    // accordion ends

    //hind show sideBarwarapper start
    var data_filter = visibility.filter(element => element.show)
    var type = data_filter[0].id
    // hide show sideBarWrapper ends


    // ******************************** fatch date data from database Start*******************************

    


    // ******************************** fatch date data from database End here*******************************





    //return view
    return (
        <div className="SideBarWrapper">
            {/* load of side panel start */}
            <SidePanel
                changeVisibility={changeVisibility}
            />
            {/* load of side panel start */}

            {/* *************Layer Tab start*************** */}
            <div className={type === 'Layer' ? 'LayerContainer' : 'hidden'}>
                {/* List of map layers */}
                <Paper square>
                    <Tabs
                        value={value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={handleChange}
                        aria-label="disabled tabs example"
                    >
                        <Tab label="Base Layers" />
                        <Tab label="Overlays" />

                    </Tabs>

                </Paper>
                <div className={value === 0 ? ' ' : 'hidden'}>
                <ul>
                    <li key={2} onClick={() => ChangeMap('Cartodb')} >< MapIcon />
                        <span> Cartodb</span>
                    </li>
                    <hr>
                    </hr>
                    <li key={3} onClick={() => ChangeMap('Bhuvan')} >< MapIcon />
                        <span> Bhuvan</span>
                    </li>
                    <hr>
                    </hr>
                    <li key={4} onClick={() => ChangeMap('BhuvanSatellite')} ><SatelliteIcon />
                        <span> BhuvanSatellite</span>
                    </li>
                    <hr>
                    </hr>
                    <li key={5} onClick={() => ChangeMap('Open_Street')} ><MapIcon />
                        <span> Open Street</span>
                    </li>
                    <hr>
                    </hr>
                    <li key={6} onClick={() => ChangeMap('Google_Map')} ><MapIcon />
                        <span> Google Map</span>
                    </li>
                    <hr>
                    </hr>
                    <li key={7} onClick={() => ChangeMap('Google_Satellite')} ><SatelliteIcon />
                        <span> Google Satellite</span>
                    </li>
                    <hr>
                    </hr>
                </ul>
                </div>
                <div className={value === 1 ? ' ' : 'hidden'}>
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Administrator"
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Malaria"                                       //Malaria category//
                />
                <LayerTree
                    tasks={tasks}
                    changeLayer={activateLayer}
                    category="Census"
                />
                <AnalyticsLayers
                    tasks={analyticsLayers}
                    changeLayer1={activateLayer1}
                    category="Malaria"
                    />
                </div>
            </div>
            {/* *************Layer Tab end*************** */}


            {/* *************Vegetation Tab start*************** */}
            
            
            
            
                    </div>




    )
}

export default SideBarWrapper