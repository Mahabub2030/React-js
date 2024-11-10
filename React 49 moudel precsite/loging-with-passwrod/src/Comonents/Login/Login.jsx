import { signInWithPopup } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
import { auth } from "../Firebase/Fire";

const Login = () => {


  const handelGoogleProvier=()=>{

    const provider = new GoogleAuthProvider();

    signInWithPopup(auth, provider)
    .then((result) =>{
      console.log(result.user
      );
      
    })
    .catch(error =>{
      console.log('Error', error)
    })
    

  }
  return (
    <div>
      <h2 className="text-xl">login with google</h2>
      <button onClick={handelGoogleProvier}>loging</button>
    </div>
  );
};

export default Login;