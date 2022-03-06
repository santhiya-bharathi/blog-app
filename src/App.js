
import './App.css';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useEffect, useState} from "react";
import { Switch, Route, useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { NotFound } from './NotFound';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
// import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';

// const API_URL = "https://621885221a1ba20cbaa3262f.mockapi.io";
const API_URL = "https://blog-recipe-node-app.herokuapp.com";

function App() { 
  
  const history = useHistory();

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
    <div>
      <h1 className="foody-park">Sandee Foody Court</h1>
    </div>
    <div className='home-recipe'>
      <Button varient="text" color="inherit" onClick={()=>history.push("/")}>Home</Button>
      <Button varient="text" color="inherit" onClick={()=>history.push("/about")}>About</Button>
      <Button varient="text" color="inherit" onClick={()=>history.push("/salad")}>Recipe</Button>
      <Button varient="text" color="inherit" onClick={()=>history.push("/addsalad")}>Addrecipe</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/login")}>Log in</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/signup")}>Sign up</Button>
      
       </div>
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

        <Route path="/signupsuccess">
          <SignupSuccess />
        </Route>

        <Route path="/signupfailed">
          <SignupFailed />
        </Route>

        <Route path="/loginsuccess">
          <LoginSuccess />
        </Route>

        <Route path="/loginfailed">
          <LoginFailed />
        </Route>

        <Route path="/login">
          <LoginPage />
        </Route>
        
          <Route path="/signup">
          <SignupPage />
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
  );
}

function About(){
  return(
    <div>
      <div className='line-about'></div>
      <div className="moredetails-div">
        
      <h1 className='about-headings-1'>Hello and welcome to The Sandee Foody Court</h1>
      <div className="det-div-flex">
      <h2 className='about-headings'>NICE TO MEET YOU!</h2>
      <h3 className='about-headings-name'>HI I'M SANDEE</h3>
      <h4 className="about-para">I'm a student, now full time blogger. I live in india, I Love to Cook and Eat</h4>
      <h4 className="about-para">My mom is a talented chef and a food enthusiast.</h4>
      <h4 className="about-para">The flavors and aromas of her food were so vivid in my memory that with her guidance and precise techniques I was able to adjust the flavors in my dishes to be just like hers. Before I knew it, I was spending more and more time in the kitchen, experimenting with different ingredients, cuisines, presentations, and sharing my simplified recipes with family and friends.</h4>
      <img className="dessert-img-det pad-div-img" src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/-m--_IkcM5em4yoirph2pEOGYjE=/1200x630/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/NLBIFJIQAKOB4Z3H3DHLWSMWGI.jpg" alt="profile pic"/>
      </div>
      </div>

      <Footer/>
    </div>
  );
}



function Salad(){
  const [saladrep, setSaladrep] = useState([]);
  
const getSalad = () => {
  fetch(`${API_URL}/saladrecipe`, {method:"GET"})
  .then((data)=>data.json())
  .then((mvs)=>setSaladrep(mvs));
};

useEffect(getSalad, []);

// const deleteMovie = (id) =>{
//   fetch(`${API_URL}/saladrecipe/${id}`, {method:"DELETE"})
//   .then(()=>getSalad());
// };
const history = useHistory();
  return(
    <div>
       <div className='rec-line'></div>
    <div className='dessert-display-flex'>
      {saladrep.map(({recipeimage, recipename, id, _id})=>(<SaladList key={_id} id={_id} recipeimage={recipeimage} recipename={recipename}
      
    //   deleteButton= {<IconButton aria-label="delete" color="error"
    //    onClick={()=> deleteMovie(id)}>
    //    <DeleteIcon />
    //  </IconButton>}
      
      editButton= {<IconButton 
        style={{marginLeft:"auto"}}
        aria-label="edit"  color="success"
       onClick={()=>history.push("/salad/edit/" + _id)}>
       <EditIcon />
     </IconButton>}
      />))}
    </div>
    <Footer/>
    </div>
  );
}

function SaladList({recipeimage,recipename,id,deleteButton,editButton}){
  const history = useHistory();
  return(
    
    <div >
     
      <div className='dessert-flex'>
      <img className="dessert-img" src={recipeimage} alt={recipename}/>
      <h1 className="dessert-name">{recipename}</h1>
      <div className='info-edit-icon'>
      <IconButton onClick={()=>{console.log(id);
        history.push("/salad/"+id);
        }} color="info" aria-label="more-info">
        <MoreVertIcon/>
</IconButton>
      {editButton}
      {/* {deleteButton} */}
      </div>
    </div>
    </div>
  );
}

