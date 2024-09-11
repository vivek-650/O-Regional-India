import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import '../../../styles/Form.css'

// import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constant"
import Tab from "../../common/Tab"

import { handleRegister } from "../../../services/operations/authFire"

function SignupForm() {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    //student or instructor
    const [accountType, setAccountType] = useState(ACCOUNT_TYPE.TOURIST)
    
    const [formData, setFormData] = useState({
        name: "",
        email : "",
        password : "",
        confirmPassword : "",
        gender : "",
        city : "",
        address : "",
        contact : "",
        businessType : "",
        aadharNumber : "",
    })

    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    
    const { 
        name, 
        email, 
        password, 
        confirmPassword, 
        gender, 
        city, 
        address, 
        contact, 
        businessType,
        aadharNumber,
    } = formData

    //Handle input fields, when some value changes
    const handleOnChange = (e) => {
        setFormData((prevData) => ({
            ...prevData,
            [e.target.name]: e.target.value,
        }))
    }

    //Handle Form Submission
    const handleOnSubmit = (e) => {
        e.preventDefault()

        if(password !== confirmPassword) {
            toast.error("Passwords Do Not Match")
            return
        }
        const signupData = {
            ...formData,
            accountType,
        }

        console.log("SignupData:..",signupData);
        handleRegister(signupData, accountType, dispatch, navigate)

        // dispatch(setSignupData(signupData))

        //Reset 
        setFormData({
            name: "",
            email: "",
            password: "",
            confirmPassword: "",
            gender: "",
        })
        setAccountType(ACCOUNT_TYPE.TOURIST)
    }

    //data to pass to Tab component
    const tabData = [
        {
            id: 1, 
            tabName: "Tourist",
            type: ACCOUNT_TYPE.TOURIST,
        },
        {
            id: 2, 
            tabName: "Tour Guide",
            type: ACCOUNT_TYPE.TOURGUIDE,
        },
        {
            id: 3, 
            tabName: "Business",
            type: ACCOUNT_TYPE.BUSINESS,
        },
    ]

    return (
        <div className="main-form-container">

            {/* Tab */}
            <Tab tabData={tabData} field={accountType} setField={setAccountType} />
                
            {/* Form */}
            <div className="bg-image-container">
                <img src="https://img.freepik.com/premium-photo/iconic-qutub-minar-standing-tall-against-white-backdrop_983420-32761.jpg" alt="" />
            </div>
            <form 
            onSubmit={handleOnSubmit} 
            className="form-body">

                <div className="flex gap-x-4">
                    <label>
                        <p className="label-design">
                            Name <sup className="text-pink-200">*</sup>
                        </p>
                        <input 
                            required
                            type="text"
                            name="name"
                            value={name}
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                            style={{
                                boxShadow: "inset 0 -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="input-box"
                        />
                    </label>
                </div>
                <label className="w-full">
                    <p className="label-design">
                        Email Address <sup className="text-pink-200"> * </sup>
                    </p>
                    <input 
                        required
                        type="text"
                        name="email"
                        value={email}
                        onChange={handleOnChange}
                        placeholder="Enter Email Address"
                        style={{
                            boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                        }}
                        className="input-box"
                    />
                </label>
                <div className="flex gap-x-4">
                    <label className="password-label">
                        <p className="label-design">
                            Create Password <sup className="text-pink-200"> * </sup>
                        </p>
                        <input 
                            required
                            type={showPassword ? "text" : "password"}
                            name="password"
                            value={password}
                            onChange={handleOnChange}
                            placeholder="Enter Password"
                            style={{
                                boxShadow: "inset 0px 0px -1px rgba(255, 255, 255, 0.18)",
                            }}
                            className = "input-box"
                        />
                        <span 
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="password-eye-icon1"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                    <label className="password-label">
                        <p className="label-design">
                            Confirm Password <sup className="text-pink-200"> * </sup>
                        </p>
                        <input 
                            required
                            type={showConfirmPassword ? "text" : "password"}
                            name="confirmPassword"
                            value={confirmPassword}
                            onChange={handleOnChange}
                            placeholder="Confirm Password"
                            style={{
                                boxShadow: "inset 0px -1px 0px rgba(255, 255, 255, 0.18)",
                            }}
                            className="input-box"
                        />
                        <span 
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="password-eye-icon2"
                        >
                            {showConfirmPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
            
                </div>
                <div>
                    <label>
                        <p className="label-design">
                            Gender <sup className="text-pink-200">*</sup>
                        </p>
                        <select 
                            required
                            name="gender"
                            value={gender}
                            onChange={handleOnChange}
                            className="input-box"
                        >
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </select>
                    </label>
                </div>

                {(accountType === ACCOUNT_TYPE.BUSINESS || accountType === ACCOUNT_TYPE.TOURGUIDE )&& 
                                               
                    <div className="main-form-lower-container">
                        <div className="bg-image-lower-container">
                <img src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.4XqhjVS1WB3oc5v_O1FLdQAAAA%26pid%3DApi&f=1&ipt=79efdc0ab44d2a19a66c44915be71891fc299789282cca65428ec49835be94e0&ipo=images" alt="" />
            </div>
                    <label>
                        <p className="label-design">
                            City <sup className="">*</sup>
                        </p>
                        <input 
                            required
                            type="text"
                            name="city"
                            value={city}
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                            className="input-box"
                        />
                    </label>

                    <label>
                        <p className="label-design">
                            Adddress <sup className="">*</sup>
                        </p>
                        <input 
                            required
                            type="text"
                            name="address"
                            value={address}
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                            className="input-box"
                        />
                    </label>

                    <label>
                        <p className="label-design">
                            Contact <sup className="">*</sup>
                        </p>
                        <input 
                            required
                            type="tel"
                            name="contact"
                            value={contact}
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                            className="input-box"
                        />
                    </label>
                    </div>    
                }

                {accountType === ACCOUNT_TYPE.BUSINESS &&
                <div className="">
                    <label>
                        <p className="label-design">
                            Business Type <sup className="">*</sup>
                        </p>
                        <select 
                            required
                            name="businessType"
                            value={businessType}
                            onChange={handleOnChange}
                            className="input-box"
                        >
                        <option value="">Choose Business</option>
                        <option value="food">Food</option>
                        <option value="handicraft">Handicrafts</option>
                        <option value="accomodation">Accomodation</option>
                        </select>
                    </label>
                </div>
                }

                {accountType === ACCOUNT_TYPE.TOURGUIDE &&
                    <div>
                        <label>
                        <p className="label-design">
                            Aadhar Card Number <sup className="">*</sup>
                        </p>
                        <input 
                            required
                            type="number"
                            name="aadharNumber"
                            value={aadharNumber}
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                            className="input-box"
                        />
                    </label>
                    </div>
                }              

                <button type="submit" className="create-button" >
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm