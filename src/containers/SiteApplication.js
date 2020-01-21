import React ,{useState, useEffect  } from 'react'
import {Container,Form , Row , Col , Button , Card}
 from 'react-bootstrap'

import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker-cssmodules.css';
import "react-datepicker/dist/react-datepicker.css";


const SiteApplication = () =>{
    const [startDate, setStartDate] = useState(new Date());

    const [dataCount,setDataCount ] = useState([{  id:1,
        date: new Date() ,
        time: "" ,
        dataOne:"",
        dataTwo: "" ,
        dataThree: "" ,
        dataFour: "", }
    ])

    const [data , setData] = useState({  
        id:0,
        date: new Date() ,
        time: "" ,
        dataOne:"",
        dataTwo: "" ,
        dataThree: "" ,
        dataFour: "", })

    const[newDataFromUser, setNewDataFromUser] = useState({})

    const[changed, setChanged] = useState(true)

    function minutes_with_leading_zeros(dt) 
    { 
        return (dt.getMinutes() < 10 ? '0' : '') + dt.getMinutes();
    }

    const onAddClickHandler = (idData) =>
        {
            var d = new Date();
            let today = d.getFullYear()+'-'+(d.getMonth()+1)+'-'+d.getDate();
            let hrs= d.getHours();
            let minutes=minutes_with_leading_zeros(d); 
         
            setDataCount(curr => {return [...curr,
                 {...data ,
                    id: curr[curr.length-1].id + 1 , 
                    date: d  , 
                    time: hrs+":"+minutes }  ]  })
        }

    const onDeleteclickHandler = (val) =>
        {
            const i = dataCount.findIndex(x => x.id===val);
            
            const newData = dataCount.slice(0,i).concat(dataCount.slice(i+1,dataCount.length));

            setDataCount(newData);
        }

    
    const onChangeValueHandler = ( name,value ,id ) =>{

        const dataToBeMofied= dataCount.find(x => x.id===id);
         
        const newData =   {...dataToBeMofied ,  [name] : value} 
              
         dataCount[dataCount.findIndex(x => x.id===id)] = newData;

         const newArrayData = dataCount;

         setNewDataFromUser(newArrayData);

         setChanged(!changed);
    }

    

    useEffect(()=>
    {
        if(Object.keys(newDataFromUser).length !== 0)
        {
             setDataCount(newDataFromUser)
        }
       
    },[changed])

     
    return(
        <React.Fragment>
            <Container>
            
              <Row  className="justify-content-md-center" >
                <div style={{padding:20}}>
                    <h3>ENE SITE EXCEL APP</h3>
                </div>
              </Row>
              <Row>
              <Form.Group style={{marginRight:10}} controlId="exampleForm.ControlSelect1">
                    <Form.Label>Tag</Form.Label>
                    <Form.Control as="select">
                    <option>Tag 1</option>
                    <option>Tag 2</option>
                    <option>Tag 3</option>
                    <option>Tag 4</option>
                    <option>Tag 5</option>
                    </Form.Control>
             </Form.Group>

                <Form.Group controlId="exampleForm.ControlSelect2">
                    <Form.Label>Name</Form.Label>
                    <Form.Control as="select">
                    <option>Name 1</option>
                    <option>Name 2</option>
                    <option>Name 3</option>
                    <option>Name 4</option>
                    <option>Name 5</option>
                    </Form.Control>   
                </Form.Group>


              </Row>
                <Row>
                    <Col>
                      <Card>
                        <Form>
                        <Row style={{margin:10}}>
                        <Col  xs={1}>    
                        </Col>
                        <Col  xs={2}>
                        <h4>Date</h4> 
                        </Col>
                        <Col  xs={2}>
                        <h4>Time</h4>
                        </Col>
                        <Col>
                        <h4>Data 1</h4> 
                        </Col>
                        <Col>
                        <h4>  Data 2</h4> 
                        </Col>
                        <Col>
                        <h4>Data 3</h4>
                        </Col>
                        <Col>
                        <h4>Data 4</h4>
                        </Col>
                       
                        <Col xs={1}>
                       
                        </Col>
                        </Row>
                        {dataCount.map((count ,index , arr)  => (
                                <Row style={{margin:10}} key={count.id} >
                                <Col xs={1}>
                                    { arr.length -1 === index ? <Button onClick={onAddClickHandler} variant="primary">+</Button>   : null }               
                                </Col>
                                    {/* <Col xs={1}>
                                            <Form.Label> {count.id}</Form.Label>
                                    </Col> */}
                                    <Col  style={{padding:4}}>
                                   
                                      <DatePicker  
                                        selected={count.date}
                                        onChange={e => onChangeValueHandler("date",e , count.id , "date")}
                                        />

                                        {/* <Form.Control value={count.date} onChange={()=>{}} placeholder="Date" /> */}
                                    </Col>
                                    <Col >
                                        <Form.Control value={count.time} name="time" onChange={e => onChangeValueHandler(e.target.name, e.target.value , count.id)} placeholder="Time" />
                                    </Col>
                                    <Col >
                                        <Form.Control value={count.dataOne} name="dataOne" onChange={e => onChangeValueHandler(e.target.name, e.target.value , count.id)} placeholder="DATA 1" />
                                    </Col>
                                    <Col>
                                        <Form.Control value={count.dataTwo}  name="dataTwo" onChange={e => onChangeValueHandler(e.target.name, e.target.value , count.id)} placeholder="DATA 2" />
                                    </Col >
                                    <Col  >
                                        <Form.Control value={count.dataThree} name="dataThree" onChange={e => onChangeValueHandler(e.target.name, e.target.value , count.id)} placeholder="DATA 3" />
                                    </Col>
                                    <Col >
                                        <Form.Control value={count.dataFour} name="dataFour" onChange={e => onChangeValueHandler(e.target.name, e.target.value , count.id)} placeholder="DATA 4" />
                                    </Col>
                                    <Col xs={1}>
                                        <Button onClick={()=>onDeleteclickHandler(count.id)} variant="danger">-</Button>
                                  </Col>
                                </Row>
                                ))}
                        </Form> 
                  </Card>
                </Col>
              </Row>
        </Container>
    </React.Fragment>
    );
}

export default SiteApplication;