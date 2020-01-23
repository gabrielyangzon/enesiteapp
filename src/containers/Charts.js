import React from 'react'
import { IgrCategoryChartModule ,IgrCategoryChart , IgrCategoryXAxis ,IgrNumericYAxis, IgrDataChart } from 'igniteui-react-charts';
IgrCategoryChartModule .register();


let data = [
    { "CountryName": "China", "Pop1995": 1216, "Pop2005": 1297, "Pop2015": 1361, "Pop2025": 1394 },
    { "CountryName": "India", "Pop1995": 920, "Pop2005": 1090, "Pop2015": 1251, "Pop2025": 1396 },
    { "CountryName": "United States", "Pop1995": 266, "Pop2005": 295, "Pop2015": 322, "Pop2025": 351 },
    { "CountryName": "Indonesia", "Pop1995": 197, "Pop2005": 229, "Pop2015": 256, "Pop2025": 277 },
    { "CountryName": "Brazil", "Pop1995": 161, "Pop2005": 186, "Pop2015": 204, "Pop2025": 218 }
   ];



const Charts = (props) => {
    return(
        <React.Fragment>
            <IgrCategoryChart  dataSource={props.data}
                   width="100%"
                   height="500px"
                  
                   chartTitle="Temperature"
                  
                   >

                        <IgrCategoryXAxis name="xAxis" label="Country" />
                        <IgrNumericYAxis name="yAxis" minimumValue={0} />
                        </IgrCategoryChart>
        </React.Fragment>
    )
}

export default Charts;