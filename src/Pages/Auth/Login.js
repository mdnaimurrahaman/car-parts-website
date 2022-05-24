import React, { useEffect } from "react";
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword, useSignInWithGoogle } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import { useForm } from "react-hook-form";
import Loading from "../Shared/Loading";
import { Link, useLocation, useNavigate } from "react-router-dom";
import useToken from "../Hooks/useToken";
import { toast } from "react-toastify";

const Login = () => {
  const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const [
    signInWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useSignInWithEmailAndPassword(auth);


// jwt token hooks
const [token] = useToken(user || gUser)

  const navigate = useNavigate();
  const location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(()=>{
    if (token) {
      navigate(from, {replace: true});
      toast.success('Login success')
    }
  },[token, navigate, from])

  
  if(loading || gLoading){
      return <Loading></Loading>
  }

  let signInError;

  if(error || gError){
      signInError = <p className="text-red-500">{error?.message || gError?.message}</p>
  }



  const onSubmit = (data) => {
    console.log(data);
    signInWithEmailAndPassword(data.email, data.password)
  };

  return (
    <div className="flex h-screen justify-center items-center">
      <div className="login-container">
        <div className="">
          <h2 className="login-title">Login</h2>
          <form onSubmit={handleSubmit(onSubmit)}>

            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
               className="input input-bordered w-full max-w-xs"
                {...register("email",{
                    required:{
                        value: true,
                        message: 'Email is Required',
                    },
                    pattern: {
                      value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                      message: 'Provide a valid Email' 
                    }
                  })}
              />
              <label className="label">
              {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
              </label>
            </div>
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="Your password"
               className="input input-bordered w-full max-w-xs"
                {...register("password",{
                    required:{
                        value: true,
                        message: 'password is Required',
                    },
                    minLength: {
                      value: 6,
                      message: 'Must be six characters or longer' 
                    }
                  })}
              />
              <label className="label">
              {errors.password?.type === 'required' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              {errors.password?.type === 'minLength' && <span className="label-text-alt text-red-500">{errors.password.message}</span>}
              </label>
            </div>
            {signInError}
            <input className="btn btn-ghost w-full max-w-xs" type="submit" value="Login" />
          </form>
          
          <p className=" text-center"><small>Forget password?<Link className="text-primary" to=""> Reset password</Link></small></p>
          
          <div className="divider">OR</div>
          <button onClick={() => signInWithGoogle()} className="btn btn-outline">
            Continue With Google
          </button>
          <p className="mt-5 text-center"><small>New to Motion Car Parts? <Link className="text-primary" to="/signUp">Create New Account</Link></small></p>
        </div>
      </div>
    </div>
  );
};

export default Login;
