import {useState,useEffect} from 'react';
export const useGeolocation = () => {
  // Write the body of your hook here
  const [coords, setCoords] = useState();
  const [error, setError] = useState();
  useEffect(()=>{
    const gps = navigator.geolocation;
    if (!gps){
      setError('Geolocation is not supported')
    }
    const setLocation = (position) => {
      const {latitude,longitude} = position.coords
      setCoords({latitude,longitude})
    }
    const handleError = (e) => {
      setError(e.message)
    }
    gps.getCurrentPosition(setLocation,handleError)
  },[])
  
  return {coords,error};
};

const App = () => {
  const { coords, error } = useGeolocation();

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div>
      <p>Latitude: {coords?.latitude}</p>
      <p>Longitude: {coords?.longitude}</p>
    </div>
  );
};

export default App;