
import './App.css';
import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import {useState} from "react";
import { Switch, Route, useParams } from "react-router-dom";

function App() {

  const initial_dessert =[{recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2022/01/vegan-chocolate-mousse-3-680x1020.jpg",
  recipename:"Vegan Chocolate Mousse",
  ingre1:"Silken tofu – This type of tofu has a custardy texture. It works well in creamy and blended foods like smoothies, desserts, puddings, salad dressings, sauces and dips.",
  ingre2:"Dark chocolate – I like to use a 3 oz dark chocolate bar, but feel free to use dark chocolate chips or any favorite chocolate. Go for a dairy free chocolate to keep this recipe vegan!",
  ingre3:"Maple syrup – To naturally sweeten the mousse!",
  ingre4:"Vanilla – For an extra boost of flavor that compliments the chocolate taste so well!",
  ingre5:"Optional – We love this chocolate mousse topped with fresh berries! You could even add whipped cream and chocolate shavings. Use coconut or almond milk whipped cream and dairy-free chocolate to keep this mousse vegan friendly.",
process1:"Melt the chocolate. Use a double boiler to melt the chocolate. The chocolate can also be melted in the microwave in 20 second increments.",
process2:"Blend ingredients. Add the tofu, maple syrup, and vanilla to a food processor or blender and blend until fully combined.",
process3:"Once combined, add in melted chocolate and blend again until smooth and creamy.",
process4:"Chill. Transfer mousse from the food processor to an airtight container. Place in the fridge to chill for about 1 hour.",
process5:"Serve. Spoon servings of mousse into individual bowls or jars and top with fresh berries and/or any other favorite toppings. Enjoy!",
recipevideo:"https://www.youtube.com/embed/5MXqAWZd85w"},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/08/cherry-crisp-4-680x1020.jpg", 
  recipename:"Cherry Crisp",
  ingre1:"Cherry filling. toss cherries along with the maple syrup, cornstarch, Juicy, fresh and so delicious!",
  ingre2:"lemon juice",
  ingre3:"vanilla and almond extract",
  ingre4:"Oat topping. mix rolled oats, flour, brown sugar, butter, salt and cinnamon.",
  ingre5:"These ingredients bake over the juicy cherries and create total magic. SO GOOD!",
  process1:"Cherry filling. To make this simple cherry crisp recipe, first add the cherries, maple syrup, lemon juice, cornstarch, vanilla and almond extract to a bowl and toss gently to combine.",
  process2:"Pour the cherry mixture and all of it’s juices into your prepared baking dish.",
  process3:"Oat topping. In a separate mixing bowl, whisk together the crumble topping: rolled oats, flour, brown sugar, butter, salt, and cinnamon. Sprinkle the topping evenly over the cherries in the baking dish.",
  process4:"Bake. Place the dessert in a preheated oven and bake for 30-35 minutes so that the cherries are nice and tender and the crumble topping is lightly browned.",
  process5:"Cool and serve. Let crisp cool slightly and then serve (preferably with vanilla ice cream!) and ENJOY!",
  recipevideo:"https://www.youtube.com/embed/Miy72TkUiVU"},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/09/baked-cinnamon-apples-3-680x1020.jpg",
  recipename:"Baked Cinnamon Apples",
   ingre1:"Apples. Use an apple that will stand up to baking. More suggestions on what type of apple to use, below. I like to use a mix of Honeycrisp and Granny Smith apples for a nice balance of sweet and tart.",
  ingre2:"Brown sugar. I love using brown sugar to sweeten the apple slices because it has a subtle caramel flavor that pairs wonderfully with apples.",
  ingre3:"Cornstarch. Keeps the baked apple slices from becoming overly juicy.",
  ingre4:"Cinnamon + nutmeg. Adds the perfect amount of warmth!",
  ingre5:"Lemon juice. To balance the sweetness and add brightness to the overall flavor.",
  process1:"Prep apples. Peel, core and slice your apples. Preheat the oven and grease a medium baking dish. ",
  process2:"Toss apples with ingredients. In a large bowl, add the apples slices along with all other ingredients, except butter. Toss to coat.",
  process3:"Bake. Place apples in the baking dish and add butter cubes on top. Cover the dish with foil and bake for 30-40 minutes, and until apples are tender.",
  process4:"Serve. Once cooked, stir to coat the apples in the yummy juices. Serve for breakfast with granola and yogurt or for a little more indulgent sweet treat",
  process5:"serve with vanilla ice cream or whipped cream.",
  recipevideo:"https://www.youtube.com/embed/s8pf1Xkhkn4"},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/07/berry-compote-5-680x1020.jpg",
  recipename:"Mixed Berry Compote",
  ingre1:"Mixed berries. I used a mix of strawberries, blueberries and raspberries.",
  ingre2:"Feel free to use any combination of berries and add in blackberries too! Fresh or frozen berries work.",
  ingre3:"Sugar. Granulated sugar helps sweeten the berries and make this sauce perfectly sweet. Start with about 1/3 cup of sugar and then taste the sauce. If you like your compote sweeter, you can always add more sugar.",
  ingre4:"Lemon zest and lemon juice. Both are optional ingredients, so if you don’t have them available, no worries.",
  ingre5:"However, they do add a pop of fresh favor that balances out the sweetness. Any citrus juice and zest will work.",
  process1:"This recipe is so easy to make! You’ll need a saucepan or pot and about 20 minutes of prep and cook time. Here’s the simple steps:",
  process2:"Combine & simmer ingredients. In a pot over medium heat, combine ingredients and bring them to a very gentle simmer.",
  process3:"Cook. Stir frequently as the berries cook and break down a bit and they turn into a thick sauce.",
  process4:"You can lightly mash the berries, if you don’t like the sauce as chunky.",
  process5:"Serve and enjoy. You can serve warm or let the sauce cool and store in an airtight container in the fridge for a couple of weeks. Enjoy!",
  recipevideo:"https://www.youtube.com/embed/AhVqQdSHU7s"},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/09/pumpkin-peanut-butter-cups-7-680x1020.jpg",
  recipename:"Pumpkin Peanut Butter Cups",
   ingre1:"Natural Delights Medjool dates",
  ingre2:"Pumpkin puree",
  ingre3:"Creamy natural peanut butter",
  ingre4:"splash of water as needed",
  ingre5:"Dark chocolate + coconut oil",
  process1:"Line a muffin tray with 12 muffin liners. Set aside.",
  process2:"Place the chocolate and the coconut oil in a small bowl and melt. This can be done either in a double boiler or in the microwave in 20-30 seconds spurts, stirring in between.",
  process3:"Pour a heaping 1/2 tablespoon into each muffin liner. Using a spoon, gentle press the chocolate 1/4 of the way up the sides of the muffin liners. Place in the fridge wile you make the filling.",
  process4:"In a blender or food processor, combine the dates, peanut butter, pumpkin, 1 tablespoon of water and pumpkin pie spice. Blend. Add more water, 1 tablespoon at a time, as needed to get your blender going. You want as little water as possible but a little is likely necessary.",
  process5:"Divid the pumpkin mixture evenly into the muffin cups on top of the chocolate. Spoon a heaping 1/2 tablespoon of chocolate on top of each cup and tap the muffin tray lightly to smooth them out. Top with sea salt if desired.Place in the fridge for about 30 minutes to harden up and ENJOY!",
  recipevideo:"https://www.youtube.com/embed/sBRBSrHamrY"},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/08/Poached-Pears-4-680x1020.jpg",
  recipename:"Vanilla Poached Pears",
   ingre1:"Water + sugar. When simmered together with the pears, these ingredients will create a sweet syrup.",
  ingre2:"Pears. You’ll need to make sure the pears you use are soft, yet still slightly firm to the touch. Use Bartlett, Bosc, Anjou or even Red Asian Pears. ",
  ingre3:"Cinnamon. This warming spice pairs well with the texture and flavor of cooked pears. ",
  ingre4:"Star anise. For a lovely sweet, licorice-like flavor.",
  ingre5:"Vanilla. Adds to the sweet caramelized flavor of the poached peaches.",
  process1:"Prep the pears. Start this recipe with washing and peeling the pears.",
  process2:"Combine ingredients. Place the pears in a large pot with the water. Add the sugar, cinnamon, anise, and vanilla.",
  process3:"Cook pears. Bring the ingredients to a boil and reduce the heat to low. Simmer for about 30 to 40 minutes or until the pears are tender and the liquid is thickened, like syrup.",
  process4:"Serve and enjoy. Serve the pears warm on their own, or with a bit of the leftover syrup.",
  process5:"We love to garnish with a sprinkle of cinnamon and/or a drizzle of caramel sauce, or you can also use an anise star, which looks really beautiful when serving at an event. Enjoy!",
  recipevideo:"https://www.youtube.com/embed/lNY3rSzXOBg"},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/06/strawberry-brownies-11-680x1020.jpg",
  recipename:"Strawberry Brownies",
   ingre1:"Flaxseed meal + water. Typically, this recipe would be made with eggs, but to veganize it, we’re mixing ground flaxseed with water to make flax eggs. ",
  ingre2:"Strawberry cake mix. You’ll need a box of strawberry cake mix. Double check that it’s vegan, if desired.",
  ingre3:"I used Duncan Hines Perfectly Moist Strawberry Supreme Cake Mix.",
  ingre4:"Vegetable oil. A little added oil will yield brownies with the perfect moist texture.",
  ingre5:"Glaze. Don’t leave the glaze off. It really makes these brownies special! It’s a simple mix of powdered sugar, plant-based milk and vanilla extract.",
  process1:"Prepare oven and baking pan. Preheat your oven to 350ºF. Spray an 8×8-inch baking pan or dish with nonstick baking spray or line it with parchment paper.",
  process2:"Make flax eggs. Stir to combine flaxseed meal and water in a small bowl. Place the mixture in the fridge to set for 10 minutes. ",
  process3:"Combine all ingredients. In one large bowl, stir all of the ingredients together, including the flax eggs.",
  process4:"Bake. Transfer the batter to the prepared baking pan and evenly smooth out the top. Bake for 33-35 minutes, or until a toothpick inserted into the brownies comes out clean. ",
  process5:"Make the glaze. Remove the brownies from the oven and place the pan on a wire rack. While the brownies are still warm, whisk together the glaze ingredients and pour the mixture evenly over the warm brownies.Cool and serve. Let the brownies cool in the pan for about 1 hour, then cut into squares and enjoy!",
  recipevideo:"https://www.youtube.com/embed/Ylt4ltDFHEw"}]
  
  const [dessertrep, setDessertrep] = useState(initial_dessert);
  
