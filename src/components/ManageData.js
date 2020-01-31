import React ,{ useState } from 'react'
import {Modal , Button, Form}  from 'react-bootstrap'
import { useEffect } from 'react';

const ManageData =(props)=>{

    const[tagname,setTagname] = useState();
    const[error ,setError] = useState();

    const [validated, setValidated] = useState(false)

    const onInputChangeHandler = (evt) =>{
            setTagname(evt.target.value)     
    }

    const onClickHandler =(event) =>{

        // if(tagname === undefined)
        // {
          
        //     setError("please input something")
        // }
        // else
        // {
        //      props.onAdd(tagname)
        // }

        const form = event.currentTarget;

        if (form.checkValidity() === false) {
          event.preventDefault();
          event.stopPropagation();

            if(tagname === undefined)
            {
                setError("Required Fields")
            }
            else if(Object.values(props.tagList).indexOf(tagname) === 1)
            {
                setError("Tagname already exist in the database");
            }
        }
        else
        {
            event.preventDefault();
            props.onAdd(tagname)
            setTagname();
            props.onHide();
        }

        console.log(Object.values(props.tagList));
         setValidated(true);
        
    }




    return(
        <React.Fragment>
<       Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Add Tag name
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h5>Enter Tagname</h5>
        <p>
        <Form noValidate validated={validated} onSubmit={onClickHandler}>
            <Form.Group controlId="exampleForm.ControlInput1">
                <Form.Control 
                     required
                type="text" 
                name="tagname" 
                value={tagname} 
                onChange={onInputChangeHandler}
                 placeholder="Input tag name" />
            
            <Form.Control.Feedback type="invalid" >
                {error}
            </Form.Control.Feedback>
            <Form.Control.Feedback>
                 Looks good
            </Form.Control.Feedback>
            </Form.Group>
           

            <Button variant="secondary" style={{marginRight:"5px"}} onClick={props.onHide}>Close</Button>
            <Button variant="primary" type="submit">Save</Button>
         </Form>
        </p>

      
      </Modal.Body>
    </Modal>
    </React.Fragment>
  );
}


export default ManageData;