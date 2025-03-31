import styled from 'styled-components'

const ProgressBar = ({ percent = 12 }) => {

  return (
    <div data-testid="wrapper" style={{
      backgroundColor: 'lightgrey',
      width: '100%',
      height: 20,
      borderRadius: 5,
      }}>
      { (percent>100) ?
        <div data-testid="progress"style={{
      backgroundColor: 'green',
      width: `100%`,
      height: 20,
      borderRadius: 5,
      }}/> : <div data-testid="progress"style={{
      backgroundColor: 'green',
      width: `${percent}%`,
      height: 20,
      borderRadius: 5,
      }}/>}
    </div>
  );
};

export default ProgressBar;