"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Desktop from "./wordAnimations/Desktop";
import Tablet from "./wordAnimations/Tablet";
import Mobile from "./wordAnimations/Mobile";
import { useAnimation, useInView, motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

const GetReady = () => {
  const { executeRecaptcha } =  useGoogleReCaptcha();

  const [onFocus, setOnFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const GetReadyRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(GetReadyRef, { once: false });

  const handleSubscribe = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const token = executeRecaptcha && await executeRecaptcha('newsletter_subscribe');
    if (!token) {
      toast.error(
        "We've detected a bot-like behavior. Please try again later."
      );
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (email.length === 0 || !emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        "/api/subscribe",
        {
          email,
          attributes: {
            IS_PROVIDER: "Yes", // valid value: 'Yes' or 'No', 'Yes' for Genies
            OPT_IN: true,
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      if (response) {
        toast.success("You've been subscribed!");
        setEmail("");
      }
    } catch (error: any) {
      toast.error("An error occurred. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isInView) {
      mainControls.start("visible");
    } else {
      mainControls.start("hidden");
    }
  }, [isInView, mainControls]);

  return (
    <div
      className="w-full mt-[4rem] sm:mt-0 min-h-[55vh] md:mt-20 md:min-h-[50vh] lg:h-screen  relative flex items-center justify-center flex-col gap-8 "
      id="join"
    >
      <Toaster
        position="top-right"
        toastOptions={{ duration: 5000 }}
        reverseOrder={false}
      />
      <img
        src="/assets/genie/wave.png"
        alt="wave"
        className="w-[110%] top-[20%] sm:top-[0%] left-0 absolute"
      />

      {/* for desktop */}
      <Desktop />

      {/* for tablet */}
      <Tablet />

      {/* for mobile */}
      <Mobile />

      <motion.form
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        onClick={(e) => handleSubscribe(e)}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeIn" }}
        className={`w-[95%]  md:w-[549px] lg:w-[458px] h-[56px] flex items-center justify-between border-2 pl-4 py-1 pr-1 rounded-[2rem] ps-slim mt-[1rem] sm:mt-0 ${
          onFocus ? "border-[#111928]" : "border-[#D1D5DB]"
        }`}
        ref={GetReadyRef}
      >
        <input
          type="email"
          name="newsletter"
          id="newsletter"
          required
          placeholder="Enter Email ID"
          className="w-[80%] h-full outline-none border-none"
          onFocus={() => setOnFocus(true)}
          onBlur={() => setOnFocus(false)}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          className={`  flex items-center justify-center  gap-1 text-white w-[97px] h-[40px] group text-sm rounded-full ps-slim cursor-pointer mr-1 bg-[#111928] `}
        >
          {loading ? (
            <div className="flex items-center gap-1">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              <p>Submit</p>
              <div
                className={`relative ml-1 mt-[.3rem] h-5 w-5 overflow-hidden text-white`}
              >
                <div className="absolute transition-all duration-200 group-hover:-translate-y-[14px] group-hover:translate-x-3">
                  <ArrowUpRight className="h-4 w-4" />
                  <ArrowUpRight className="h-4 w-4 -translate-x-3 -translate-y-0.5" />
                </div>
              </div>{" "}
            </>
          )}
        </button>
      </motion.form>

      <motion.div
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1 },
        }}
        initial="hidden"
        animate={mainControls}
        transition={{ duration: 0.3, delay: 0.8, ease: "easeIn" }}
        className="w-[95%] sm:w-[700px]   flex items-start sm:items-center justify-between gap-5 cursor-pointer"
      >
        <p className="ps-slim text-sm text-center sm:text-[1rem] leading-5 w-[693px]">
          By submitting this form you agree to receive Servgenie newsletters and
          accept that the email you provided will be used in accordance with the
          following privacy Policy.
        </p>
      </motion.div>
    </div>
  );
};

export default GetReady;