function SaladMoredetails(){
  const history = useHistory();
  const {id} = useParams();
 
  const [dessertdet, setDessertdet] = useState({});

  useEffect(()=>{
    fetch(`${API_URL}/saladrecipe/${id}`, {method:"GET"})
    .then((data)=>data.json())
    .then((mv)=>setDessertdet(mv));
  }, [id]);
  
  console.log(dessertdet);
  return(
    <div >
      <div className='line-detl'></div>
      <div className='moredetails-div'>
    <h1 className="dessert-name-det">{dessertdet.recipename}</h1>
    <div className='img-video-div'>
    <img className="dessert-img-det" src={dessertdet.recipeimage} alt={dessertdet.recipename}/>
    <iframe className="recipevideo" width="500" height="400" src={dessertdet.recipevideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <div className='det-div-flex'>
    <h1 className="dessert-ingre-det">Ingredients</h1>

    <div className='inte-div'>
    <h3 className="dessert-ingre-det-para" >⭐{dessertdet.ingre1}</h3>
    <h3 className="dessert-ingre-det-para">⭐{dessertdet.ingre2}</h3>
    <h3 className="dessert-ingre-det-para">⭐{dessertdet.ingre3}</h3>
    <h3 className="dessert-ingre-det-para">⭐{dessertdet.ingre4}</h3>
    <h3 className="dessert-ingre-det-para">⭐{dessertdet.ingre5}</h3>
    </div>
    
    <h1 className="dessert-make-det">How to make recipe</h1>

    <div className='inte-div'>
    <h3 className="dessert-ingre-det-para">Here's the simple process:</h3>
    <h3 className="dessert-ingre-det-para">⭐{dessertdet.process1}</h3>
    <h3 className="dessert-ingre-det-para">⭐{dessertdet.process2}</h3>
    <h3 className="dessert-ingre-det-para">⭐{dessertdet.process3}</h3>
    <h3 className="dessert-ingre-det-para">⭐{dessertdet.process4}</h3>
    <h3 className="dessert-ingre-det-para">⭐{dessertdet.process5}</h3>
    </div>

    
   <div className="button">
    <Button onClick={()=>history.push("/salad") }variant="outlined">Salad and cocktail Page</Button>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

function Addsalad(){
  const history = useHistory();

const formvalidationschema = yup.object({
  recipeimage: yup.string().required("why not fill this recipeimage?").min(4),
  recipename: yup.string().required("why not fill this recipename?").min(5),
  ingre1: yup.string().required("why not fill this ingredients?").min(5),
  ingre2: yup.string().required("why not fill this ingredients?").min(5),
  ingre3: yup.string().required("why not fill this ingredients?").min(5),
  ingre4: yup.string().required("why not fill this ingredients?").min(5),
  ingre5: yup.string().required("why not fill this ingredients?").min(5),
  process1: yup.string().required("why not fill this process?").min(5),
  process2: yup.string().required("why not fill this process?").min(5),
  process3: yup.string().required("why not fill this process?").min(5),
  process4: yup.string().required("why not fill this process?").min(5),
  process5: yup.string().required("why not fill this process?").min(5),
});

const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
  initialValues: { recipeimage: "", recipename:"", ingre1:"", ingre2:"", ingre3:"", ingre4:"", ingre5:"",
   process1:"", process2:"", process3:"", process4:"", process5:"",recipevideo:""},

  validationSchema: formvalidationschema,

  onSubmit: (newMovies) => {
    console.log("onsubmit", newMovies);
    addMovie(newMovies);
  }
});

const addMovie =(newMovies)=>{

console.log(newMovies)
  fetch(`${API_URL}/saladrecipe`, {
    method:"POST",
    body: JSON.stringify(newMovies),
    headers: {'Content-Type': 'application/json'},
}).then(()=>history.push("/salad"));
  
};

  return(
    <div>
      <div className='line-detl'></div>
<form onSubmit={handleSubmit} className="add-recipe">

<TextField id="recipeimage" 
      name="recipeimage" 
      value = {values.recipeimage} 
      onChange={handleChange} 
      onBlur={handleBlur}
       label="upload recipeimage url" 
       error={errors.recipeimage && touched.recipeimage}
       helperText={errors.recipeimage && touched.recipeimage && errors.recipeimage}
       variant="outlined" />
       
     
     <TextField id="recipename" 
      name="recipename" 
      value = {values.recipename} 
      onChange={handleChange} 
      onBlur={handleBlur}
      label="enter recipename"
      error={errors.recipename && touched.recipename}
      helperText={errors.recipename && touched.recipename && errors.recipename}
       variant="outlined" />
      

      <TextField id="ingre1" 
      name="ingre1" 
      value = {values.ingre1} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter ingredients" 
      error={errors.ingre1 && touched.ingre1}
       helperText={errors.ingre1 && touched.ingre1 && errors.ingre1}
      variant="outlined" />
      
      <TextField id="ingre2" 
      name="ingre2" 
      value = {values.ingre2} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter ingredients" 
      error={errors.ingre2 && touched.ingre2}
       helperText={errors.ingre2 && touched.ingre2 && errors.ingre2}
      variant="outlined" />

        <TextField id="ingre3" 
      name="ingre3" 
      value = {values.ingre3} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter ingredients" 
      error={errors.ingre3 && touched.ingre3}
       helperText={errors.ingre3 && touched.ingre3 && errors.ingre3}
      variant="outlined" />

        <TextField id="ingre4" 
      name="ingre4" 
      value = {values.ingre4} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter ingredients" 
      error={errors.ingre4 && touched.ingre4}
       helperText={errors.ingre4 && touched.ingre4 && errors.ingre4}
      variant="outlined" />

        <TextField id="ingre5" 
      name="ingre5" 
      value = {values.ingre5} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter ingredients" 
      error={errors.ingre5 && touched.ingre5}
       helperText={errors.ingre5 && touched.ingre5 && errors.ingre5}
      variant="outlined" />

  
      <TextField id="process1" 
      name="process1" 
      value = {values.process1} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter recipe making process" 
      error={errors.process1 && touched.process1}
       helperText={errors.process1 && touched.process1 && errors.process1}
      variant="outlined" />

     <TextField id="process2" 
      name="process2" 
      value = {values.process2} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter recipe making process" 
      error={errors.process2 && touched.process2}
       helperText={errors.process2 && touched.process2 && errors.process2}
      variant="outlined" />

       <TextField id="process3" 
      name="process3" 
      value = {values.process3} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter recipe making process" 
      error={errors.process3 && touched.process3}
       helperText={errors.process3 && touched.process3 && errors.process3}
      variant="outlined" />

       <TextField id="process4" 
      name="process4" 
      value = {values.process4} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter recipe making process" 
      error={errors.process4 && touched.process4}
       helperText={errors.process4 && touched.process4 && errors.process4}
      variant="outlined" />

       <TextField id="process5" 
      name="process5" 
      value = {values.process5} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter recipe making process" 
      error={errors.process5 && touched.process5}
       helperText={errors.process5 && touched.process5 && errors.process5}
      variant="outlined" />

       <TextField id="recipevideo" 
      name="recipevideo" 
      value = {values.recipevideo} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter recipe making video link" 
      error={errors.recipevideo && touched.recipevideo}
       helperText={errors.recipevideo && touched.recipevideo && errors.recipevideo}
      variant="outlined" />
     
      <Button type="submit" variant="contained">Add Recipes</Button>
     
    </form>
    </div>
  );
} 

function Editsalad(){
 
  const {id} = useParams();
 
const [blogdet, setBlogdet] = useState(null);
useEffect(()=>{
  fetch(`${API_URL}/saladrecipe/${id}`, {method:"GET"})
  .then((data)=>data.json())
  .then((mv)=>setBlogdet(mv));
}, [id]);

  return blogdet? <UpdateBlog blogdet={blogdet}/>:"";
  
}
function UpdateBlog({blogdet}){
  const history = useHistory();

 const formvalidationschema = yup.object({
  recipeimage: yup.string().required("why not fill this recipeimage?").min(4),
  recipename: yup.string().required("why not fill this recipename?").min(5),
  ingre1: yup.string().required("why not fill this ingredients?").min(5),
  ingre2: yup.string().required("why not fill this ingredients?").min(5),
  ingre3: yup.string().required("why not fill this ingredients?").min(5),
  ingre4: yup.string().required("why not fill this ingredients?").min(5),
  ingre5: yup.string().required("why not fill this ingredients?").min(5),
  process1: yup.string().required("why not fill this process?").min(5),
  process2: yup.string().required("why not fill this process?").min(5),
  process3: yup.string().required("why not fill this process?").min(5),
  process4: yup.string().required("why not fill this process?").min(5),
  process5: yup.string().required("why not fill this process?").min(5),
});

  const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
    initialValues: { recipeimage: blogdet.recipeimage, recipename:blogdet.recipename, 
      ingre1:blogdet.ingre1, 
      ingre2:blogdet.ingre2, 
      ingre3:blogdet.ingre3,
      ingre4:blogdet.ingre4,
      ingre5:blogdet.ingre5,
      process1:blogdet.process1,
      process2:blogdet.process2,
      process3:blogdet.process3,
      process4:blogdet.process4,
      process5:blogdet.process5,
      recipevideo:blogdet.recipevideo},
    validationSchema: formvalidationschema,
  
    onSubmit: (updatedMovie) => {
      console.log("onsubmit", updatedMovie);
      editMovie(updatedMovie);
    }
  });

  const editMovie =(updatedMovie)=>{
    console.log(updatedMovie);
 
  fetch(`${API_URL}/saladrecipe/${blogdet._id}`, {
    method:"PUT",
    body: JSON.stringify(updatedMovie),
    headers: {'Content-Type': 'application/json'},
}).then(()=>history.push("/salad"))
  };
  return(
    <div>
    <div className='line-detl'></div>
    <form onSubmit={handleSubmit} className="add-recipe">
    
    <TextField id="recipeimage" 
          name="recipeimage" 
          value = {values.recipeimage} 
          onChange={handleChange} 
          onBlur={handleBlur}
           label="upload recipeimage url" 
           error={errors.recipeimage && touched.recipeimage}
           helperText={errors.recipeimage && touched.recipeimage && errors.recipeimage}
           variant="outlined" />
           
         
         <TextField id="recipename" 
          name="recipename" 
          value = {values.recipename} 
          onChange={handleChange} 
          onBlur={handleBlur}
          label="enter recipename"
          error={errors.recipename && touched.recipename}
          helperText={errors.recipename && touched.recipename && errors.recipename}
           variant="outlined" />
          
    
          <TextField id="ingre1" 
          name="ingre1" 
          value = {values.ingre1} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter ingredients" 
          error={errors.ingre1 && touched.ingre1}
           helperText={errors.ingre1 && touched.ingre1 && errors.ingre1}
          variant="outlined" />
          
          <TextField id="ingre2" 
          name="ingre2" 
          value = {values.ingre2} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter ingredients" 
          error={errors.ingre2 && touched.ingre2}
           helperText={errors.ingre2 && touched.ingre2 && errors.ingre2}
          variant="outlined" />
    
            <TextField id="ingre3" 
          name="ingre3" 
          value = {values.ingre3} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter ingredients" 
          error={errors.ingre3 && touched.ingre3}
           helperText={errors.ingre3 && touched.ingre3 && errors.ingre3}
          variant="outlined" />
    
            <TextField id="ingre4" 
          name="ingre4" 
          value = {values.ingre4} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter ingredients" 
          error={errors.ingre4 && touched.ingre4}
           helperText={errors.ingre4 && touched.ingre4 && errors.ingre4}
          variant="outlined" />
    
            <TextField id="ingre5" 
          name="ingre5" 
          value = {values.ingre5} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter ingredients" 
          error={errors.ingre5 && touched.ingre5}
           helperText={errors.ingre5 && touched.ingre5 && errors.ingre5}
          variant="outlined" />
    
      
          <TextField id="process1" 
          name="process1" 
          value = {values.process1} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter recipe making process" 
          error={errors.process1 && touched.process1}
           helperText={errors.process1 && touched.process1 && errors.process1}
          variant="outlined" />
    
         <TextField id="process2" 
          name="process2" 
          value = {values.process2} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter recipe making process" 
          error={errors.process2 && touched.process2}
           helperText={errors.process2 && touched.process2 && errors.process2}
          variant="outlined" />
    
           <TextField id="process3" 
          name="process3" 
          value = {values.process3} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter recipe making process" 
          error={errors.process3 && touched.process3}
           helperText={errors.process3 && touched.process3 && errors.process3}
          variant="outlined" />
    
           <TextField id="process4" 
          name="process4" 
          value = {values.process4} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter recipe making process" 
          error={errors.process4 && touched.process4}
           helperText={errors.process4 && touched.process4 && errors.process4}
          variant="outlined" />
    
           <TextField id="process5" 
          name="process5" 
          value = {values.process5} 
          onChange={handleChange} 
          onBlur={handleBlur}  
          label="enter recipe making process" 
          error={errors.process5 && touched.process5}
           helperText={errors.process5 && touched.process5 && errors.process5}
          variant="outlined" />

<TextField id="recipevideo" 
      name="recipevideo" 
      value = {values.recipevideo} 
      onChange={handleChange} 
      onBlur={handleBlur}  
      label="enter recipe making video link" 
      error={errors.recipevideo && touched.recipevideo}
       helperText={errors.recipevideo && touched.recipevideo && errors.recipevideo}
      variant="outlined" />
         
          <Button type="submit" variant="contained">Save Recipes</Button>
         
        </form>
        </div>
      );
  }

