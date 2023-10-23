import React, { useState } from "react";



function Footer() {
  let date = new Date();
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(!open);
  };
  const handleClose = () =>{
    setOpen(!open)
  }

  return (
    <div className="">
      <h1 className="text-dimWhite text-sm mt-32">
        © Ishtiaq Ahmed {date.getFullYear()}
        <button
          className="text-secondary2 ml-1 hover:text-red-600"
          onClick={handleOpen}
        >
          Terms and Privacy
        </button>
      </h1>

      <div
        className={`overflow-x-hidden  transition-transform duration-300 transform border  fixed bottom-0 right-0
         sm:w-[500px] overflow-scroll h-[100vh] bg-gradient-to-b rounded-md from-secondary to-primary text-left ${
          open ? "scale-y-100" : "scale-y-0 h-0"
        }`}
      >
         <button
        className="text-3xl  text-dimWhite hover:text-secondary2 absolute top-0 right-1 p-1 "
        onClick={handleClose}
      >
        &times;
      </button>
         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <h1 className="text-3xl font-semibold mb-4 text-white">Terms of Service Agreement</h1>

      <div className="text-dimWhite">

        <h2 className="text-xl font-semibold mt-6 mb- text-white">Terms of Use</h2>
        <p>
          By utilizing the services offered on imagecompressor.website, you acknowledge and accept the following terms and conditions:
        </p>
        <ol className="list-decimal list-inside pl-4">
          <li><strong>Assumption of Risk:</strong> Your use of the imagecompressor.website service is entirely at your own risk.</li>
          <li><strong>Data Responsibility:</strong> You are solely responsible for any data transmitted to imagecompressor.website servers.</li>
          <li><strong>Prohibited Content:</strong> You agree not to use the imagecompressor.website service for uploading illegal materials or content that violates applicable laws and regulations.</li>
          <li><strong>No Integration:</strong> Integration of the imagecompressor.website service into your own or third-party applications is strictly prohibited.</li>
          <li><strong>Usage Rights:</strong> You may use the imagecompressor.website service for both personal and commercial purposes.</li>
          <li><strong>Resizer Service:</strong> The imagecompressor.website service may include a resizer component that allows you to modify image dimensions. Your use of the resizer service is subject to these terms.</li>
          <li><strong>Service Changes:</strong> We reserve the right to modify or discontinue any aspect of the services provided on imagecompressor.website at any time.</li>
          <li><strong>Agreement Updates:</strong> We may revise the terms of this Agreement without prior notice, so please check periodically for updates.</li>
          <li><strong>No Guarantees:</strong> The imagecompressor.website service is provided without any guarantees or warranties.</li>
        </ol>

        <h2 className="text-xl font-semibold mt-6 mb-2">Privacy</h2>
        <p>
          In matters of privacy, we take the following measures:
        </p>
        <ol className="list-decimal list-inside pl-4">
          <li><strong>Data Retention:</strong> Submitted data and generated files only resides in client browser and  permanently deleted after user closes the tab.</li>
          <li><strong>Data Access:</strong> Our company will not share or access submitted data and generated files unless required by law enforcement authorities.</li>
          <li><strong>Metadata Analysis:</strong> For the enhancement of imagecompressor.website service quality, we may collect and analyze metadata from your requests.</li>
          <li><strong>Cookie and Data Usage:</strong> This site utilizes Google services for ad personalization and measurement. Google may collect and use data, including cookies. You can manage ad personalization in your Google account settings. Additionally, we use cookies for statistical purposes. By using this site, you consent to our use of cookies.</li>
        </ol>
      </div>
    </div>
        
    
      </div>
    </div>
  );
}

export default Footer;