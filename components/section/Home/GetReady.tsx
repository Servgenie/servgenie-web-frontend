"use client";

import { ArrowUpRight } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import Desktop from "./wordAnimations/Desktop";
import Tablet from "./wordAnimations/Tablet";
import Mobile from "./wordAnimations/Mobile";
import { useAnimation, useInView, motion } from "framer-motion";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import { GoogleReCaptcha } from "react-google-recaptcha-v3";

const GetReady = () => {
  const [onFocus, setOnFocus] = useState(false);
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const GetReadyRef = useRef(null);
  const mainControls = useAnimation();
  const isInView = useInView(GetReadyRef, { once: false });

  const handleSubscribe = async (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email.length === 0) {
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address!");
      return;
    }

    setLoading(true);

    try {
      const contactListId = process.env.BREVO_CONTACT_LIST_ID;
      const response = await axios.post(
        "/api/subscribe",
        {
          email,
          attributes: {
            IS_PROVIDER: 'No', // valid value: 'Yes' or 'No', 'Yes' for Genies
            OPT_IN: true,
          },
          "emailBlacklisted": false,
          "smsBlacklisted": false,
          "listIds": [
            contactListId
          ],
          "updateEnabled": true
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setEmail("");
      toast.success(" Form Submitted Successfully!");
    } catch (error: any) {
      console.log(error.message);
      toast.error("Please try again!");
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
      <Toaster toastOptions={{ duration: 5000 }} position="top-right" reverseOrder={false} />
      <img
        src="/assets/wave.png"
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
        initial="hidden"
        animate={mainControls}
        onSubmit={(e)=>handleSubscribe(e)}
        transition={{ duration: 0.3, delay: 0.6, ease: "easeIn" }}
        className={`w-[95%]  md:w-[549px] lg:w-[458px] h-[56px] flex items-center justify-between border-2 pl-4 py-1 pr-1 rounded-[2rem] ps-slim mt-[1rem] sm:mt-0 ${onFocus ? "border-[#111928]" : "border-[#D1D5DB]"
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
          className={`flex items-center justify-center gap-1 text-white w-[97px] group h-[40px] text-sm rounded-full ps-slim cursor-pointer mr-1  bg-[#111928] `}>
          {loading ? (
            <div className="flex items-center gap-1">
              <div className="loader"></div>
            </div>
          ) : (
            <>
              <p>Submit</p>
              <div className={`relative ml-1 mt-[.3rem] h-5 w-5 overflow-hidden text-white`}>
                    <div className="absolute transition-all duration-200 group-hover:-translate-y-[14px] group-hover:translate-x-3">
                        <ArrowUpRight className="h-4 w-4" />
                        <ArrowUpRight className="h-4 w-4 -translate-x-3 -translate-y-0.5" />
                    </div>
                </div>                  </>
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
        <p className="ps-slim text-sm sm:text-[1rem] text-center leading-5 w-[693px]">
          By submitting this form you agree to receive Servgenie newsletters and accept that the email you provided will be used in accordance with the following Privacy Policy.
        </p>
        <div className="flex items-center border border-red-500 gap-2">
          <GoogleReCaptcha
            onVerify={token => {
            }}
          />

        </div>
      </motion.div>

    </div>
  );
};

export default GetReady;

/**
             <div className='w-full text-[2.1rem] leading-[41px] ps-medium hidden sm:hidden flex-col items-center justify-center ps-bulky'>
             <div className='flex text-center'>
                 <span>G</span>
                 <span>e</span>
                 <span>t&nbsp;</span>

                 <span>R</span>
                 <span>e</span>
                 <span>a</span>
                 <span>d</span>
                 <span>y&nbsp;</span>

                 <span>f</span>
                 <span>o</span>
                 <span>r</span>
             </div>



             <div className='flex'>
                 <span>
                     <img src="/assets/logo.svg" alt="logo" className='w-[25px]  mr-1' />
                 </span>
                 <span>e</span>
                 <span>r</span>
                 <span>v</span>
                 <span>g</span>
                 <span>e</span>
                 <span>n</span>
                 <span>i</span>
                 <span>e &nbsp;</span>

                 <span>S</span>
                 <span>e</span>
                 <span>r</span>
                 <span>v</span>
                 <span>i</span>
                 <span>c</span>
                 <span>e&nbsp;</span>
             </div>



             <div>
                 <span>M</span>
                 <span>a</span>
                 <span>g</span>
                 <span>i</span>
                 <span>c&nbsp;</span>

                 <span>i</span>
                 <span>s&nbsp;</span>

                 <span className='text-[#11192866]'>J</span>
                 <span className='text-[#11192866]'>u</span>
                 <span className='text-[#11192866]'>s</span>
                 <span className='text-[#11192866]'>t&nbsp;</span>

                 <span className='text-[#11192866]' >A</span>
                 <span className='text-[#11192866]' >r</span>
                 <span className='text-[#11192866]' >o</span>
                 <span className='text-[#11192866]' >n</span>
                 <span className='text-[#11192866]' >d</span>
             </div>

             <div className='text-[#11192866]'>
                 <span>t</span>
                 <span>h</span>
                 <span>e&nbsp;</span>

                 <span>C</span>
                 <span>o</span>
                 <span>r</span>
                 <span>n</span>
                 <span>e</span>
                 <span>r</span>
                 <span>!</span>
             </div>
         </div>
 */