const initial_salad =[
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/04/street-corn-pasta-salad-5-680x1020.jpg", 
  recipename:"Mexican Corn Pasta Salad",
  ingre1:"Pasta - I used a simple rotini but really any kind of bite sized pasta would work well including a veggie pasta such as lentil pasta.",
  ingre2:"Crema Sauce - this is based heavily off of traditional street corn but thinned out a little so that everything can get coated in it.",
  ingre3:"Lots of veggies - bell pepper, cilantro, onion, avocado, etc.",
  ingre4:"Grilled Corn - I LOVE freshly grilled corn in this recipe BUT you could certainly use canned corn for ease.",
  ingre5:"If doing so, I suggest looking for fire-roasted corn in the can so you get that roasted flavor!",
  process1:"Cook your pasta according to package directions. Once done, drain and rinse under cold water. You can also leave the pasta warm if you’d prefer.",
  process2:"If you haven't already done so, cut the corn off of the cobb and place into a large bowl.",
  process3:"Make the sauce by mixing together the sour cream, mayo, lime zest and juice, garlic, chili powder, cumin, and a couple large pinches of salt and pepper.",
  process4:"Into the bowl with corn, mix in the pasta, cilantro, red onion, avocado, bell pepper, and cotija. Pour the sauce over top and toss to combine.",
  process5:"Garnish as desired and ENJOY! Store leftovers in an airtight container in the fridge for up to 3 days.",
  recipevideo:"https://www.youtube.com/embed/HdslY0NrZeU"},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2022/01/Chickpea-Tacos-3-680x1020.jpg", 
  recipename:"Chickpea Tacos",
  ingre1:"Chickpeas. These might just be my favorite legume. They are so versatile, from hummus to salads, chickpeas are a pretty awesome food! You’ll need 2 cans to make these tacos.",
  ingre2:"Olive oil. For cooking the chickpeas.",
  ingre3:"Spices. I love the flavorful mix of spices used to season the chickpeas in this recipe. We’re using a tasty blend of cumin, chili powder, salt, black pepper, oregano and paprika. It’s so much tastier than store-bought taco seasoning packets and so easy too! ",
  ingre4:"Water. Adding a bit of water will help the seasoning blend coat the chickpeas.",
  ingre5:"For serving. Serve your chickpea tacos using corn tortillas, flour tortillas or use any favorite wrap. We also like to add fresh cilantro, diced red onion, a squeeze of fresh lime juice and a sprinkle of cotija (or feta) cheese. Feel free to add any favorite toppings that you prefer.",
  process1:"",
  process2:"",
  process3:"",
  process4:"",
  process5:"",
  recipevideo:""},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/08/cherry-crisp-4-680x1020.jpg", 
  recipename:"Cherry Crisp",
  ingre1:"",
  ingre2:"",
  ingre3:"",
  ingre4:"",
  ingre5:"",
  process1:"",
  process2:"",
  process3:"",
  process4:"",
  process5:"",
  recipevideo:""},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/08/cherry-crisp-4-680x1020.jpg", 
  recipename:"Cherry Crisp",
  ingre1:"",
  ingre2:"",
  ingre3:"",
  ingre4:"",
  ingre5:"",
  process1:"",
  process2:"",
  process3:"",
  process4:"",
  process5:"",
  recipevideo:""},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/08/cherry-crisp-4-680x1020.jpg", 
  recipename:"Cherry Crisp",
  ingre1:"",
  ingre2:"",
  ingre3:"",
  ingre4:"",
  ingre5:"",
  process1:"",
  process2:"",
  process3:"",
  process4:"",
  process5:"",
  recipevideo:""},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/08/cherry-crisp-4-680x1020.jpg", 
  recipename:"Cherry Crisp",
  ingre1:"",
  ingre2:"",
  ingre3:"",
  ingre4:"",
  ingre5:"",
  process1:"",
  process2:"",
  process3:"",
  process4:"",
  process5:"",
  recipevideo:""},
  {recipeimage:"https://foodwithfeeling.com/wp-content/uploads/2021/08/cherry-crisp-4-680x1020.jpg", 
  recipename:"Cherry Crisp",
  ingre1:"",
  ingre2:"",
  ingre3:"",
  ingre4:"",
  ingre5:"",
  process1:"",
  process2:"",
  process3:"",
  process4:"",
  process5:"",
  recipevideo:""}]

