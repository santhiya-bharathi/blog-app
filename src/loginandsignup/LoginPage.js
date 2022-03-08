import Button from '@mui/material/Button';
import { useHistory } from "react-router-dom";
import TextField from '@mui/material/TextField';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { API_URL } from '../App';

export function LoginPage() {
  const history = useHistory();
  const formvalidationschema = yup.object({
    email: yup.string().min(5, "need a bigger email").required(),
    password: yup.string().min(5).max(12).required(),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formvalidationschema,

    onSubmit: (newlogin) => {
      console.log("onsubmit", newlogin);
      addData(newlogin);
    }
  });

  const addData = (newlogin) => {
    console.log(newlogin);
    fetch(`${API_URL}/login`, {
      method: "POST",
      body: JSON.stringify(newlogin),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.status === 401) {
        history.push("/loginfailed");
      } else {
        alert('Login Successful');
        history.push("/home");
      }

    });

  };

  return (
    <section className='login-page-background'>
      <div>
        <form className="login-page" onSubmit={handleSubmit}>

          <p className="login-head">Login</p>
          <h4 className="please">Please enter your e-mail id and Password</h4>

          <TextField id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            error={errors.email && touched.email}
            helperText={errors.email && touched.email && errors.email}
            placeholder="Enter your Email" />


          <TextField id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            autoComplete="current-password"
            error={errors.password && touched.password}
            helperText={errors.password && touched.password && errors.password}
            placeholder="Enter your Password" />

          <Button variant="outlined" type="submit">log in</Button>


        </form>
        <div className='signup-link'>
          <p className="please">Don't have an account ?</p>
          <p onClick={() => history.push("/signup")} className="signup-word">SIGN UP</p>
        </div>
        <div>
          <p className="please">Sample Credentials</p>
          <p>Email: test@gmail.com</p>
          <p>Password: password123@</p>

        </div>
      </div>
    </section>
  );
}
export function SignupPage() {
  const history = useHistory();
  const formvalidationschema = yup.object({
    email: yup.string().min(5, "need a bigger email").required(),
    password: yup.string().min(5).max(12).required(),
  });

  const { handleSubmit, values, handleChange, handleBlur, errors, touched } = useFormik({
    initialValues: { email: "", password: "" },
    validationSchema: formvalidationschema,

    onSubmit: (newSignup) => {
      console.log("onsubmit", newSignup);
      addData(newSignup);
    }
  });
  const addData = (newSignup) => {
    console.log(newSignup);
    fetch(`${API_URL}/signup`, {
      method: "POST",
      body: JSON.stringify(newSignup),
      headers: { 'Content-Type': 'application/json' },
    }).then((response) => {
      if (response.status === 400) {
        history.push("/signupfailed");
      } else {
        alert('signup Successful');
        history.push("/");
      }
      // console.log(response.status));
    });
  };
  return (
    <section className='login-page-background-signup'>
      <form className="login-page" onSubmit={handleSubmit}>
        <div className="login-page">
          <p className="login-head">sign up</p>
          <h4 className="please">Please enter your e-mail id and Password</h4>
          <TextField id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            type="email"
            error={errors.email && touched.email}
            helperText={errors.email && touched.email && errors.email}
            placeholder="Enter your Email" />

          <TextField id="password"
            name="password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            type="password"
            autoComplete="current-password"
            error={errors.password && touched.password}
            helperText={errors.password && touched.password && errors.password}
            placeholder="Enter your Password" />
          <Button variant="contained" type="submit">sign up</Button>
          <div className='signup-link'>
          <p className="please">Already Registered ?</p>
          <p onClick={() => history.push("/")} className="signup-word">Click here to login</p>
        </div>
        </div>
      </form>
    </section>
  );
}
export function LoginSuccess() {
  return (
    <div>
      <img className="success" src="https://tse4.mm.bing.net/th?id=OIP.kPQ0PJHdeZL0H9HLZfbsGQAAAA&pid=Api&P=0&w=214&h=177" alt="Login success" />
      <h2>Successfully logged in</h2>
    </div>
  );
}
export function LoginFailed() {
  return (
    <div>
      <img className="failed" src="https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-27.jpg" alt="Login failed" />
      <h2>Invalid Credentials</h2>
    </div>
  );
}
export function SignupSuccess() {
  return (
    <div>
      <img className="success" src="https://tse4.mm.bing.net/th?id=OIP.kPQ0PJHdeZL0H9HLZfbsGQAAAA&pid=Api&P=0&w=214&h=177" alt="signup success" />
      <h2>Successfully signed up</h2>
    </div>
  );
}
export function SignupFailed() {
  return (
    <div>
      <img className="failed" src="https://icon-library.com/images/red-cross-icon-png/red-cross-icon-png-27.jpg" alt="signup failed" />
      <h2>email already exists or password must be longer</h2>
    </div>
  );
}
