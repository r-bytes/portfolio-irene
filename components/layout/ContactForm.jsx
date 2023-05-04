import { useRef, useState } from "react"
import ReCAPTCHA from "react-google-recaptcha"
import { useForm } from "react-hook-form"

const ContactForm = ({ onSave }) => {
    const { register, handleSubmit, formState: { errors } } = useForm()
    const formRef = useRef()
    const [captchaDone, setCaptchaDone] = useState()
    // const captchaRef = useRef()
    // console.log("initial ref", captchaRef)

    const captchaStyle = captchaDone ?
        "px-4 py-2.5 bg-button text-primary uppercase font-semibold text-xs tracking-wider place-self-end transform transition-transform hover:scale-105 duration-500" :
        "cursor-not-allowed bg-button px-4 py-2.5 text-primary uppercase font-semibold text-xs tracking-wider place-self-end"

    const key = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
    const handleSave = (formData) => {
        onSave(formData)
    }

    const onChange = () => {
        console.log("ref", captchaRef)
        setCaptchaDone(true)
        console.log(captchaDone)
    }

    return (
        <form
            ref={formRef}
            onSubmit={handleSubmit(handleSave)}
            className="w-5/6 md:w-2/3 flex flex-col mx-auto justify-center order-2 md:order-1"
        >

            <label className="block mb-5" htmlFor="name">
                <span className="text-primary text-xs font-bold tracking-wider ml-1"> Name </span><span className="text-xs"> (verplicht) </span>
                <input
                    {...register(
                        "name", {
                            required: true
                        }
                    )}
                    className="text-primary border rounded py-2 px-3 form-input mt-1 block w-full outline-none ring-[#f6bf5a] focus:ring"
                    id="name"
                    name="name"
                    type="text"
                    // ref={}
                />
            </label>

            <label className="block mb-5" htmlFor="email">
                <span className="text-primary text-xs font-bold tracking-wider ml-1"> E-mailadres </span><span className="text-xs"> (verplicht) </span>
                <input
                    {...register(
                        "email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "invalid email address"
                            }
                        }
                    )}
                    className="text-primary border rounded py-2 px-3 form-input mt-1 block w-full outline-none ring-[#f6bf5a] focus:ring"
                    // id="email"
                    name="email"
                    type="text"
                />
            </label>

            <label className="block mb-5" htmlFor="message">
                <span className="text-primary text-xs font-bold tracking-wider ml-1"> Bericht </span><span className="text-xs"> (verplicht) </span>
                <textarea
                    {...register(
                        "message", {
                            required: true
                        }
                    )}
                    className="text-primary border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none ring-[#f6bf5a] focus:ring"
                    id="message"
                    name="message"
                    rows={10}
                />
            </label>
            <hr />
            <ReCAPTCHA
                // sitekey={key}
                sitekey={"6LcDaOAlAAAAAK2zIUX7CD8pK5Vyh_aPrsXPCLfM"}
                onChange={onChange}
            />

            {/* errors when field validation fails */}
            <div className="flex flex-col p-5">
                {errors.name && (
                    <span className="text-red-500"> - Name field is required </span>
                )}
                {errors.email && (
                    <span className="text-red-500"> - Email field is required </span>
                )}
                {errors.comment && (
                    <span className="text-red-500"> - Message field is required </span>
                )}
            </div>
            <div className="flex justify-center lg:justify-end">
                <button disabled={!captchaDone} className={captchaStyle} type="submit"> Verzenden </button>
            </div> 
        </form>
    )
}
export default ContactForm