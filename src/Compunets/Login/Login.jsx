import { Link } from "react-router-dom";
import { GithubAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";
import app from "../../Firebase/Firebase.config";
import { useState } from "react";


const Login = () => {
    const [user, setUser] = useState(null)


    const auth = getAuth(app);
    const provider = new GithubAuthProvider();


    const handlerGithubLogin = () => {
        signInWithPopup(auth, provider)
            .then(result => {
                console.log('user--------', result.user)
                setUser(result.user)
            })
            .catch(error => {
                console.log(error)
            });
    };

    const handlerGithubLogOUt = () => {
        signOut(auth)
        .then(result =>{
            console.log(result)
            setUser(result)
        })
        .catch(error =>{
            console.log(error)
        })
    };


    return (
        <div className="text-center">
            <div className="text-center">
                <h1 className="text-5xl font-bold text-green-500 text-center mt-20">Please Login The Github</h1>
                <Link to='/'><button className="text-xl font-bold mt-10">Home</button></Link>
            </div>
            {user ? <div>
                    <button onClick={handlerGithubLogOUt} className="btn btn-ghost border-t-green-600 text-2xl font-bold mt-8 border-2 border-amber-600">Sign Out</button>
                    <h1>Name: {user.displayName}</h1>
                    <img src={user.photoURL} alt="" />
                </div> :
                <button onClick={handlerGithubLogin} className="btn btn-ghost border-t-green-600 text-2xl font-bold mt-8 border-2 border-amber-600">Github Login</button>
                
            }
        </div>
    );
};

export default Login;