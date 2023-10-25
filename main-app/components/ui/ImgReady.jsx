import Image from "next/image";
function ImgReady({fileList, handleDelete}) {
    return ( 
        <div className="border border-dashed slef-center border-white sm:w-[650px]  md:w-[800px]  sm:h-fit sm:py-7  w-[100vw] rounded-md flex  justify-center items-center py-3 ">
                    <div className="flex flex-wrap justify-center ">
                      {fileList.map((file, index) => (
                        <>
                          <div
                            key={index}
                            className="sm:p-3 items-center rounded-md border flex flex-col m-2 p-1 "
                          >
                            <button
                              onClick={() => {
                                handleDelete(index);
                              }}
                              className="text-white self-end text-2xl mx-[5%] hover:text-secondary2 transition"
                            >
                              &times;
                            </button>
                            <Image
                              className="sm:h-[120px] sm:w-[180px] h-[100px] w-[140px] rounded-md"
                              src={URL.createObjectURL(file)}
                              alt={file.name}
                              key={index}
                              width={0}
                              height={0}
                            />
                            <h3 className="text-dimWhite flex flex-wrap w-[150px] overflow-hidden text-ellipsis ">
                              {file.name}
                            </h3>
                            <h3 className="text-white">
                              Size: {(file.size / 1024).toFixed(1)} Kbs
                            </h3>
                          </div>
                        </>
                      ))}
                    </div>
                  </div>
     );
}

export default ImgReady;