import { ContactForm, PageBanner } from "@components/index";
import emailjs from "@emailjs/browser";
import { router } from "next/router";
import React from "react";
import { useForm } from "react-hook-form";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { sanityClient } from "sanity";

/* eslint-disable react/no-unescaped-entities */
const ContactPage = ({ bannerContent }) => {
    const { title, description } = bannerContent;
    const { reset } = useForm();

    const handleSave = (formData) => {
        console.log("email send", { formData });

        emailjs
            .send(
                process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
                process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
                formData,
                process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
            )
            .then(
                (result) => {
                    console.log(result.text);
                },
                (error) => {
                    console.log(error.text);
                }
            );
        reset();
        router.push("/success");
    };

    return (
        <>
            <PageBanner title={title} description={description} />
            <div className="flex flex-col md:flex-row justify-between items-start p-10 space-x-20 max-w-7xl mx-auto">
                <ContactForm onSave={handleSave} />

                <div className="hidden md:flex md:flex-col text-primary order-1 md:order-2">
                    <h2 className="text-xl mb-2"> Details </h2>
                    <span className="block">
                        <MdOutlineEmail className="inline-block mr-2 text-accent" />
                        <h4 className="text-xs inline-block"> {process.env.NEXT_PUBLIC_EMAIL} </h4>
                    </span>
                    <span className="block">
                        <BsFillTelephoneFill className="inline-block mr-2 text-accent" />
                        <h4 className="text-xs inline-block"> {process.env.NEXT_PUBLIC_TELEPHONE} </h4>
                    </span>
                </div>
            </div>
        </>
    );
};
export default ContactPage;

export const getServerSideProps = async () => {
    const queryBanner = `
        *[_type == "pageBanner" && title == "Contact"][0]
    `;

    const bannerContent = await sanityClient.fetch(queryBanner);

    return {
        props: {
            bannerContent,
        },
    };
};
