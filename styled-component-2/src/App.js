import StyledButton, { FancyButton } from './components/Button/Button';
import './App.css';



function App() {
  return (
    <div className="App">
      {/* <button className='button'>Click Me</button> */}
      <StyledButton>Styled Button</StyledButton>
      <div>
        <br />
      </div>
      <StyledButton variant='outline'>Styled Outline Button</StyledButton>
      <div>
        <br />
      </div>
      {/* as='a' is a polymorphic prop */}
      <FancyButton as='a'>Fancy Button</FancyButton>
    </div>
  );
}

export default App;