function Footer(){
  const history = useHistory();
  return(
    <div className='footer'>
     <div className='footer-icon-link'>
     <h4 className="footer-words" varient="text" onClick={()=>history.push("/")}>Home</h4>
      <h4 className="footer-words" varient="text" onClick={()=>history.push("/about")}>About</h4>
      <h4 className="footer-words" varient="text" color="inherit" onClick={()=>history.push("/salad")}>Salad</h4>
       
     </div>
     <div className='footer-icon-link'>
       <a target="_blank" rel="noreferrer" href='https://www.facebook.com'>
       <img className="icon-f" src="https://pyxis.nymag.com/v1/imgs/11d/582/c7b0487c6e26db4f5be6eb679e3620d2ce-facebook.2x.rsocial.w600.jpg" alt="facebook"/>
       </a>
         
         <a target="_blank" rel="noreferrer" href='https://www.instagram.com'>
         <img className="icon-insta" src="https://xessories.pk/wp-content/uploads/2018/12/Popular_Social_Media-08-512-1.png" alt="instagram"/>
         </a>
         
         <a target="_blank" rel="noreferrer" href='https://twitter.com'>
         <img className="icon-twitter" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRV-iD_ebE82snC0KxQGcRWNcse8CBocN6BFv4LbCb-Gu7lLYcfmePRDFe1_y3pRTjsc-s&usqp=CAU" alt="twitter"/>
         </a>
         
         <a target="_blank" rel="noreferrer" href='https://www.linkedin.com'> 
         <img className="icon-linked" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnnBEIPrcPU5NaFeVWG8z8T1Ad7wkRWtY_PQkOXmxzBtsSN906RWiawAPAZn1SdkbbKwY&usqp=CAU" alt="linked in"/>
         </a>
         
     </div>
     <div>
       <h4 className="footer-words">Ⓒ Copyright 2022 | Sandee Foody Court</h4>
     </div>
    </div>
  );
}


