import React from "react";

function Contact() {
  const EMAIL = process.env.REACT_APP_EMAIL;
  const prefix = "mailto:";
  const emailLink = prefix + EMAIL;
  console.log(emailLink);
  return (
    <div className="min-h-screen w-full">
      <div className="flex justify-center pb-10">
        <h1 className="text-5xl ">Contact</h1>
      </div>

      <p className=" text-2xl flex justify-center p-10">
        Feel free to send me an email. Whether that be to talk about employment
        opportunities or to give me advice and critique my work.
      </p>
      <div className="flex justify-center p-10">
        <button className="btn btn-accent btn-lg rounded-md w-56 sm:w-96  ">
          <a href={emailLink}> Email me</a>
        </button>
      </div>
      <div className="flex justify-center">
        <p className="p-5">@ {EMAIL}</p>
      </div>
    </div>
  );
}

export default Contact;
