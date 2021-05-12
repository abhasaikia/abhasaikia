import React from 'react'
import CloudIcon from '@material-ui/icons/Cloud';
import LayersIcon from '@material-ui/icons/Layers';
import EcoIcon from '@material-ui/icons/Eco';
const SidePanel = ({ changeVisibility }) => {

    return (
        <div className="SidePanel">
            <ul>
                <li key={1} ><img src="./NeSDRLogo1.png" alt='nesdr-logo' />
                </li>
                <hr/>
                <li key={2} onClick={() => changeVisibility('Layer')} >< LayersIcon />
                    <span>Layer</span>
                </li>
                <hr/>
                <li key={3} onClick={() => changeVisibility('Vegetation')} >< EcoIcon />
                    <span>Vegetation</span>
                </li>
                <hr/>


            </ul>
        </div>

    )
}

export default SidePanel