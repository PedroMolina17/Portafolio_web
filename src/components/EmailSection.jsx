"use client";
import React, { useState } from "react";
import GithubIcon from "../../public/images/github.png";
import LinkedinIcon from "../../public/images/linkedin-i.png";
import Link from "next/link";
import Image from "next/image";

const EmailSection = () => {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endpoint = "/api/send ";
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };
    const response = await fetch(endpoint, options);
    const resData = await response.json();

    if (response.status === 200) {
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12  md:my-36 lg:my-44 py-24  gap-4 relative ">
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#fadc84] to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div>
        <h5 className="text-xl font-bold text-white my-2">Let's Connect</h5>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          className=I' mb—4 I 'm currently looking for new opportunities, my
          inbox is al Whether you have a question or just want to say hi, 1'11
          try my best to get back to you{" "}
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/PedroMolina17">
            <Image src={GithubIcon} alt="Github Icon " />
          </Link>

          <Link href="https://www.linkedin.com/in/pedro-molina-noa-a18aa91b9/">
            <Image src={LinkedinIcon} alt="Linkedin Icon " />
          </Link>
        </div>
      </div>
      {emailSubmitted ? (
        <p className="text-green-500 text-sm mt-2">Email sent successfully!</p>
      ) : (
        <form className="flex flex-col " onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="example@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Job offer"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            ></textarea>
          </div>
          <button
            type="submit"
            className="px-5 py-2.5 w-full  rounded-lg mr-4 font-medium bg-gradient-to-br  from-[#ffd452]   hover:from-[#ffd452]  hover:to-[#2e2b33] text-white"
          >
            Submit
          </button>
        </form>
      )}
    </section>
  );
};

export default EmailSection;
