import { FcGoogle } from "react-icons/fc";
import { useSelector } from "react-redux"
// import { toast } from "react-hot-toast";

import frameImg from "../../../assets/Images/frame.png"
import LoginForm from "./LoginForm"
import SignupForm from "./SignupForm"

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
                            <h1 className="">
                                {title}
                            </h1>
                            <p className="">
                                <span className="">{description1}</span> {" "}
                                <span className="font-edu-sa font-bold italic text-blue-100">{description2}</span>
                            </p>
                            
                            {formType === "signup" ? <SignupForm /> : 
                            <LoginForm />
                            }

                            <div className="flex w-full items-center my-4 gap-x-2">
                                <div className="w-full h-[1px] bg-richblack-700"></div>
                                <p className="text-richblack-700 font-medium leading[1.375rem]">
                                    OR
                                </p>
                                <div className="w-full h-[1px] bg-richblack-700"></div>
                            </div>

                            <button className="w-full flex flex-row justify-center items-center rounded-[8px] font-medium text-richblack-100
                            border border-richblack-700 px-[12px] py-[8px] gap-x-2 mt-6">
                                <FcGoogle />
                                <p>
                                    Sign Up With Google 
                                </p>
                            </button>
                        </div>

                        <div className="relative mx-auto w-11/12 max-w-[450px] md:mx-0">
                            <img 
                                src={frameImg}
                                alt="Pattern"
                                width={558}
                                height={504}
                                lodaing="lazy"
                            />
                            <img 
                                src={image}
                                alt="Student"
                                width={558}
                                height={504}
                                loading="lazy"
                                className="absolute -top-4 right-4"
                            />
                        </div>
                    </div>
                {/* )
            } */}
        </div>
    )
}

export default Template