import { Link } from "react-router-dom";


const Home = () => {

    return (
        <div className="text-center">
            <div> <h1 className="text-5xl font-bold text-green-500 text-center mt-20">This is Home Pages</h1>

                <Link to='/Login'><button className="text-xl font-bold mt-10 ">Login</button></Link></div>

            
        </div>
    );
};

export default Home;