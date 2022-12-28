import { Button } from "@components/index";
import emailjs from '@emailjs/browser';
import { useRef } from "react"
import { useForm } from "react-hook-form"
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";


/* eslint-disable react/no-unescaped-entities */
const ContactPage = () => {
    const formRef = useRef()
    const { register, handleSubmit, formState: {errors} } = useForm()
    // const nameRef = useRef()
    // const emailRef = useRef()
    // const messageRef = useRef()

    const onSubmit = (data) => {
        setSubmitted(true)
        
        emailjs.sendForm(`${process.env.NEXT_PUBLIC_SID}`, `${process.env.NEXT_PUBLIC_TID}`, formRef.current, `${process.env.NEXT_PUBLIC_PKEY}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
            console.log(error.text);
        });
    }

    return (
        <>
            <div className="min-h-48 flex-initial bg-secondaryAccent p-12 flex-col justify-center items-center text-center">
                <h1 className="text-4xl mb-4"> Contact </h1>
                <p className="px-10"> Kitty kitty ears back wide eyed head nudges or stand with legs in litter box, but poop outside pounce on unsuspecting person or always ensure to lay down in such </p>
                <p className="px-10"> a manner that tail can lightly brush human's nose, so sit in window and stare ooh, a bird, yum. </p>
            </div>
            {/* <form className="flex-1 h-56">
                <div className="flex">
                    <label htmlFor="name"> Name: </label>
                    <input className="bg-input" type="text" id="name" ref={nameRef} />
                </div>
                <div>
                    <label htmlFor="email"> E-mailadres: </label>
                    <input className="bg-input" type="text" id="email" ref={emailRef} />
                </div>
                <div>
                    <label htmlFor="message"> Bericht: </label>
                    <input className="bg-input" type="text" id="message" ref={messageRef} />
                </div>
            </form> */}
            <div className="flex p-10 space-x-20">
                <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-2/3"
                    // className="mx-4 md:mx-auto rounded flex flex-col p-5 max-w-4xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl bg-secondary backdrop-blur-3xl shadow-2xl px-12 py-24 mb-24"
                >

                    <label className="block mb-5" htmlFor="name">
                        <span className="text-primary text-xs font-bold tracking-wider ml-1"> Name </span><span className="text-xs"> (verplicht) </span>
                        <input
                            {...register("name", {required: true})}
                            className="text-secondary shadow-lg border rounded py-2 px-3 form-input mt-1 block w-full outline-none ring-[#7831c4] focus:ring"
                            id="name"
                            type="text"
                            placeholder="Alice Wonderland"
                        />
                    </label>

                    <label className="block mb-5" htmlFor="email">
                        <span className="text-primary text-xs font-bold tracking-wider ml-1"> E-mailadres </span><span className="text-xs"> (verplicht) </span>
                        <input
                            {...register("email", {
                                required: "Required",
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                    message: "invalid email address"
                                }}
                            )}
                            className="text-secondary shadow-lg border rounded py-2 px-3 form-input mt-1 block w-full outline-none ring-[#7831c4] focus:ring"
                            id="email"
                            type="text"
                            placeholder="a@wonderland.com"
                        />
                    </label>

                    <label className="block mb-5" htmlFor="message">
                        <span className="text-primary text-xs font-bold tracking-wider ml-1"> Bericht </span><span className="text-xs"> (verplicht) </span>
                        <textarea
                            {...register("comment", {required: true})}
                            className="text-secondary shadow-lg border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none ring-[#7831c4] focus:ring"
                            id="message"
                            rows={10}
                        />
                    </label>

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

                    <Button className="items-end" text={"Verzenden"} primary />
                    {/* <button
                        type="submit" 
                        className="shadow-lg hover:bg-button bg-primaryAccent focus:shadow-outline focus:outline-none text-primary text-xs font-bold py-2 px-4 rounded cursor-pointer"
                    > Verzenden
                    </button> */}
                </form>
                <div className="flex-col text-primary">
                    <h2 className="text-xl mb-2"> Details </h2>
                    <span className="block">
                        <MdOutlineEmail className="inline-block mr-2 text-accent" />
                            <h4 className="text-xs inline-block"> info@ireneberbee.nl </h4>
                    </span>
                    <span className="block">
                        <BsFillTelephoneFill className="inline-block mr-2 text-accent" />
                            <h4 className="text-xs inline-block"> +31 6 123 456 78 </h4>
                    </span>
                </div>
            </div>
        </>
    )
}
export default ContactPage