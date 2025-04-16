import React from "react";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { GithubOutlined } from "@ant-design/icons";
import { LinkedinOutlined } from "@ant-design/icons";
import { MailOutlined } from "@ant-design/icons";
import { FilePdfOutlined } from "@ant-design/icons";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full lg:min-h-scree  bg-gray-100 dark:bg-gray-900 text-black dark:text-white"
    >
      <div className="max-w-[1240px] m-auto px-2 py-16 w-full">
        <p className="text-xl tracking-widest uppercase text-[#5651e5]">
          Contact
        </p>
        <h2 className="py-4">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-8 ">
          {/* {left} */}

          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 ">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                  src="https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="/"
                />
              </div>
              <div>
                <h2 className="py-2">Sagar Nawaz</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time postions. Contact me
                  and let's talk{" "}
                </p>
              </div>
            </div>
            <div>
              <p className="uppercase pt-8 ">Connect With Me</p>
              <div className="flex items-center justify-between py-2 ">
                <a href="https://www.linkedin.com/in/sagar-nawaz-12081223a/">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <LinkedinOutlined />
                  </div>
                </a>
                <a href="https://github.com/sagarnawaz">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <GithubOutlined />
                  </div>
                </a>
                <a href="mailto:sagarnawaz44@gmail.com">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-105 ease-in duration-300">
                    <MailOutlined />
                  </div>
                </a>

                <a href="https://drive.google.com/file/d/1nrWeAAGMx6n7aMEIPKDpaaO5Xp73Rzrh/view?usp=drive_link">
                  <div className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer hover:scale-110 ease-in duration-300">
                    <FilePdfOutlined />
                  </div>
                </a>
              </div>
            </div>
          </div>
          {/* {right} */}
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4">
            <div className="p-4">
              <form>
                <div className="grid md:grid-cols-2 gap-4 w-full py-12">
                  <div className="flex flex-col ">
                    <label className="uppercase text-sm py-2">Name</label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>

                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      Phone Number
                    </label>
                    <input
                      className="border-2 rounded-lg p-3 flex border-gray-300"
                      type="text"
                    />
                  </div>
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="email"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    className="border-2 rounded-lg p-3 flex border-gray-300"
                    type="text"
                    name=""
                    id=""
                  />
                </div>
                <div className="flex flex-col py-2">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    className="border-2 rounded-lg border-gray-300"
                    rows="16"
                  />
                </div>
                <button className="w-full p-4 text-gray-100 mt-4">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex justify-center py-12">
          <a href="/">
            <div className="rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5]" size={30} />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact;
