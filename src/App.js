import logo from './logo.svg';
import './App.css';
import Accordion from './Component/Accordion';

function App() {
  const data =[
    {
     Question: "What is Lorem Ipsum?",
     Answer: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. "
    },
    {
      Question: "Where does it come from?",
      Answer: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure La"
    },
    {
      Question: "Where can I get some?",
      Answer: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injecte "
    }
  ]
  return (
    <div className="App">
      <Accordion data={data}/>
    </div>
  );
}

export default App;
