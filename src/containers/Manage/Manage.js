import React from 'react'


const Manage = () =>{

    const tagData = [
        {
           tagname : '21P01-A',
           nameList:['A-工水受入ポンプ' , 'test1-21P01-A' , 'test2-21P01-A' ]
        },
        {
         tagname : '21P01-B',
         nameList:['B-工水受入ポンプ' , 'test1-21P01-B' , 'test2-21P01-B']
        },
        {
         tagname : '21P02-A',
         nameList:['A-工水補給水ポンプ' , 'test1-21P02' , 'test2-21P02'  ]
        },
        {
         tagname : '21P02-B',
         nameList:['B-工水補給水ポンプ' , 'test1-21P02-B' , 'test2-21P02-B' ]
        },
        {
         tagname : '21P03',
         nameList:['散水ポンプ' , 'test1-21P03' , 'test2-21P03']
        },
 ]


    return(
        <div style={{marginTop:"100px"}}>
            Manage
                {tagData.map(t => {
                return(<p key={t.tagname}>{t.tagname}</p>)})}
           
        </div>
    )
}

export default Manage;