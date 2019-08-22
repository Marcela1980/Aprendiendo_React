import React from 'react';
import './App.css';

/* function Helloword(props) {
  return(
    <div id= "hello">
      <h3>{props.subtitulo} </h3>
    {props.mytext}
     </div>
  )
} */
/* const App = () => <div>Este es mi component: <Helloword/> </div> */

class Helloword extends React.Component {
  render () {
   return (
    <div id= "hello">
    <h3>{this.props.subtitulo} </h3>
    {this.props.mytext}
   </div>
   )
  }
} 

function App() {
  return (
    <div>Este es el componente: 
      <Helloword mytext="Hola Pache" subtitulo=" Hola bien"/> 
      <Helloword mytext="hola!!" subtitulo=" que tal"/> 
      <Helloword mytext="Como estas?" subtitulo=" Todo bien"/> 
      </div>
  );
}

export default App;