const [saladrep, setSaladrep] = useState(initial_salad);

  const history = useHistory();

  const [mode, setMode] = useState("dark");
  console.log(setMode);
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });

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
       <Button varient="text" color="inherit" onClick={()=>history.push("/recipes")}>Recipes</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/dessert")}>Dessert</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/salad")}>Salad</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/")}>Resources</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/")}>Log in</Button>
       <Button varient="text" color="inherit" onClick={()=>history.push("/")}>Sign up</Button>
      
       </div>
       <Switch>
      
      <Route exact path="/">
          <Home />
        </Route>
       
        <Route path="/dessert/:id">
        <DessertMoredetails dessertrep={dessertrep}/>
        </Route>

        <Route path="/dessert">
        <Dessert dessertrep={dessertrep} setDessertrep={setDessertrep}/>
        </Route>

        <Route path="/salad/:id">
        <SaladMoredetails saladrep={saladrep}/>
        </Route>

        <Route path="/salad">
        <Salad saladrep={saladrep} setSaladrep={setSaladrep}/>
        </Route>

        <Route path="/recipes">
        <Recipes/>
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


function NotFound(){
  return(
    <div>
      <img className='notfound' src="https://i.pinimg.com/originals/5b/27/01/5b270123bd7f65a53d4f889baa8609d7.gif" alt="404 not found"/>
    </div>
  );
}

