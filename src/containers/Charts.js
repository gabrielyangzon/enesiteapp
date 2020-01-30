import React from 'react'
import ReactApexChart from "react-apexcharts";

const Charts = (props) => {

    const chartSettings = {

        temperature: [
            {
                 name:"Data-1",
                 data: props.data.map(d=>d.dataOne )
            },
            {
                name:"Data-2",
                data: props.data.map(d=>d.dataTwo )
            },
            {
                name:"Data-3",
                data: props.data.map(d=>d.dataThree )
            } ,
            {
                name:"Data-4",
                data: props.data.map(d=>d.dataFour )
            }
        ],
                options: {
                    chart: {
                    type: 'bar' 
                    },
                    plotOptions: {
                    bar: {
                        horizontal: true,
                        dataLabels: {
                        position: 'top',

                        },
                    }
                    },
                    dataLabels: {
                    enabled: true,

                    formatter: function(val) {
                        return  val + "°"
                    },

                    // offsetX: 20,
                    style: {
                        fontSize: '12px',
                        colors: ['#fff']
                    }
                    },
                    stroke: {
                    show: true,
                    width: 1,
                    colors: ['#fff']
                    },
                    xaxis: {
                        title: {
                            text: 'Temperature(°)',
                          },

                    categories: props.data.map(y => y.date + "-" + y.time),
                    },
                    yaxis:{
                        title: {
                            text: "Date-Time",
                          }
                    }

                }
       }






    return(
        <React.Fragment>
            <ReactApexChart 
              options={chartSettings.options}
              series={chartSettings.temperature}
              type="bar" 
              height={500} 
              width={600} />
        </React.Fragment>
    )
}

export default Charts;