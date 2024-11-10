import { createUserWithEmailAndPassword, sendEmailVerification } from "firebase/auth";
import { auth } from "../Firebase_init";
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";

const SingUp = () => {

  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const [showPasswrod, setShowPasswrod] = useState(false);
  const handelSingUp = (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    const terms = event.target.terms.checked;


    console.log(email, password, terms)
    // rest error messge
    setErrorMessage('');
    setSuccess('');

    if(!terms){
      setErrorMessage('Please accet out conditon')
      return;
    }

    if (password.length < 6) {
      setErrorMessage('Passwrod should be 6 character or logner');
      return;
    }
    const passwordRegex = /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{6,}$/;

    if (!passwordRegex.test(password)) {
      setErrorMessage('at lest user cash loer cash number ')
      return;
    }

    // create user with email & passwrod
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        console.log(result)
        setSuccess(true);

        // send the vrefation email addres

        sendEmailVerification(auth.currentUser)
        .then( () =>{
          console.log('email vrifaction send')
        })
      })
      .catch(error => {
        console.log('Error', error.message)
        setErrorMessage(error.message)
        setSuccess(false);
      })

  }
  return (
    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
      <h3 className="text-3xl font-bold text-center mt-10">Sing Up now!</h3>

      <form onSubmit={handelSingUp} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text">Email</span>
          </label>
          <input type="email" name="email" placeholder="email" className="input input-bordered" required />
        </div>
        <div className="form-control relative">
          <label className="label">
            <span className="label-text">Password</span>
          </label>
          <input type={showPasswrod ? 'text' : 'password'}
            name="password"
            placeholder="password"
            className="input input-bordered"
            required />

          <button
            onClick={() => setShowPasswrod(!showPasswrod)}
            className="btn btn-xs absolute right-2 top-12">
            {
              showPasswrod ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
            }
          </button>
          <label className="label">
            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
          </label>
        </div>

        <div className="form-control">
          <label className="label justify-start  cursor-pointer">
          <input type="checkbox" name="terms"  className="checkbox" />
            <span className="label-text ml-3">Accept our condition</span>
            
          </label>
        </div>
        <div className="form-control mt-6">
          <button className="btn btn-primary">Sing Up</button>
        </div>

      </form>
      {
        errorMessage && <p className="text-red-500 font-lg">{errorMessage}</p>
      }
      {
        success && <p className="text-green-500 font-bold text-lg">Successfully Sing Up</p>
      }
      <p className="m-2"> already have an account <Link to='/login'>Login</Link></p>
    </div>

  );
};

export default SingUp;