function LoginPage(){
  const history = useHistory();
  const formvalidationschema = yup.object({
    email: yup.string().min(5, "need a bigger email").required(),
    password: yup.string().min(5).max(12).required(),
  });

  const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
    initialValues: { email: "", password:""},
    validationSchema: formvalidationschema,

    onSubmit: (newlogin) => {
      console.log("onsubmit", newlogin);
      addData(newlogin);
    }
  });

  const addData =(newlogin)=>{
    console.log(newlogin)
      fetch(`${API_URL}/login`, {
        method:"POST",
        body: JSON.stringify(newlogin),
        headers: {'Content-Type': 'application/json'},
    }).then((response)=>{
      if(response.status===401){
        history.push("/loginfailed")
      }else{
        history.push("/loginsuccess")
      }
    
      });

    };

  return(
    <form className="login-page" onSubmit={handleSubmit}>
      
     <h1 className="login-head">Login</h1>
     <h4 className="please">Please enter your e-mail id and Password</h4>  
    
    <TextField id="email" 
    name="email" 
    value = {values.email} 
    onChange={handleChange} 
    onBlur={handleBlur}
    type = "email" 
    error={errors.email && touched.email}
    helperText={errors.email && touched.email && errors.email}
    placeholder = "Enter your Email"/>


    <TextField id="password" 
    name="password" 
    value = {values.password} 
    onChange={handleChange} 
    onBlur={handleBlur}
    type="password"
    autoComplete="current-password"
    error={errors.password && touched.password}
    helperText={errors.password && touched.password && errors.password}
    placeholder = "Enter your Password"/>
    
    <Button variant="outlined" type="submit">log in</Button>

    
  </form>
    
  );
}