function Home() {
  return (
    <div className="home">
      <div className='line-home'></div>
     <h1 className='home-headings'>A food blog infused with culture and love</h1>
     <h4 className='home-headings'>A food blog that makes cooking fun and simple - a perfect dish every time! Our easy and fail-proof recipes deliver authentic flavors using modern and innovative techniques.</h4>
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
      <h2 className='about-headings'>NICE TO MEET YOU !</h2>
      <h3 className='about-headings-name'>HI I'M SANDEE</h3>
      <h4 className="about-para">I'm a student, now full time blogger. I live in india, I Love to Cook and Eat</h4>
      <h4 className="about-para">My mom is a talented chef and a food enthusiast.</h4>
      <h4 className="about-para">The flavors and aromas of her food were so vivid in my memory that with her guidance and precise techniques I was able to adjust the flavors in my dishes to be just like hers. Before I knew it, I was spending more and more time in the kitchen, experimenting with different ingredients, cuisines, presentations, and sharing my simplified recipes with family and friends.</h4>
      <img className="dessert-img-det" src="https://dmn-dallas-news-prod.cdn.arcpublishing.com/resizer/-m--_IkcM5em4yoirph2pEOGYjE=/1200x630/smart/filters:no_upscale()/arc-anglerfish-arc2-prod-dmn.s3.amazonaws.com/public/NLBIFJIQAKOB4Z3H3DHLWSMWGI.jpg" alt="profile pic"/>
      </div>
      </div>

      <Footer/>
    </div>
  );
}

