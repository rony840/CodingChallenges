import styled from 'styled-components';
import {useState} from 'react';

const person = {
  name: 'John Doe',
  age: 32,
  occupation: 'Developer'
};

const address = {
  street: '1234 Main St',
  city: 'San Francisco',
  state: 'CA',
  zip: '94107'
};

const Tabs = () => {
  const [isPerson, setIsPerson] = useState(true);
  const [isAddress, setIsAddress] = useState(false);
  const handleClick = (tab) =>{
    if(tab==='person'){
      setIsPerson(true)
      setIsAddress(false)
    }else if(tab==='address'){
      setIsPerson(false)
      setIsAddress(true)
    }
  }
  return (
    <Container>
      <TabList>
        <Tab data-testid="person-tab" onClick={(e)=>handleClick('person')} active={isPerson}>
          Person
        </Tab>
        <Tab data-testid="address-tab" onClick={(e)=>handleClick('address')} active={isAddress}>
          Address
        </Tab>
      </TabList>
      <TabContent>
         {isPerson ?
         (<PersonContainer data-testid="person-container">
            <p>Name: {person.name}</p>
            <p>Age: {person.age}</p>
            <p>Occupation: {person.occupation}</p>
          </PersonContainer>):
         (<AddressContainer data-testid="address-container">
            <p>Street: {address.street}</p>
            <p>City: {address.city}</p>
            <p>State: {address.state}</p>
            <p>Zip: {address.zip}</p>
          </AddressContainer>)
         }
      </TabContent>
    </Container>
  );
};

export default Tabs;

const Container = styled.div`
  width: 400px;
  height: 200px;
  display: flex;
  flex-direction: column;
`;

const TabList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  border-bottom: 1px solid lightgray;
`;

const Tab = styled.li`
  padding: 10px 20px;
  cursor: pointer;
  font-weight: bold;
  color: ${props => (props.active ? 'black' : 'gray')};
  background-color: ${props => (props.active ? 'lightgray' : 'white')};
`;

const TabContent = styled.div`
  padding: 20px;
`;

const PersonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const AddressContainer = styled.div`
  display: flex;
  flex-direction: column;
`;