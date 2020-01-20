import React ,{useState  } from 'react'
import {Container,Form , Row , Col , Button , Card}
 from 'react-bootstrap'



const SiteApplication = () =>{

    const [dataCount,setDataCount ] = useState([{  id:1,
        date: 1 ,
        dataOne:1,
        dataTwo: 1 ,
        dataThree: 1 ,
        dataFour: 1 , }
    ])

    const [data , setData] = useState({  
        id:0,
        date: 1 ,
        dataOne:1,
        dataTwo: 1 ,
        dataThree: 1 ,
        dataFour: 1 , })

    


    const onAddClickHandler = (idData) =>
        {
            setDataCount(curr => {return [...curr, {...data ,id: curr[curr.length-1].id + 1 } ] })
        }

    const onDeleteclickHandler = (val) =>
        {
            const i = dataCount.findIndex(x => x.id===val);
            
            const newData = dataCount.slice(0,i).concat(dataCount.slice(i+1,dataCount.length));

            setDataCount(newData);
        }


     
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
                        {dataCount.map((count ,index , arr)  => (
                                <Row  style={{margin:10}} key={count.id} >
                                <Col xs={1}>
                                    { arr.length -1 === index ? <Button onClick={onAddClickHandler} variant="primary">+</Button>   : null }               
                                </Col>
                                    <Col xs={1}>
                                            <Form.Label> {count.id}</Form.Label>
                                    </Col>
                                    <Col xs={2}>
                                        <Form.Control placeholder="Date" />
                                    </Col>
                                    <Col >
                                        <Form.Control placeholder="DATA 1" />
                                    </Col>
                                    <Col>
                                        <Form.Control placeholder="DATA 2" />
                                    </Col >
                                    <Col  >
                                        <Form.Control placeholder="DATA 3" />
                                    </Col>
                                    <Col >
                                        <Form.Control placeholder="DATA 4" />
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