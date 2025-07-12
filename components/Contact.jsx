import React, { useState } from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import { GithubOutlined, LinkedinOutlined, MailOutlined } from "@ant-design/icons";
import { SOCIAL_LINKS, PERSONAL_INFO } from '../constants';

const SocialLink = ({ href, icon: Icon }) => (
  <a href={href}>
    <div className="rounded-full border border-gray-400 p-2 sm:p-3 cursor-pointer hover:scale-105 ease-in duration-300">
      <Icon className="text-lg sm:text-xl" />
    </div>
  </a>
);

const SOCIAL_ICONS = [
  { href: SOCIAL_LINKS.linkedin, icon: LinkedinOutlined },
  { href: SOCIAL_LINKS.github, icon: GithubOutlined },
  { href: SOCIAL_LINKS.email, icon: MailOutlined },
];

const FORM_FIELDS = [
  { label: "Name", name: "name" },
  { label: "Phone Number", name: "phone" },
  { label: "Email", type: "email", name: "email" },
  { label: "Subject", name: "subject" },
  { label: "Message", rows: "6", name: "message" },
];

const Contact = () => {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setForm({ name: '', phone: '', email: '', subject: '', message: '' });
  };

  return (
    <div id="contact" className="w-full min-h-screen bg-gray-100 dark:bg-gray-900 text-black dark:text-white">
      <div className="max-w-[1240px] mx-auto p-4 sm:p-8">
        <p className="text-lg sm:text-xl tracking-widest uppercase text-[#5651e5] text-center">Contact</p>
        <h2 className="py-4 text-2xl sm:text-3xl lg:text-4xl text-center font-bold">Get In Touch</h2>
        <div className="grid lg:grid-cols-5 gap-6 sm:gap-8">
          <div className="col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-800 rounded-xl p-4 sm:p-6">
            <div className="lg:p-4 h-full rounded-xl">
              <div>
                <img
                  className="rounded-xl hover:scale-105 ease-in duration-300 w-full h-48 sm:h-64 object-cover"
                  src="https://images.pexels.com/photos/1181248/pexels-photo-1181248.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="Contact"
                />
              </div>
              <div>
                <h2 className="py-2 text-xl sm:text-2xl">{PERSONAL_INFO.name}</h2>
                <p className="text-sm sm:text-base">{PERSONAL_INFO.role}</p>
                <p className="py-4 text-sm sm:text-base">
                  I am available for freelance or full-time positions. Contact me and let's talk.
                </p>
              </div>
              <div>
                <p className="uppercase pt-8 text-sm sm:text-base">Connect With Me</p>
                <div className="flex items-center justify-center gap-4 py-4">
                  {SOCIAL_ICONS.map((social, index) => (
                    <SocialLink key={index} {...social} />
                  ))}
                </div>
                <div className="w-full flex flex-col items-center mt-2">
                  <div className="h-1 w-20 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 rounded-full opacity-60 mb-1"></div>
                  <p className="text-gray-400 text-xs italic text-center">Always open to new opportunities and collaborations!</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-3 w-full h-auto shadow-xl shadow-gray-800 rounded-xl lg:p-4">
            <div className="p-4 sm:p-6">
              {submitted ? (
                <div className="text-center py-12">
                  <p className="text-xl text-green-600 font-semibold mb-2">Thank you for your message!</p>
                  <p className="text-gray-500">I'll get back to you as soon as possible.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="grid md:grid-cols-2 gap-4 w-full py-4 sm:py-6">
                    <div className="flex flex-col py-2">
                      <label className="uppercase text-sm py-2">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        className="border-2 rounded-lg p-2 sm:p-3 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                        required
                      />
                    </div>
                    <div className="flex flex-col py-2">
                      <label className="uppercase text-sm py-2">Phone Number</label>
                      <input
                        type="text"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        className="border-2 rounded-lg p-2 sm:p-3 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="border-2 rounded-lg p-2 sm:p-3 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Subject</label>
                    <input
                      type="text"
                      name="subject"
                      value={form.subject}
                      onChange={handleChange}
                      className="border-2 rounded-lg p-2 sm:p-3 border-gray-300 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                    />
                  </div>
                  <div className="flex flex-col py-2">
                    <label className="uppercase text-sm py-2">Message</label>
                    <textarea
                      name="message"
                      rows={6}
                      value={form.message}
                      onChange={handleChange}
                      className="border-2 rounded-lg border-gray-300 p-2 sm:p-3 bg-transparent focus:outline-none focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <button className="w-full p-3 sm:p-4 text-gray-100 bg-blue-600 hover:bg-blue-700 rounded-lg mt-4 text-sm sm:text-base font-medium transition duration-300">
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
        <div className="flex justify-center py-4 sm:py-6">
          <a href="/">
            <div className="rounded-full p-3 sm:p-4 cursor-pointer hover:scale-110 ease-in duration-300">
              <HiOutlineChevronDoubleUp className="text-[#5651e5] text-2xl sm:text-3xl" />
            </div>
          </a>
        </div>
        <div className="w-full flex flex-col items-center mt-4">
          <div className="h-1 w-32 bg-gradient-to-r from-blue-500 via-purple-400 to-pink-400 rounded-full opacity-60 mb-2"></div>
          <p className="text-gray-500 text-sm italic">Thank you for visiting! Let’s connect and build something amazing together.</p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
