import { useState } from "react"
import { toast } from "react-hot-toast"
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
// import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"

// import { setSignupData } from "../../../slices/authSlice"
import { ACCOUNT_TYPE } from "../../../utils/constant"
import Tab from "../../common/Tab"

import { handleRegister } from "../../../services/operations/authFire"

function SignupForm() {
    const navigate = useNavigate()
    // const dispatch = useDispatch()

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
        handleRegister(signupData, accountType)

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
        <div>

            {/* Tab */}
            <Tab tabData={tabData} field={accountType} setField={setAccountType}/>
                
            {/* Form */}
            <form 
            onSubmit={handleOnSubmit} 
            className="flex w-full flex-col gap-y-4">

                <div className="flex gap-x-4">
                    <label>
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
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
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        />
                    </label>
                </div>
                <label className="w-full">
                    <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
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
                        className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                    />
                </label>
                <div className="flex gap-x-4">
                    <label className="relative">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
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
                            className = "w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
                        />
                        <span 
                            onClick={() => setShowPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
                        >
                            {showPassword ? (
                                <AiOutlineEyeInvisible fontSize={24} fill="#AFB2BF" />
                            ) : (
                                <AiOutlineEye fontSize={24} fill="#AFB2BF" />
                            )}
                        </span>
                    </label>
                    <label className="relative">
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
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
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] pr-10 text-richblack-5"
                        />
                        <span 
                            onClick={() => setShowConfirmPassword((prev) => !prev)}
                            className="absolute right-3 top-[38px] z-[10] cursor-pointer"
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
                        <p className="mb-1 text-[0.875rem] leading-[1.375rem] text-richblack-5">
                            Gender <sup className="text-pink-200">*</sup>
                        </p>
                        <select 
                            required
                            name="gender"
                            value={gender}
                            onChange={handleOnChange}
                            className="w-full rounded-[0.5rem] bg-richblack-800 p-[12px] text-richblack-5"
                        >
                        <option value="">Choose Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        </select>
                    </label>
                </div>

                {(accountType === ACCOUNT_TYPE.BUSINESS || accountType === ACCOUNT_TYPE.TOURGUIDE )&& 
                                               
                    <div className="">
                    <label>
                        <p className="">
                            City <sup className="">*</sup>
                        </p>
                        <input 
                            required
                            type="text"
                            name="city"
                            value={city}
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                            className=""
                        />
                    </label>

                    <label>
                        <p className="">
                            Adddress <sup className="">*</sup>
                        </p>
                        <input 
                            required
                            type="text"
                            name="address"
                            value={address}
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                            className=""
                        />
                    </label>

                    <label>
                        <p className="">
                            Contact <sup className="">*</sup>
                        </p>
                        <input 
                            required
                            type="tel"
                            name="contact"
                            value={contact}
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                            className=""
                        />
                    </label>
                    </div>    
                }

                {accountType === ACCOUNT_TYPE.BUSINESS &&
                <div className="">
                    <label>
                        <p className="">
                            Business Type <sup className="">*</sup>
                        </p>
                        <select 
                            required
                            name="businessType"
                            value={businessType}
                            onChange={handleOnChange}
                            className=""
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
                        <p className="">
                            Aadhar Card Number <sup className="">*</sup>
                        </p>
                        <input 
                            required
                            type="number"
                            name="aadharNumber"
                            value={aadharNumber}
                            onChange={handleOnChange}
                            placeholder="Enter Name"
                            className=""
                        />
                    </label>
                    </div>
                }              

                <button type="submit" className="" >
                    Create Account
                </button>
            </form>
        </div>
    )
}

export default SignupForm