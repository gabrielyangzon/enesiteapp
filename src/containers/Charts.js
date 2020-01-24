import React from 'react'


import ReactApexChart from "react-apexcharts";



  



    
const Charts = (props) => {
  

    const chartY = props.data.map(y => y.time)
    console.log(chartY)




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
                    type: 'bar',
                    height: 430
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
                    offsetX: -6,
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

                    categories: props.data.map(y => y.time),
                    },
                }
       }






    return(
        <React.Fragment>
         


            <ReactApexChart options={chartSettings.options} series={chartSettings.temperature} type="bar" height={430} />

        </React.Fragment>
    )
}

export default Charts;