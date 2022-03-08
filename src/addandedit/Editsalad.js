import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API_URL, Buttonbar } from '../App';

export function Editsalad() {

  const { id } = useParams();

  const [blogdet, setBlogdet] = useState(null);
  useEffect(() => {
    fetch(`${API_URL}/saladrecipe/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then((mv) => setBlogdet(mv));
  }, [id]);

  return blogdet ? <UpdateBlog blogdet={blogdet} /> : "";

}
function UpdateBlog({ blogdet }) {
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

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: {
      recipeimage: blogdet.recipeimage, recipename: blogdet.recipename,
      ingre1: blogdet.ingre1,
      ingre2: blogdet.ingre2,
      ingre3: blogdet.ingre3,
      ingre4: blogdet.ingre4,
      ingre5: blogdet.ingre5,
      process1: blogdet.process1,
      process2: blogdet.process2,
      process3: blogdet.process3,
      process4: blogdet.process4,
      process5: blogdet.process5,
      recipevideo: blogdet.recipevideo
    },
    validationSchema: formvalidationschema,

    onSubmit: (updatedMovie) => {
      console.log("onsubmit", updatedMovie);
      editMovie(updatedMovie);
    }
  });

  const editMovie = (updatedMovie) => {
    console.log(updatedMovie);

    fetch(`${API_URL}/saladrecipe/${blogdet._id}`, {
      method: "PUT",
      body: JSON.stringify(updatedMovie),
      headers: { 'Content-Type': 'application/json' },
    }).then(() => history.push("/salad"));
  };
  return (
    <div>
      <Buttonbar />
      <div>
        <div className='line-detl'></div>
        <form onSubmit={handleSubmit} className="add-recipe">

          <TextField id="recipeimage"
            name="recipeimage"
            value={values.recipeimage}
            onChange={handleChange}
            onBlur={handleBlur}
            label="upload recipeimage url"
            error={errors.recipeimage && touched.recipeimage}
            helperText={errors.recipeimage && touched.recipeimage && errors.recipeimage}
            variant="outlined" />


          <TextField id="recipename"
            name="recipename"
            value={values.recipename}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter recipename"
            error={errors.recipename && touched.recipename}
            helperText={errors.recipename && touched.recipename && errors.recipename}
            variant="outlined" />


          <TextField id="ingre1"
            name="ingre1"
            value={values.ingre1}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter ingredients"
            error={errors.ingre1 && touched.ingre1}
            helperText={errors.ingre1 && touched.ingre1 && errors.ingre1}
            variant="outlined" />

          <TextField id="ingre2"
            name="ingre2"
            value={values.ingre2}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter ingredients"
            error={errors.ingre2 && touched.ingre2}
            helperText={errors.ingre2 && touched.ingre2 && errors.ingre2}
            variant="outlined" />

          <TextField id="ingre3"
            name="ingre3"
            value={values.ingre3}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter ingredients"
            error={errors.ingre3 && touched.ingre3}
            helperText={errors.ingre3 && touched.ingre3 && errors.ingre3}
            variant="outlined" />

          <TextField id="ingre4"
            name="ingre4"
            value={values.ingre4}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter ingredients"
            error={errors.ingre4 && touched.ingre4}
            helperText={errors.ingre4 && touched.ingre4 && errors.ingre4}
            variant="outlined" />

          <TextField id="ingre5"
            name="ingre5"
            value={values.ingre5}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter ingredients"
            error={errors.ingre5 && touched.ingre5}
            helperText={errors.ingre5 && touched.ingre5 && errors.ingre5}
            variant="outlined" />


          <TextField id="process1"
            name="process1"
            value={values.process1}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter recipe making process"
            error={errors.process1 && touched.process1}
            helperText={errors.process1 && touched.process1 && errors.process1}
            variant="outlined" />

          <TextField id="process2"
            name="process2"
            value={values.process2}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter recipe making process"
            error={errors.process2 && touched.process2}
            helperText={errors.process2 && touched.process2 && errors.process2}
            variant="outlined" />

          <TextField id="process3"
            name="process3"
            value={values.process3}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter recipe making process"
            error={errors.process3 && touched.process3}
            helperText={errors.process3 && touched.process3 && errors.process3}
            variant="outlined" />

          <TextField id="process4"
            name="process4"
            value={values.process4}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter recipe making process"
            error={errors.process4 && touched.process4}
            helperText={errors.process4 && touched.process4 && errors.process4}
            variant="outlined" />

          <TextField id="process5"
            name="process5"
            value={values.process5}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter recipe making process"
            error={errors.process5 && touched.process5}
            helperText={errors.process5 && touched.process5 && errors.process5}
            variant="outlined" />

          <TextField id="recipevideo"
            name="recipevideo"
            value={values.recipevideo}
            onChange={handleChange}
            onBlur={handleBlur}
            label="enter recipe making video link"
            error={errors.recipevideo && touched.recipevideo}
            helperText={errors.recipevideo && touched.recipevideo && errors.recipevideo}
            variant="outlined" />

          <Button type="submit" variant="contained">Save Recipes</Button>

        </form>
      </div>
    </div>
  );
}
