function Features() {
  
  return (
    <div className="flex flex-col justify-center text-center items-center py-10 sm:py-20 md:py-20 w-full bg-gradient-to-b from-primary  via-primary2 to-primary">
      <h1 className="text-2xl text-white sm:3xl sm:py-5 py-2">Features</h1>
      <div className=" flex flex-wrap justify-center items-center md:w-[800px]  ">

        <div className=" border border-white sm:py-4 py-2 m-3 sm:m-5 flex flex-col justify-center items-center px-2 rounded-md ">
          <img width="94" height="94" src="/stack-of-photos.png" alt="stack-of-photos"/>
          <h1 className="text-white sm:text-xl font-medium my-3">
          Effortless Image Optimization
          </h1>
          <p className="text-dimWhite sm:text-sm text-sm sm:w-[300px] w-[300px]">
          Our cutting-edge technology ensures your images are optimized for the web, reducing load times and improving your website's performance.
          </p>

        </div>

        <div className=" border border-white sm:py-4 py-2 m-3 sm:m-5 flex flex-col justify-center items-center px-2 rounded-md ">
          <img width="94" height="94" src="/bulk.png" alt="external-bulk-buying-sustainable-living-flaticons-flat-flat-icons-2"/>
          <h1 className="text-white sm:text-xl font-medium my-3">
          Effortless Bulk Processing
          </h1>
          <p className="text-dimWhite sm:text-sm text-sm  w-[300px] ">
           Compress and Resize multiple images simultaneously to save time and effort And Resize your  entire image collections with just a few clicks.
          </p>
        </div>
        <div className=" border border-white sm:py-4 py-2 m-3 sm:m-5 flex flex-col justify-center items-center px-2 rounded-md">
          <img width="94" height="94" src="/3.png" alt="external-custom-postal-service-flaticons-flat-flat-icons"/>
          <h1 className="text-white sm:text-xl font-medium my-3">
          Tailored Custom Compression
          </h1>
          <p className="text-dimWhite sm:text-sm text-sm  w-[300px]">
          Fine-tune image quality, size, and format according to your preferences And Maintain artistic integrity while optimizing images for your website.
          </p>
        </div>
        <div className=" border border-white sm:py-4 py-2 m-3 sm:m-5 flex flex-col justify-center items-center px-2 rounded-md ">
          <img width="94" height="94" src="/stopwatch.png" alt="stopwatch"/>
          <h1 className="text-white sm:text-xl font-medium my-3">
          Swift and Seamless Compression
          </h1>
          <p className="text-dimWhite sm:text-sm text-sm  w-[300px] ">
          Experience blazing-fast image compression without sacrificing quality And Simplify your image optimization process with our user-friendly interface.
          </p>
        </div>
      </div>
      
      
    </div>
  );
}

export default Features;
