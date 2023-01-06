import { Button, PageBanner } from "@components/index";
import emailjs from '@emailjs/browser';
import React, { useRef } from "react"
import { useForm } from "react-hook-form"
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { sanityClient } from "sanity";


/* eslint-disable react/no-unescaped-entities */
const ContactPage = ({ bannerContent }) => {
    const formRef = useRef()
    const { register, handleSubmit, formState: {errors} } = useForm()
    // const nameRef = useRef()
    // const emailRef = useRef()
    // const messageRef = useRef()

    const onSubmit = () => {
        setSubmitted(true)
        
        emailjs.sendForm(`${process.env.NEXT_PUBLIC_SID}`, `${process.env.NEXT_PUBLIC_TID}`, formRef.current, `${process.env.NEXT_PUBLIC_PKEY}`)
            .then((result) => {
                console.log(result.text);
            }, (error) => {
            console.log(error.text);
        });
    }
    const { title, subtitle } = bannerContent

    return (
        <>
            <PageBanner
                title={title}
                subtitle={subtitle}
            />
            <div className="flex flex-col md:flex-row justify-between items-start p-10 space-x-20 max-w-7xl mx-auto">
                <form
                    ref={formRef}
                    onSubmit={handleSubmit(onSubmit)}
                    className="w-5/6 md:w-2/3 flex flex-col mx-auto justify-center order-2 md:order-1"
                    // className="mx-4 md:mx-auto rounded flex flex-col p-5 max-w-4xl md:max-w-4xl lg:max-w-5xl xl:max-w-7xl bg-secondary backdrop-blur-3xl shadow-2xl px-12 py-24 mb-24"
                >

                    <label className="block mb-5" htmlFor="name">
                        <span className="text-primary text-xs font-bold tracking-wider ml-1"> Name </span><span className="text-xs"> (verplicht) </span>
                        <input
                            {...register("name", {required: true})}
                            className="text-secondary shadow-lg border rounded py-2 px-3 form-input mt-1 block w-full outline-none ring-[#f6bf5a] focus:ring"
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
                            className="text-secondary shadow-lg border rounded py-2 px-3 form-input mt-1 block w-full outline-none ring-[#f6bf5a] focus:ring"
                            id="email"
                            type="text"
                            placeholder="a@wonderland.com"
                        />
                    </label>

                    <label className="block mb-5" htmlFor="message">
                        <span className="text-primary text-xs font-bold tracking-wider ml-1"> Bericht </span><span className="text-xs"> (verplicht) </span>
                        <textarea
                            {...register("comment", {required: true})}
                            className="text-secondary shadow-lg border rounded py-2 px-3 form-textarea mt-1 block w-full outline-none ring-[#f6bf5a] focus:ring"
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
                    <div className="flex justify-end">
                        <Button text={"Verzenden"} primaryFlex />
                    </div>
                </form>
                <div className="hidden md:flex md:flex-col text-primary order-1 md:order-2">
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

export const getServerSideProps = async () => {
    const queryBanner = `
        *[_type == "pageBanner" && title == "Contact"][0]
    `;
    
    const bannerContent = await sanityClient.fetch(queryBanner)
    
    return {
        props: {
            bannerContent
        }
    };
};