function Recipes(){
  return(
    <div>
       <div className='rec-line'></div>
    </div>
  );
}

function Dessert({dessertrep,setDessertrep}){
  return(
    <div>
       <div className='dessert-line'></div>
    <div className='dessert-display-flex'>
      {dessertrep.map(({recipeimage,recipename},index)=>(<DessertList recipeimage={recipeimage} recipename={recipename} id={index}/>))}
    </div>
    <Footer/>
    </div>
  );
}

function DessertList({recipeimage,recipename,id}){
  const history = useHistory();
  return(
    <div >
      <div className='dessert-flex' 
      onClick={()=>{console.log(id); 
     history.push("/dessert/"+id); }}>
      <img className="dessert-img" src={recipeimage} alt={recipename}/>
      <h1 className="dessert-name">{recipename}</h1>
    </div>
    </div>
  );
}

function DessertMoredetails({dessertrep}){
  const history = useHistory();
  const {id} = useParams();
  const dessertdet = dessertrep[id]; 
  console.log(dessertdet);
  return(
    <div >
      <div className='line-detl'></div>
      <div className='moredetails-div'>
    <h1 className="dessert-name-det">{dessertdet.recipename}</h1>
    <img className="dessert-img-det" src={dessertdet.recipeimage} alt={dessertdet.recipename}/>

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

    <iframe width="800" height="500" src={dessertdet.recipevideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <div className="button">
    <Button onClick={()=>history.push("/dessert") }variant="outlined">Dessert Page</Button>
    </div>
    </div>
    </div>
    <Footer/>
    </div>
  );
}

function Salad({saladrep,setSaladrep}){
  return(
    <div>
       <div className='dessert-line'></div>
    <div className='dessert-display-flex'>
      {saladrep.map(({recipeimage,recipename},index)=>(<SaladList recipeimage={recipeimage} recipename={recipename} id={index}/>))}
    </div>
    <Footer/>
    </div>
  );
}

function SaladList({recipeimage,recipename,id}){
  const history = useHistory();
  return(
    <div >
      <div className='dessert-flex' 
      onClick={()=>{console.log(id); 
     history.push("/salad/"+id); }}>
      <img className="dessert-img" src={recipeimage} alt={recipename}/>
      <h1 className="dessert-name">{recipename}</h1>
    </div>
    </div>
  );
}

function SaladMoredetails({saladrep}){
  const history = useHistory();
  const {id} = useParams();
  const dessertdet = saladrep[id]; 
  console.log(dessertdet);
  return(
    <div >
      <div className='line-detl'></div>
      <div className='moredetails-div'>
    <h1 className="dessert-name-det">{dessertdet.recipename}</h1>
    <img className="dessert-img-det" src={dessertdet.recipeimage} alt={dessertdet.recipename}/>

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

    <iframe width="800" height="500" src={dessertdet.recipevideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
   <div className="button">
    <Button onClick={()=>history.push("/salad") }variant="outlined">Salad and cocktail Page</Button>
    </div>
    </div>
    </div>
    <Footer/>
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
       <h4 className="footer-words" varient="text" onClick={()=>history.push("/recipes")}>Recipes</h4>
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