import Phone from './Pages/Home/Phone';
import Date from './Pages/Home/Date';
import Gender from './Pages/Home/Gender';
import Names from './Pages/Home/Names';
import Button from './Pages/Home/Button';

function App() {
  return (
    <div className='container'>
      <Names />
      <Gender />
      <Date />
      <Phone />
      <Button />
    </div>
  );
}

export default App;
