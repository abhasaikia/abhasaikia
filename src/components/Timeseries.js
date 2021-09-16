/* eslint-disable react/style-prop-object */
import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import { useState  } from "react";


const Timeseries = () => {
    const [options]=  useState({
        data: {
            csv: document.getElementById('data').innerHTML,
            dateFormat: 'YYYY'
        },
        plotOptions: {
            series: {
                marker: {
                    enabled: false
                }
            }
        }
    });
// eslint-disable-next-line react/jsx-no-comment-textnodes
<Timeseries>

<div id="container" style="min-width: 310px; max-width: 800px; height: 400px; margin: 0 auto">

<h3>Raw data</h3>

<pre id="data">year,pv,pf,mixed,total,
2000,42,101,0,143
2001,359,1542,0,1901
2002,76,1012,0,1088
2003,46,24,0,70
2004,97,897,0,994
2005,13,54,77,988
2006,3,6,7,8
2007,10,10,10,30
2008,20,20,20,60
</pre>

</div>

</Timeseries>

return (
    

    <HighchartsReact highcharts={Highcharts} options={options}  />
)
}
export default Timeseries;

