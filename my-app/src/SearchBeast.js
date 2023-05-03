import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';


function SearchBeast() {
    const [choice, setChoice] = useState("One")
    return (
        <div className="App">
            <Form.Select onChange={function(event){
                //choice = event.target.value
                setChoice(event.target.value)
            }} aria-lable="Default select example">
                <option>Open this menu</option>
                <option value="One">One</option>
                <option value="One">One</option>
                <option value="One">One</option>
            </Form.Select>
        </div>
    )
}

export default SearchBeast
{/* <Form>
    <Form.group>
        <Form.label>Select Amount of Horns</Form.label>
        <Form.select value={selectedChoice} onChange={}></Form.select>
    </Form.group>
</Form> */}