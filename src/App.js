
import './App.css';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import { Switch, Route } from "react-router-dom";
import { NotFound } from './NotFound';
import { Footer } from './footerandabout/Footer';

import { Editsalad } from './addandedit/Editsalad';
import { Addsalad } from './addandedit/Addsalad';
import { SaladMoredetails, Salad } from './mainfile/Salad';
import { About } from './footerandabout/About';

// const API_URL = "https://621885221a1ba20cbaa3262f.mockapi.io";
export const API_URL = "https://blog-recipe-node-app.herokuapp.com";

function App() { 

  const [mode, setMode] = useState("dark");
  console.log(setMode);
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });


  const [saladrep, setSaladrep] = useState([]);

  console.log(saladrep);
  useEffect(()=>{
    fetch(`${API_URL}/saladrecipe`, {method:"GET"})
    .then((data)=>data.json())
    .then((mvs)=>setSaladrep(mvs));
  }, []);

  return (
    <ThemeProvider theme={darkTheme}>
    <Paper elevation={3} style={{borderRadius:"0px",minHeight:"100vh"}}>
    <div className="App">
   
       <Switch>
      
       <Route exact path="/">
       <Home />
        </Route>


        <Route path="/addsalad">
        <Addsalad />
        </Route>

        <Route path="/salad/edit/:id">
        <Editsalad />
        </Route>

        <Route path="/salad/:id">
        <SaladMoredetails />
        </Route>

        <Route path="/salad">
        <Salad />
        </Route>

        <Route path="/about">
        <About/>
        </Route>

       
        
        
        <Route path="**">
          <NotFound/>
        </Route>

      </Switch>
    </div>
    </Paper>
    </ThemeProvider>
  );
}

export default App;


function Home() {

const history = useHistory();

  return (
    <div>
      <Buttonbar />
    <div className="home">
      <div className='line-home'></div>
     <h1 className='home-headings'>A food blog infused with culture and love</h1>
     <h4 className='home-headings'>A food blog that makes cooking fun and simple - a perfect dish every time! Our easy and proof recipes deliver authentic flavors using modern and innovative techniques.</h4>
     
     <div className='home-gif-flex-1'>
     <div>
    <img className='home-gif-img' onClick={()=>history.push("/salad") } src="https://www.licious.in/blog/wp-content/uploads/2020/12/3-Step-Chicken-Salad.jpg" alt="salad"/>
    </div>
    <div>
    <img className='home-gif-img' onClick={()=>history.push("/salad") } src="https://www.onelovelylife.com/wp-content/uploads/2019/11/Citrus-Pomegranate-Mocktail7B.jpg" alt="Mocktail"/>
    </div>
    
    </div>
   
     <Footer/>
    </div>
    </div>
  );
}

export function Buttonbar(){
  const history = useHistory();
  return(
    <div>
 <div>
      <h1 className="foody-park">Sandee Foody Court</h1>
    </div>
    <div className='home-recipe'>
      <Button varient="text" color="inherit" onClick={()=>history.push("/")}>Home</Button>
      <Button varient="text" color="inherit" onClick={()=>history.push("/about")}>About</Button>
      <Button varient="text" color="inherit" onClick={()=>history.push("/salad")}>Recipe</Button>
      <Button varient="text" color="inherit" onClick={()=>history.push("/addsalad")}>Addrecipe</Button>
      
       </div>
    </div>
  );
}


