import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import MoreVertIcon from '@mui/icons-material/MoreVert';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import { Footer } from '../footerandabout/Footer';
import { API_URL, Buttonbar } from '../App';

export function Salad() {
  const [saladrep, setSaladrep] = useState([]);

  const getSalad = () => {
    fetch(`${API_URL}/saladrecipe`, { method: "GET" })
      .then((data) => data.json())
      .then((mvs) => setSaladrep(mvs));
  };

  useEffect(getSalad, []);

  // const deleteMovie = (id) =>{
  //   fetch(`${API_URL}/saladrecipe/${id}`, {method:"DELETE"})
  //   .then(()=>getSalad());
  // };
  const history = useHistory();
  return (
    <div>
      <Buttonbar />
      <div>
        <div className='rec-line'></div>
        <div className='dessert-display-flex'>
          {saladrep.map(({ recipeimage, recipename, id, _id }) => (<SaladList key={_id} id={_id} recipeimage={recipeimage} recipename={recipename}

            //   deleteButton= {<IconButton aria-label="delete" color="error"
            //    onClick={()=> deleteMovie(id)}>
            //    <DeleteIcon />
            //  </IconButton>}
            editButton={<IconButton
              style={{ marginLeft: "auto" }}
              aria-label="edit" color="success"
              onClick={() => history.push("/salad/edit/" + _id)}>
              <EditIcon />
            </IconButton>} />))}
        </div>
        <Footer />
      </div>
    </div>
  );
}
function SaladList({ recipeimage, recipename, id, deleteButton, editButton }) {
  const history = useHistory();
  return (

    <div>

      <div className='dessert-flex'>
        <img className="dessert-img" src={recipeimage} alt={recipename} />
        <h1 className="dessert-name">{recipename}</h1>
        <div className='info-edit-icon'>
          <IconButton onClick={() => {
            console.log(id);
            history.push("/salad/" + id);
          }} color="info" aria-label="more-info">
            <MoreVertIcon />
          </IconButton>
          {editButton}
          {/* {deleteButton} */}
        </div>
      </div>
    </div>
  );
}
export function SaladMoredetails() {
  const history = useHistory();
  const { id } = useParams();

  const [dessertdet, setDessertdet] = useState({});

  useEffect(() => {
    fetch(`${API_URL}/saladrecipe/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setDessertdet(mv));
  }, [id]);

  console.log(dessertdet);
  return (
    <div>
      <Buttonbar />
      <div>
        <div className='line-detl'></div>
        <div className='moredetails-div'>
          <h1 className="dessert-name-det">{dessertdet.recipename}</h1>
          <div className='img-video-div'>
            <img className="dessert-img-det" src={dessertdet.recipeimage} alt={dessertdet.recipename} />
            <iframe className="recipevideo" width="500" height="400" src={dessertdet.recipevideo} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className='det-div-flex'>
            <h1 className="dessert-ingre-det">Ingredients</h1>

            <div className='inte-div'>
              <h3 className="dessert-ingre-det-para">⭐{dessertdet.ingre1}</h3>
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
              <Button onClick={() => history.push("/salad")} variant="outlined">Salad and cocktail Page</Button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
}
