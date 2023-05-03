import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import HornedBeast from './HornedBeast';
import BeastData from './data.json';


function SearchBeast(props) {
    const [choice, setChoice] = useState("1")
    let BeastData = [];
    var beasts = [<HornedBeast />, <HornedBeast />]
    var filteredData = BeastData.filter(function(element){
        if (element.horns == choice) {
            return true
        }
        else {
            return false
        }
    })
    return (
        <div className="App">
            <Form.Select onChange={function(event){
                //choice = event.target.value
                setChoice(event.target.value)
            }} aria-lable="Default select example">
                <option>Select Horns Amount</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="100">Hundred</option>
            </Form.Select>
        {filteredData.map ((element) => {
                return <HornedBeast setSelectedBeast={props.setSelectedBeast} updateFunction={props.updateFunction} imgurl={element.img_url} description={element.description} title={element.title} />  
            })}
        <h1>{props.title}</h1>
        <h1>{choice}</h1>    
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