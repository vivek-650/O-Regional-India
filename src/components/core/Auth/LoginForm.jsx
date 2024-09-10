import { useState } from "react"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useDispatch } from "react-redux"

// import { login } from "../../../services/operations/authAPI"
import { handleLogin } from "../../../services/operations/authFire"
// import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import '../../../styles/Form.css'

function LoginForm () { 
    // const navigate = useNavigate()
    // const dispatch = useDispatch()
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const { email, password } = formData

    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    const handleOnSubmit = (e) => {
        e.preventDefault()
        console.log(formData);
        handleLogin(formData)
        // dispatch(login(email, password, navigate))
    }

    return (

        <div className="main-form-container">
            <div className="bg-image-container">
                <img src="https://img.freepik.com/premium-photo/iconic-qutub-minar-standing-tall-against-white-backdrop_983420-32761.jpg" alt="" />
            </div>
        <form 
            onSubmit={handleOnSubmit} 
            className="form-body" 
            // mt-6 flex w-full flex-col gap-y-4
        >
            <label className="email-label">
                <p className="label-design">
                    Email Address <sup className="text-pink-200"> * </sup>
                </p>
                <input 
                    required
                    type="text"
                    name="email"
                    value={email}
                    onChange={handleOnChange}
                    placeholder = "Enter email address"
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18",
                    }}
                    className="input-box"
                />
            </label>

            <label className="password-label">
                <p className="label-design">
                    Password <sup className="text-pink-200"> * </sup>
                </p>
                <input
                    required
                    type={showPassword ? "text" : "password"}
                    name="password"
                    value={password}
                    onChange={handleOnChange}
                    placeholder="Enter Password"
                    style={{
                        boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18",
                    }}
                    className = "input-box"
                />
                <span 
                    onClick={() => setShowPassword((prev) => !prev)}
                    className="password-eye-icon"
                >
                    {
                        showPassword ? (
                            <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                        ) : (
                            <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                        )
                    }
                </span>
                <Link to="/forgot-password">
                    <p className="forget-password" style={{ color:'#000' }}>
                        Forgot Password?
                    </p>
                </Link>
            </label>

            <button className="SignIn-design">
                Sign In
            </button>
        </form>
        </div>
    )
}

export default LoginForm