import { useState } from "react";
import ListGroup from './component/ListGroup';
import Alert from './component/Alert';
import Button from './component/Button';
function App(){
  let items = [
    'New York',
    'San Francisco',
    'Tokyo',
    'London',
    'Paris'
  ];

  const [isAlertVisible, setAlertVisible ] = useState(false);
  const [isCityAlert, setCityAlert] = useState(false)
  const [selectedCity, setSelectedCity] = useState<string>('');

  const handleSelectItem = (item: String) =>{
    setSelectedCity(item.toString());
    setCityAlert(true)
  };
  return(
    <div>
        {isAlertVisible && <Alert onClose={()=>setAlertVisible(false)}>My Alert</Alert>}
        {isCityAlert&& <Alert onClose={()=>setCityAlert(false)}>{selectedCity}</Alert>}
        <ListGroup items={items} heading='Cities' onSelectItem={handleSelectItem}/>
        <Button color="primary" onClick={() => {setAlertVisible(true)}}>My button</Button>
    </div>
  )
}
export default App;