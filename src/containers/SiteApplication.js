import React ,{useState, useEffect  } from 'react'
import {Container,Form , Row , Col , Button , Card , Navbar , Modal} from 'react-bootstrap'


import Charts from './Charts'

import NumPad from 'react-numpad';
import './SiteApplication.css'

const SiteApplication = () =>{

    const [selectedId , setSelectedId] = useState();
    const [selectedData , setSelectedData] = useState();

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

   const [dataCount,setDataCount ] = useState([{
     id:1,
        date: new Date().toLocaleDateString("en-US") ,
        time: "" ,
        dataOne:"",
        dataTwo: "" ,
        dataThree: "" ,
        dataFour: "", }
    ])
    const [data , setData] = useState({
        id:0,
        date: new Date().toLocaleDateString("en-US") ,
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

    const [modalShow, setModalShow] = React.useState(false);

    const onAddClickHandler = (idData) =>
        {
            var d = new Date();
            
            let hrs= d.getHours();
            let minutes=minutes_with_leading_zeros(d);

            setDataCount(curr => {return [...curr,
                 {...data ,
                    id: curr[curr.length-1].id + 1 ,
                    date: new Date().toLocaleDateString("en-US")  ,
                    time: hrs+":"+minutes }  ]  })
        }

    const onDeleteclickHandler = () =>
        {
            const i = dataCount.findIndex(x => x.id===selectedId);

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

    
    const modalYesClickHandler = () =>{
            setModalShow(false)
            onDeleteclickHandler();
    }

    const modalNoClickHandler = () =>{
        setModalShow(false)
}


    const onDelete = (id) =>{
        setSelectedId(id)
        const dataToBeDeleted = dataCount.find(x => x.id===id)
        setSelectedData(dataToBeDeleted)

        setModalShow(true)
       
    }

    return(
        <React.Fragment>
            <Navbar className="justify-content-xs-center" fixed="top"  bg="primary" variant="dark">
                <Navbar.Brand >   
                    SUMITOMO
                </Navbar.Brand>
            </Navbar>
        <Container style={{marginTop:60}}>
              <Row  >
                 
                    <Form.Group style={{marginRight:5}} controlId="exampleForm.ControlSelect1">

                        <Col>
                        <Form.Label>Select Tag</Form.Label>
                        </Col>
                        <Col>
                            <Form.Control as="select">
                            {tagData.map(x => (<option key={x.tagname}>{x.tagname}</option> ))}
                        </Form.Control>
                        </Col>
                    </Form.Group>
                
                
                    <Form.Group controlId="exampleForm.ControlSelect2">
                         <Col>
                             <Form.Label>Select Name</Form.Label>
                        </Col>
                        <Col>
                        <Form.Control as="select">
                        <option>Name 1</option>
                        <option>Name 2</option>
                        <option>Name 3</option>
                        <option>Name 4</option>
                        <option>Name 5</option>
                        </Form.Control>
                        </Col>
                    </Form.Group>
                   

              </Row>

                            <Card>
                                <Row style={{margin:5}}>
                                        <Col>

                                        </Col>
                                        <Col  >
                                        <h5>Date</h5>
                                        </Col>
                                        <Col  >
                                        <h5>Time</h5>
                                        </Col>
                                        <Col>
                                        <h5>Data 1</h5>
                                        </Col>
                                        <Col >
                                        <h5>  Data 2</h5>
                                        </Col>
                                        <Col >
                                        <h5>Data 3</h5>
                                        </Col>
                                        <Col>
                                        <h5>Data 4</h5>
                                        </Col>
                                        <Col>
                                        </Col>
                                </Row>

                                <Row>
                                    <Col>
                        {dataCount.map((count ,index , arr)  => (
                                <Row style={{margin:5}} key={count.id} >
                                        <Col >
                                            { arr.length -1 === index ? <Button onClick={onAddClickHandler} variant="primary">+</Button>   : <Col></Col> }
                                        </Col>
                                        <Col>
                                                <NumPad.Calendar
                                                    onChange={value => onChangeValueHandler("date",value , count.id )}
                                                    dateFormat="MM.DD.YYYY"
                                                    min="01.01.1900"
                                                    markers={['01.03.2018', '06.03.2018']}
                                                    value={count.date}>
                                                   <Form.Group>
                                                    <Form.Control style={{  width:120}}  value={count.date}  placeholder="DATE"  />
                                                    </Form.Group>
                                                </NumPad.Calendar>
                                        </Col>


                                        <Col >

                                            <NumPad.DateTime
                                            onChange={e => onChangeValueHandler("time", e , count.id)}
                                                dateFormat="HH:mm"
                                                placeholder={'Time'}
                                                value={count.time}>
                                                    <Form.Group>
                                                        <Form.Control style={{ width:100}}  value={count.time}  placeholder="TIME"  />
                                                   </Form.Group>
                                            </NumPad.DateTime>

                                        </Col>


                                        <Col  >
                                                <NumPad.Number
                                                        onChange={e => onChangeValueHandler("dataOne",e , count.id)}
                                                        placeholder={'Data 1'}
                                                        value={count.dataOne}
                                                        decimal={3}>
                                                        <Form.Group>
                                                             <Form.Control style={{width:100}}  value={count.dataOne}  placeholder="DATA 1"  />
                                                        </Form.Group>
                                                </NumPad.Number>

                                        </Col>


                                            <Col  >
                                                        <NumPad.Number
                                                                onChange={e => onChangeValueHandler("dataTwo",e , count.id)}
                                                                placeholder={'Data 2'}
                                                                value={count.dataTwo}
                                                                decimal={3}>
                                                             <Form.Group>
                                                                <Form.Control style={{width:100}}  value={count.dataTwo}  placeholder="DATA 2"  />
                                                             </Form.Group>
                                                        </NumPad.Number>
                                            </Col>


                                            <Col  >
                                            <NumPad.Number
                                                        onChange={e => onChangeValueHandler("dataThree",e , count.id)}
                                                        placeholder={'Data 3'}
                                                        value={count.dataThree}
                                                        decimal={3}>
                                                        <Form.Group>
                                                            <Form.Control style={{width:100}}  value={count.dataThree}  placeholder="DATA 3"  />
                                                        </Form.Group>
                                                </NumPad.Number>
                                            </Col>


                                            <Col  >
                                                <NumPad.Number
                                                            onChange={e => onChangeValueHandler("dataFour",e , count.id)}
                                                            value={count.dataFour}
                                                            decimal={3}>
                                                        <Form.Group>
                                                            <Form.Control style={{width:100}}  value={count.dataFour}  placeholder="DATA 4"  />
                                                        </Form.Group>
                                                </NumPad.Number>
                                            </Col>


                                            <Col >
                                                 <Form.Group>
                                                      { arr.length -1 !== 0 ?  <Button onClick={ ()=> onDelete(count.id)}  variant="danger">-</Button>  : <Col>

</Col>}
                                                </Form.Group>
                                            </Col>

                                </Row>

                             ))}
                               </Col>
                             </Row>
                        </Card>


              <Row style={{marginTop:20}}>
                <Charts data={dataCount}/>
              </Row>
              </Container>

              <MyVerticallyCenteredModal
                    dataToBeDeleted={selectedData }
                    show={modalShow}
                    onYes={modalYesClickHandler}
                    onNo={modalNoClickHandler}
/>
    </React.Fragment>



    );
}



function MyVerticallyCenteredModal(props) {
    return (
      <Modal
      {...props}
        size="sm"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
           Delete 
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
        
          <p>
            Are you sure you want to delete this item?
          </p>
          {props.dataToBeDeleted ? 
          <div>
          <p><b>Date:</b> {props.dataToBeDeleted.date}</p>
          <p><b>Time:</b>{props.dataToBeDeleted.time}</p>
          <p><b>Data 1:</b>{props.dataToBeDeleted.dataOne ? props.dataToBeDeleted.dataOne : 0} <b>Data 2:</b> {props.dataToBeDeleted.dataTwo ? props.dataToBeDeleted.dataTwo : 0 }</p>
          <p><b>Data 3:</b>{props.dataToBeDeleted.dataThree ? props.dataToBeDeleted.dateThree : 0 } <b>Data 4:</b> {props.dataToBeDeleted.dataFour ? props.dataToBeDeleted.dataFour : 0 }</p>
          </div>   : <p></p> }
        </Modal.Body>
        <Modal.Footer className="justify-content-center"> 
                         <Button style={{margin:30}}variant="danger" size="lg" onClick={props.onYes}>Yes</Button>
                
                        <Button style={{margin:30}} variant="secondary" size="lg" onClick={props.onNo}>No</Button>
        </Modal.Footer>
      </Modal>
    );
  }



export default SiteApplication;