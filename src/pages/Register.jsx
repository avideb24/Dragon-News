import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";

const Register = () => {

    const {createUser} = useContext(AuthContext);

    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.currentTarget);

        const email = form.get('email');
        const password = form.get('password');

        createUser(email, password)
        .then(res => {
            console.log(res.user)
        })
        .catch(err => console.error(err))

    }

    return (
        <div className="mb-10">
            <NavBar></NavBar>
            <div className="mt-10 max-w-xl mx-auto bg-slate-300 p-10 rounded-md text-[#403F3F]">
                <h2 className="text-center text-3xl font-bold py-9 border-b-2 border-b-white">Register your account</h2>
                <form className="mt-10" onSubmit={handleRegister}>
                    <input className="w-full border-2 border-white p-2 rounded-md" type="text" name="name" placeholder="Enter your name" />
                    <input className="w-full border-2 border-white p-2 rounded-md my-4" type="text" name="photo" placeholder="Enter your photo URL" />
                    <input className="w-full border-2 border-white p-2 rounded-md" type="email" name="email" placeholder="Enter your email address" />
                    <input className="w-full border-2 border-white p-2 my-4 rounded-md" type="password" name="password" placeholder="Enter your password" />
                    <input type="submit" className="w-full text-white bg-[#403F3F] py-2 rounded-md" value="Register" />
                </form>
                <p className="text-center mt-6">Already Have An Account ? <Link className="font-bold text-blue-500" to='/login'>Login</Link></p>
            </div>
        </div>
    );
};

export default Register;