function SignupPage(){
  const history = useHistory();
  const formvalidationschema = yup.object({
    email: yup.string().min(5, "need a bigger email").required(),
    password: yup.string().min(5).max(12).required(),
  });

  const {handleSubmit, values, handleChange, handleBlur, errors, touched} = useFormik({
    initialValues: { email: "", password:""},
    validationSchema: formvalidationschema,

    onSubmit: (newSignup) => {
      console.log("onsubmit", newSignup);
      addData(newSignup);
    }
  });
  const addData =(newSignup)=>{
    console.log(newSignup)
      fetch(`${API_URL}/signup`, {
        method:"POST",
        body: JSON.stringify(newSignup),
        headers: {'Content-Type': 'application/json'},
    }).then((response)=>{
    if(response.status===400){
      history.push("/signupfailed")
    }else{
      history.push("/signupsuccess")
    }
    // console.log(response.status));
    });
    };
  return(
    <form className="login-page" onSubmit={handleSubmit}>
    <div className="login-page">
    <h1 className="login-head">sign up</h1>
    <h4 className="please">Please enter your e-mail id and Password</h4>
    <TextField id="email" 
    name="email" 
    value = {values.email} 
    onChange={handleChange} 
    onBlur={handleBlur}
    type = "email" 
    error={errors.email && touched.email}
    helperText={errors.email && touched.email && errors.email}
    placeholder = "Enter your Email"/>

<TextField id="password" 
    name="password" 
    value = {values.password} 
    onChange={handleChange} 
    onBlur={handleBlur}
    type="password"
    autoComplete="current-password"
    error={errors.password && touched.password}
    helperText={errors.password && touched.password && errors.password}
    placeholder = "Enter your Password"/>
       <Button variant="contained" type="submit" >sign up</Button>
      
   </div>
   </form>
  );
}


