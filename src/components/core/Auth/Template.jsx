import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux"
// import { toast } from "react-hot-toast";

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import '../../../styles/Login.css'

function Template({ title, description1, description2, image, formType }) {
    const { loading } = useSelector((state) => state.auth)

    return (
        <div className="">
            {/* {
                loading ? (
                    <div className=""></div>
                ) : ( */}
                    <div className="">
                        <div className="">
                            {/* <h1 className="Login-Title">
                                {title}
                            </h1> */}
                
                            {formType === "signup" ? <SignupForm /> : 
                            <LoginForm />
                            }

                            
                                
                                <p className="Or-design">
                                    OR
                                </p>
                                
                            

                            <button className="SignUp-button">
                                <FcGoogle />
                                <p>
                                    Sign Up With Google 
                                </p>
                            </button>
                        </div>

                       
                    </div>
                {/* )
            } */}
        </div>
    )
}

export default Template