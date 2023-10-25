"use client"
import React, { useState } from "react";
import { lazy, Suspense } from "react";

const Footer = lazy(() => import("./Footer"));

const Questions = () => {
  // Create separate state variables for each section
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);
  const [isOpen6, setIsOpen6] = useState(false);
  const [isOpen7, setIsOpen7] = useState(false);
  const [isOpen8, setIsOpen8] = useState(false);

  // Create separate toggle functions for each section
  const toggleQuestions1 = () => {
    setIsOpen1(!isOpen1);
  };
  const toggleQuestions2 = () => {
    setIsOpen2(!isOpen2);
  };
  const toggleQuestions3 = () => {
    setIsOpen3(!isOpen3);
  };
  const toggleQuestions4 = () => {
    setIsOpen4(!isOpen4);
  };
  const toggleQuestions5 = () => {
    setIsOpen5(!isOpen5);
  };
  const toggleQuestions6 = () => {
    setIsOpen6(!isOpen6);
  };
  const toggleQuestions7 = () => {
    setIsOpen7(!isOpen7);
  };
  const toggleQuestions8 = () => {
    setIsOpen8(!isOpen8);
  };

  return (
    <div className="flex flex-col justify-center text-center items-center py-10 sm:py-20 md:py-20 w-full bg-gradient-to-b from-primary via-primary2 to-primary">
      <div>
        <h1 className="text-2xl text-white sm:3xl sm:py-5 py-2">
          Frequently Asked Questions
        </h1>
      </div>

      {/* Section 1 */}
      <div>
        <button
          onClick={toggleQuestions1}
          className="flex flex-row justify-between bg-transparent w-[300px] md:w-[600px] sm:w-[500px] border font-semibold py-2 px-4 text-center items-center transition-transform duration-300 transform rotate-0 rounded-md mt-4 mb-2"
        >
          <span className="text-white">
            What is Image Compression, and Why is it Important for Websites?
          </span>
          <svg
            className={`w-5 mb-[3px] self-end transform ${
              isOpen1 ? "rotate-0" : "rotate-180"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`origin-top flex-wrap w-[300px] md:w-[600px] sm:w-[500px] rounded-md text-dimWhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform duration-300 transform ${
            isOpen1 ? "scale-y-100" : "scale-y-0 h-0"
          }`}
        >
          <div
            className="py-1 font-light"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p>
             Image compression is the process of reducing the file size of
              images while maintaining an acceptable level of quality. It&apos;s
              crucial for websites because smaller image files load faster,
              leading to improved user experience and SEO rankings.
              Faster-loading pages contribute positively to user satisfaction
              and search engine rankings.&apos;
            </p>
            <p>
              To optimize your website&apos;s performance, consider using an online
              image compressor tool like [imagecompressor.website].&apos;
            </p>
          </div>
        </div>
      </div>

      {/* Section 2 */}
      <div>
        <button
          onClick={toggleQuestions2}
          className="flex flex-row justify-between bg-transparent w-[300px] md:w-[600px] sm:w-[500px] border font-semibold py-2 px-4 text-center items-center transition-transform duration-300 transform rotate-0 rounded-md mb-2"
        >
          <span className="text-white">
            {" "}
            How Does Image Compression Affect Website Speed and SEO?
          </span>
          <svg
            className={`w-5 mb-[3px] self-end transform ${
              isOpen2 ? "rotate-0" : "rotate-180"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`origin-top flex-wrap w-[300px] md:w-[600px] sm:w-[500px] rounded-md text-dimWhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform duration-300 transform ${
            isOpen2 ? "scale-y-100" : "scale-y-0 h-0"
          }`}
        >
          <div
            className="py-1 font-light"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p>
              Image compression significantly impacts website speed and SEO.
              Compressed images reduce the page load time, which is a critical
              factor in Google&apos;s ranking algorithm. Faster websites not only
              rank higher but also retain visitors better, resulting in improved
              search engine visibility and user engagement.
            </p>
            <p>
              To enhance your website&apos;s speed and SEO, consider using an online
              image optimizer like imagecompressor.website.
            </p>
          </div>
        </div>
      </div>

      {/* Section 3 */}
      <div>
        <button
          onClick={toggleQuestions3}
          className="flex flex-row justify-between bg-transparent w-[300px] md:w-[600px] sm:w-[500px] border font-semibold py-2 px-4 text-center items-center transition-transform duration-300 transform rotate-0 rounded-md mb-2"
        >
          <span className="text-white">
            Can I Optimize Images Without Sacrificing Quality?
          </span>
          <svg
            className={`w-5 mb-[3px] self-end transform ${
              isOpen3 ? "rotate-0" : "rotate-180"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`origin-top flex-wrap w-[300px] md:w-[600px] sm:w-[500px] rounded-md text-dimWhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform duration-300 transform ${
            isOpen3 ? "scale-y-100" : "scale-y-0 h-0"
          }`}
        >
          <div
            className="py-1 font-light"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p>
              Yes, you can optimize images without a significant loss in
              quality. Modern compression techniques, like lossless compression
              and intelligent algorithms, ensure that image quality remains high
              while reducing file sizes. This allows you to maintain visual
              appeal while enhancing website performance.
            </p>
            <p>
              To achieve high-quality image optimization, consider using
              imagecompressor.website, a versatile image compression tool that
              allows you to control compression levels and compare compressed
              images.
            </p>
          </div>
        </div>
      </div>

      {/* Section 4 */}
      <div>
        <button
          onClick={toggleQuestions4}
          className="flex flex-row justify-between bg-transparent w-[300px] md:w-[600px] sm:w-[500px] border font-semibold py-2 px-4 text-center items-center transition-transform duration-300 transform rotate-0 rounded-md mb-2"
        >
          <span className="text-white">
            {" "}
            How Often Should I Update and Optimize Images on My Website?
          </span>
          <svg
            className={`w-5 mb-[3px] self-end transform ${
              isOpen4 ? "rotate-0" : "rotate-180"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`origin-top flex-wrap w-[300px] md:w-[600px] sm:w-[500px] rounded-md text-dimWhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform duration-300 transform ${
            isOpen4 ? "scale-y-100" : "scale-y-0 h-0"
          }`}
        >
          <div
            className="py-1 font-light"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p>
              Regularly updating and optimizing images is essential for
              maintaining a high-performance website. It&apos;s a good practice to
              optimize images whenever you add new content or make significant
              changes. Additionally, conduct periodic audits to ensure older
              images are still optimized to meet current standards, which can
              positively impact your SEO rankings over time.
            </p>
            <p>
              imagecompressor.website can help streamline the process of
              updating and optimizing images on your website.
            </p>
          </div>
        </div>
      </div>

      {/* Section 5 */}
      <div>
        <button
          onClick={toggleQuestions5}
          className="flex flex-row justify-between bg-transparent w-[300px] md:w-[600px] sm:w-[500px] border font-semibold py-2 px-4 text-center items-center transition-transform duration-300 transform rotate-0 rounded-md mb-2"
        >
          <span className="text-white">
            What is the Difference Between Lossless and Lossy Compression?
          </span>
          <svg
            className={`w-5 mb-[3px] self-end transform ${
              isOpen5 ? "rotate-0" : "rotate-180"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`origin-top flex-wrap w-[300px] md:w-[600px] sm:w-[500px] rounded-md text-dimWhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform duration-300 transform ${
            isOpen5 ? "scale-y-100" : "scale-y-0 h-0"
          }`}
        >
          <div
            className="py-1 font-light"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p>
              Lossless compression retains all the original data while reducing
              file size. It&apos;s used when preserving data integrity is critical,
              such as in text files or medical records. Lossy compression, on
              the other hand, reduces file size by discarding some data, often
              used for multimedia like images and audio, where some quality loss
              is acceptable.
            </p>
            <p>
              To choose the right compression method for your images, consider
              the specific requirements of your website and use
              imagecompressor.website to control compression levels effectively.
            </p>
          </div>
        </div>
      </div>

      {/* Section 6 */}
      <div>
        <button
          onClick={toggleQuestions6}
          className="flex flex-row justify-between bg-transparent w-[300px] md:w-[600px] sm:w-[500px] border font-semibold py-2 px-4 text-center items-center transition-transform duration-300 transform rotate-0 rounded-md mb-2"
        >
          <span className="text-white">
            How to Choose the Best Image Compression Tool for Your Website?
          </span>
          <svg
            className={`w-5 mb-[3px] self-end transform ${
              isOpen6 ? "rotate-0" : "rotate-180"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`origin-top flex-wrap w-[300px] md:w-[600px] sm:w-[500px] rounded-md text-dimWhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform duration-300 transform ${
            isOpen6 ? "scale-y-100" : "scale-y-0 h-0"
          }`}
        >
          <div
            className="py-1 font-light"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p>
              Choosing the best image compression tool for your website involves
              considering factors like compression quality, speed, and
              compatibility with your content management system (CMS). Evaluate
              available options and prioritize tools that offer a balance
              between image optimization and ease of use. Read user reviews and
              explore features to make an informed decision.
            </p>
            <p>
              imagecompressor.website tool is designed to meet these criteria,
              offering a user-friendly interface and advanced optimization
              capabilities.
            </p>
          </div>
        </div>
      </div>

      {/* Section 7 */}
      <div>
        <button
          onClick={toggleQuestions7}
          className="flex flex-row justify-between bg-transparent w-[300px] md:w-[600px] sm:w-[500px] border font-semibold py-2 px-4 text-center items-center transition-transform duration-300 transform rotate-0 rounded-md mb-2"
        >
          <span className="text-white">
            Bulk Image Compression vs. Individual Image Optimization: Which is
            Better?
          </span>
          <svg
            className={`w-5 mb-[3px] self-end transform ${
              isOpen7 ? "rotate-0" : "rotate-180"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`origin-top flex-wrap w-[300px] md:w-[600px] sm:w-[500px] rounded-md text-dimWhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform duration-300 transform ${
            isOpen7 ? "scale-y-100" : "scale-y-0 h-0"
          }`}
        >
          <div
            className="py-1 font-light"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p>
              Bulk image compression and individual image optimization each have
              their advantages. Bulk compression is efficient for processing
              multiple images at once, saving time. On the other hand,
              individual optimization allows for fine-tuning and customization
              for each image. To decide which approach is better for your
              website, assess your image management needs and consider a
              combination of both strategies.
            </p>
            <p>
              With imagecompressor.website, you can conveniently perform bulk
              image compression or optimize individual images based on your
              requirements.
            </p>
          </div>
        </div>
      </div>

      {/* Section 8 */}
      <div>
        <button
          onClick={toggleQuestions8}
          className="flex flex-row justify-between bg-transparent w-[300px] md:w-[600px] sm:w-[500px] border font-semibold py-2 px-4 text-center items-center transition-transform duration-300 transform rotate-0 rounded-md mb-2"
        >
          <span className="text-white">
            The Impact of Image Compression on Mobile Website Performance
          </span>
          <svg
            className={`w-5 mb-[3px] self-end transform ${
              isOpen8 ? "rotate-0" : "rotate-180"
            }`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="white"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l3 3a1 1 0 01-1.414 1.414L10 7.414l-2.293 2.293a1 1 0 01-1.414-1.414l3-3a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </button>
        <div
          className={`origin-top flex-wrap w-[300px] md:w-[600px] sm:w-[500px] rounded-md text-dimWhite shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none transition-transform duration-300 transform ${
            isOpen8 ? "scale-y-100" : "scale-y-0 h-0"
          }`}
        >
          <div
            className="py-1 font-light"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="options-menu"
          >
            <p>
              Mobile website performance is critical for user satisfaction and
              SEO. Image compression plays a significant role in optimizing
              mobile site speed. Compressed images reduce data usage and improve
              loading times on mobile devices, resulting in a better user
              experience and higher search engine rankings for mobile searches.
            </p>
            <p>
              Utilize imagecompressor.website to ensure your website is
              mobile-friendly and delivers fast load times on smartphones and
              tablets.
            </p>
          </div>
        </div>
      </div>
      <Suspense fallback={<div>Loading...</div>}>
        <Footer />
      </Suspense>
    </div>
  );
};

export default Questions;
