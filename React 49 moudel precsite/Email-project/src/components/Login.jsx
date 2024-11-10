import { sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../Firebase_init";
import { useRef, useState } from "react";
import { Link } from "react-router-dom";
const Login = () => {

  const [success, setSuccess] = useState(false)
  const [loginError, setLoginError] = useState('')
  const emailRef = useRef();

  const handelLogin=(event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email,password);

    // rest the passwrod
    setSuccess(false);
    setLoginError('')


    // login user here
    signInWithEmailAndPassword(auth, email, password)
    .then((result) =>{
      console.log(result.user)

      if(!result.user.emailVerified){
        setLoginError('Please vrey fide your email')
      }
      else{

        setSuccess(true)
      }
    })
    .catch(error =>{
      console.log('Error', error.message)
      setLoginError(error.message)
    })
  }
  const handelRestPasswrod =()=>{
    console.log('get me email address',emailRef.current.value)
    const email = emailRef.current.value;
    if(!email){
      console.log('please provide good one')
    }
    else{
      sendPasswordResetEmail(auth,email)
      .then(() =>{
        alert("rest email send")
      })
      
    }
  }

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
          <p className="py-6">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
            quasi. In deleniti eaque aut repudiandae et a id nisi.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

          <form onSubmit={handelLogin} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name="email" ref={emailRef} placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>

              <input type="password" name="password" placeholder="password" className="input input-bordered" required />
              <label onClick={handelRestPasswrod} className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
          {
            success && <p className="text-green-400">User loging Successfully</p>
          }
          {
            loginError && <p className="text-red-600">{loginError}</p>
          }
          <p> new to here <Link to='/singUp'>singUp</Link></p>
        </div>
      </div>
    </div>
  );
};

export default Login;