function LoginSuccess(){
  return(
    <div>
      <img className="success" src="https://tse4.mm.bing.net/th?id=OIP.kPQ0PJHdeZL0H9HLZfbsGQAAAA&pid=Api&P=0&w=214&h=177" alt="Login success" />
      <h2>Successfully logged in</h2>
    </div>
  );
}

function LoginFailed(){
  return(
    <div>
      <img className="failed" src="https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-27.jpg" alt="Login failed" />
      <h2>Invalid Credentials</h2>
    </div>
  );
}

function SignupSuccess(){
  return(
    <div>
      <img className="success" src="https://tse4.mm.bing.net/th?id=OIP.kPQ0PJHdeZL0H9HLZfbsGQAAAA&pid=Api&P=0&w=214&h=177" alt="signup success" />
      <h2>Successfully signed up</h2>
    </div>
  );
}

function SignupFailed(){
  return(
    <div>
      <img className="failed" src="https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-27.jpg" alt="signup failed" />
      <h2>email already exists or password must be longer</h2>
    </div>
  );
}

















// function Dessert(){
//   return(
//     <div>
//       {Dessert.map(()=>(<DessertList/>))}
//     </div>
//   );
// }

// function DessertList(){
//   return(
//     <div>
//       <img src="" alt=""/>
//       <h1></h1>
//     </div>
//   );
// }

// {dessertimage:"https://foodwithfeeling.com/wp-content/uploads/2021/08/cherry-crisp-4-680x1020.jpg", 
//   dessertname:"Cherry Crisp",
//   ingre1:"",
//   ingre2:"",
//   ingre3:"",
//   ingre4:"",
//   ingre5:"",
//   process1:"",
//   process2:"",
//   process3:"",
//   process4:"",
//   process5:"",
//   recipevideo:""},