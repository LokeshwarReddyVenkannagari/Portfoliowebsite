import React, { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { contactDetails } from "../Details";
import { db } from "../firebase";
import { collection, addDoc } from "firebase/firestore";

function Contact() {
  const { email, phone } = contactDetails;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    try {
      await addDoc(collection(db, "formData"), data);
      alert("Data sent to Firebase");
      setIsSubmitting(false);
      reset();
    } catch (error) {
      alert("Error: " + error.message);
      setIsSubmitting(false);
    }
  };

  return (
    <main className="container mx-auto max-width section">
      <motion.h1
        className="text-center text-2xl md:text-3xl lg:text-6xl text-dark-heading dark:text-light-heading font-semibold md:font-bold"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        For any questions please drop a mail
      </motion.h1>
      <motion.h3
        className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-5 md:pt-10 md:pb-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.5 }}
      >
        <a
          href={`mailto:${email}`}
          className="hover:text-blue-500 transition duration-300"
        >
          {email}
        </a>
      </motion.h3>
      <motion.span
        className="text-center text-content text-xl font-light block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        or
      </motion.span>
      <motion.h3
        className="text-center text-3xl md:text-4xl lg:text-6xl text-gradient font-semibold md:font-bold pt-2 md:py-6"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        <a
          href={`tel:${phone}`}
          className="hover:text-blue-500 transition duration-300"
        >
          {phone}
        </a>
      </motion.h3>
      <motion.span
        className="text-center text-content text-xl font-light block"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1 }}
      >
        or
      </motion.span>
      <motion.form
        onSubmit={handleSubmit(onSubmit)}
        className="mt-10 md:mt-20"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 2 }}
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            {...register("name", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter Your name"
          />
          {errors.name && (
            <span className="text-red-500 text-xs italic">
              Name is required.
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            {...register("email", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter Your Email"
          />
          {errors.email && (
            <span className="text-red-500 text-xs italic">
              Email is required.
            </span>
          )}
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            {...register("message", { required: true })}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Write your message"
          />
          {errors.message && (
            <span className="text-red-500 text-xs italic">
              Message is required.
            </span>
          )}
        </div>
        <div className="flex items-center justify-between">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Submitting..." : "Send"}
          </button>
        </div>
      </motion.form>
    </main>
  );
}

export default Contact;
