"use client"
import Compressor from "compressorjs";
import { useState } from "react";
import Settings from "./settings";
import WhiteLoader from "./loader";
import Notification from "./notification";
import ImgReady from "./ImgReady";
import ImgComp from "./ImgComp";

const Hero = ()=>{
  const [fileList, setFilesList] = useState([]);
  const [isDragOver, setIsDragOver] = useState(false);
  const [compressedImgList, setCompressedImgList] = useState([]);
  const [isSettings, SetIsSettings] = useState(false);
  const [settingsOptions, setSettingsOptions] = useState({
    quality: 0.2, // Adjust the compression quality as needed
    maxWidth: 0,
    maxHeight: 0,
  });
  const [isApplyed, setIsApplyed] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDragOver(true);
  };

  const handleDragLeave = () => {
    setIsDragOver(false);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragOver(false);

    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter((file) => file.type.startsWith("image/"));
    setFilesList(imageFiles);
  };

  const handleFileInputChange = (e) => {
    const files = Array.from(e.target.files);
    setFilesList(files);
  };

  const handleReset = () => {
    setFilesList([]);
    setCompressedImgList([]);
    setSettingsOptions({
      quality: 0.2, // Adjust the compression quality as needed
      maxWidth: 0,
      maxHeight: 0,
    });
  };
  const handleResetCompressed = () => {
    setCompressedImgList([]);
    setIsApplyed([false]);
  };

  const handleDelete = (id) => {
    compressedImgList.length === 0
      ? setFilesList(fileList.filter((file, i) => i !== id))
      : setCompressedImgList(compressedImgList.filter((file, i) => i !== id));
  };
  const handleCompress = () => {
    setIsLoading(true);
    const compressedList = [];
  
    const compressFile = (file, i) => {
      const img = new Image();
      img.src = URL.createObjectURL(file);
      img.onload = () => {
        console.log(i, img.naturalWidth, img.naturalHeight);
        new Compressor(file, {
          quality: settingsOptions.quality, // Adjust the compression quality as needed
          maxWidth:
            settingsOptions.maxWidth === 0
              ? img.naturalWidth
              : settingsOptions.maxWidth,
          maxHeight:
            settingsOptions.maxHeight === 0
              ? img.naturalHeight
              : settingsOptions.maxHeight,
          mimeType: "auto",
          success(result) {
            console.log(`Image ${i + 1} - Original size: ${file.size / 1024} KB`);
            console.log(`Image ${i + 1} - Compressed size: ${result.size / 1024} KB`);
            compressedList.push(result);
  
            if (compressedList.length === fileList.length) {
              setCompressedImgList(compressedList);
              setIsLoading(false);
            } else {
              // If there are more files to compress, wait for 2 seconds and then compress the next one
              setTimeout(() => {
                compressFile(fileList[compressedList.length], compressedList.length);
              }, 0); // 2-second timeout
            }
          },
          error(err) {
            alert(`Error compressing image ${i + 1}:`, err);
          },
        });
      };
    };
  
    // Start compressing the first file
    if (fileList.length > 0) {
      compressFile(fileList[0], 0);
    }
  };

  
  const handleIsSettings = () => {
    SetIsSettings(!isSettings);
  };
  const handleDownloadAll = (imagesForDownloading) => {};
  return (
    <div className="h-fit flex flex-col justify-center text-center items-center py-10 sm:py-20 md:py-28 w-full bg-gradient-to-b from-primary  via-primary2 to-primary">
      <div className="">
        <h1 className="sm:text-3xl text-2xl w-[300px] sm:w-[600px] font-bold text-white p-2 py-3 sm:py-5 ">
          Revolutionize Your Digital World with Effortless Image Compression
        </h1>
        <p className="text-dimWhite w-[300px] sm:w-[600px] p-2 py-5 ">
          Experience Lightning-Fast Image Compression Solutions And Resizing.{" "}
        </p>
      </div>

      {fileList.length !== 0 ? (
        <div>
          {compressedImgList.length === 0 ? (
            <>
              {isLoading === false ? (
                <>
                  <div className="flex  justify-center ">
                    {isApplyed === true ? (
                    <Notification/>
                    ) : null}
                    <button
                      className="border bg-secondary   px-4 my-3 
                      
                      rounded-md text-sm sm:text-xl text-white py-1 hover:text-secondary hover:bg-white transition mx-2"
                      onClick={handleReset}
                    >
                      &laquo; Reset
                    </button>
                    <button
                      className="border bg-secondary px-4 my-3 rounded-md text-sm sm:text-xl text-white py-1 hover:text-secondary hover:bg-white transition"
                      onClick={handleCompress}
                    >
                      {fileList.length === 1
                        ? "Compress Image "
                        : "Compress All Images"}
                    </button>
                    <button
                      className="border bg-secondary px-4 my-3 rounded-md text-sm sm:text-xl  text-white py-1 hover:text-secondary hover:bg-white transition mx-2"
                      onClick={handleIsSettings}
                    >
                      Settings/Resize
                    </button>
                    {isSettings ? (
                      <Settings
                        handleClose={handleIsSettings}
                        settingsOptions={settingsOptions}
                        setSettingsOptions={setSettingsOptions}
                        setIsApplyed={setIsApplyed}
                      />
                    ) : null}
                  </div>

                  <ImgReady fileList={fileList} handleDelete={handleDelete}/>



                </>
              ) : (
                <WhiteLoader />
              )}
            </>
          ) : (
            <>
              <div>
                {/* ////////////////////////////////// */}
                <div className="flex justify-center">
                  <button
                    className="border bg-secondary px-4 my-3 rounded-md sm:text-xl text-sm text-white py-1 hover:text-secondary hover:bg-white transition mx-2"
                    onClick={handleResetCompressed}
                  >
                    &laquo; Reset
                  </button>
                </div>

                <div className="border border-dashed self-center border-white sm:w-[650px]  md:w-[800px] w-[100vw] sm:h-fit h-fit sm:py-4 rounded-md flex  justify-center items-center py-2">
                  <div className="flex flex-wrap justify-center">
                    {compressedImgList.map((file, index) => (
                     <ImgComp file={file} index={index} handleDelete={handleDelete} fileList={fileList}/>
                    ))}
                  </div>
                </div>
                {/* ////////////////////////////////////// */}
              </div>
            </>
          )}
        </div>
      ) : (
        <div
          className={`border border-dashed self-center border-white  sm:w-[600px] w-[300px] sm:h-[250px] h-[150px] rounded-md flex flex-col justify-center ${
            isDragOver ? "bg-gradient-to-tr from-secondary to-primary" : ""
          }`}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <input
            type="file"
            id="fileInput"
            multiple
            accept="image/jpeg, image/jpg, image/png"
            onChange={handleFileInputChange}
            className="hidden"
          />
          <label
            htmlFor="fileInput"
            className="text-dimWhite hover:text-white hover:cursor-pointer"
          >
            Click Here or Drag & Drop files{" "}
          </label>
          {console.log(fileList)}
        </div>
      )}
    </div>
  );
}
export default Hero