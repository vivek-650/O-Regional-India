import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux"
// import { toast } from "react-hot-toast";

import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"
import { handleGoogleLogin } from "../../../services/operations/authFire";
import '../../../styles/Login.css'

import PropTypes from 'prop-types';

function Template({ formType }) {
    const { loading } = useSelector((state) => state.auth)

    return (
        <div className="">
            {
                loading ? (
                    <div className=""></div>
                ) : (
                    <div className="">
                        <div className="">
                
                            {formType === "signup" ? <SignupForm /> : 
                            <LoginForm />
                            }                          
                                
                                <p className="Or-design">
                                    OR
                                </p>
                                
                        
                            <button className="SignUp-button" onClick={handleGoogleLogin}>
                                <FcGoogle />
                                <p>
                                    Sign Up With Google 
                                </p>
                            </button>
                        </div>

                       
                    </div>
                )
            }
        </div>
    )
}

export default Template

Template.propTypes = {
  title: PropTypes.string.isRequired,
  description1: PropTypes.string,
  description2: PropTypes.string,
  image: PropTypes.string,
  formType: PropTypes.string.isRequired,
};