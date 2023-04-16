import logo from './logo.svg';
import './App.css';

const singers = [
  { name: 'Eminem', job: 'Singer' },
  { name: 'Dre', job: 'Rapper' },
  { name: 'Snoop', job: 'Producer'}
]
function App() {
  const devs = ['Rasik', 'Fahad', 'Enan', 'Ishmam', 'Faiz'];
  return (
    <div className="App">
      {/* {
        names.map(name  => <li>{name}</li>)
      } */}
      {
        devs.map(dev => <Person name={dev}></Person>)
      }
      {
        singers.map(singer => <Person name ={singer.name}></Person>)
      }
      {/* <Person name={names[0]} profssion="developer"></Person>
      <Person name ={names[1]} profssion="fullstack"></Person>
      <Person name={names[2]} profssion="programmer"></Person> */}
      {/* <Friend name="lmao"></Friend>
      <Friend></Friend> */}
    </div>
  );
}

function Person(props) {
  console.log(props)
  return (
    <div className='person'>
      <h1>{props.name}</h1>
      <h3>{props.profssion}</h3>
    </div>
  )
}

function Friend() {
  return (
    <div className='container'>
      <h3>Name : Friend Name</h3>
      <h5>Profession : lol</h5>
    </div>
  )
}
export default App;
