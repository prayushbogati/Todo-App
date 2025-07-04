import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import Hook from './components/moreOnHooks/hooks'
// import Des from './components/destructuring/des'
// import ChangeNum from './components/useState/numChange'
// import GetTime from './components/useState/getTime'
// import Form from './components/loginApp/form'
// import Strike from './components/useState/strike'
import MyApp from './components/keeperApp/keeperApp'
// import Loop from './loopExercise'
// import EmojiApp from './components/emojisApp/emojiApp'
// import Props from './components/usingProps/props'
// import Heading from "./components/Heading.jsx"
// import List from "./components/List.jsx"
// import GreetApp from './components/GreetApp.jsx'
// import Calculate from './components/calulate.jsx'
// import './index.css' 
// import Hello from './components/learn.jsx'
// import App from './App.jsx'
// import {CountApp} from "./components/testApp.jsx"
// import Greet from "./components/challenge10"
// let name = "Prayush Bogati";
// let date = new Date().getFullYear();
// let randNum = Math.floor(Math.random() * 10 + 1);
// import TodoApp from './components/todoList/todoApp'
createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <CountApp /> */}
    {/* <Hello/> */}
    {/* <p>created by {name}</p>
    <p>copyright {date}</p> */}
    {/* <Greet/> */}
    {/* <Heading/><List/> */}
    {/* <GreetApp/> */}
    {/* <Calculate/> */}
    {/* <Props/>  */}
    {/* <EmojiApp /> */}
    {/* <Loop/> */}
    <MyApp />
    {/* <Form/>  */}
    {/* <Strike/>  */}
    {/* <ChangeNum />  */}
    {/* <GetTime/> */}
    {/* <Des /> */}
{/* <Hook /> */}
{/* <TodoApp/> */}
  </StrictMode>
)