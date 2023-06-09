/* Component Purpose: The form section of the main page.

   Form created using react-hook-form

    Emails sent via emailjs API. 200 emails/month for free. 
    Set up a template on their platform. Template changeable.

    https://dashboard.emailjs.com/admin/templates
*/

import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import emailjs from 'emailjs-com';

function contactMeForm() {
    const { register, handleSubmit } = useForm();
    const sendEmail = (data) => {
        // Your emailjs configuration
        const serviceId = 'service_fase5lb';
        const templateId = 'template_we8xlyd';
        const userId = 'KfBEPisbYxhFBa_w2';

        const templateParams = {
            from_name: data.firstName + " " + data.lastName,
            message_type: "test",
            message: data.content,
            contact_info: data.email,
            reply_to: data.email,
        };

        console.log(templateParams);
        emailjs.send(serviceId, templateId, templateParams, userId)
        .then((response) => {
          console.log('Email sent successfully!', response.text);
          alert("Email sent successfuly!");
        })
        .catch((error) => {
          console.error('Error sending email:', error);
        });
    };

    return (
        <div className="max-w-md mx-auto">
            <h1 className="text-2xl xl:text-3xl bg-clip-text text-white pt-2 text-center font-mono pb-10">
                Contact Me
            </h1>
            <form
                onSubmit={handleSubmit((data) => sendEmail(data))}
                className="bg-black shadow-md rounded px-8 pt-6 pb-8 mb-4"
            >
            <div className="mb-4">
                <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="firstName"
                >
                    First Name
                </label>
                <input
                    {...register("firstName")}
                    type="text"
                    id="firstName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="First Name"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="lastName"
                >
                    Last Name
                </label>
                <input
                    {...register("lastName")}
                    type="text"
                    id="lastName"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Last Name"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="email"
                >
                    Email
                </label>
                <input
                    {...register("email")}
                    type="email"
                    id="email"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Email"
                />
            </div>

            <div className="mb-4">
                <label
                    className="block text-white text-sm font-bold mb-2"
                    htmlFor="content"
                >
                    How may I help?
                </label>
                <textarea
                    {...register("content")}
                    id="content"
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Enter your message"
                ></textarea>
            </div>

            <div className="flex justify-center">
                <input
                    type="submit"
                    className="bg-yellow-400 hover:bg-yellow-200 text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:cursor-pointer"
                    value="Submit"
                />
            </div>
        </form>
        </div>
    )
}

export default contactMeForm;