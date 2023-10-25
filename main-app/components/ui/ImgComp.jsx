import Image from "next/image";
function ImgComp({handleDelete, fileList, file, index}) {
    return ( 
        <>
        <div
          key={index}
          className="sm:p-3 items-center rounded-md border flex flex-col m-1 p-2  "
        >
          <button
            onClick={() => {
              handleDelete(index);
            }}
            className="text-white self-end text-2xl mx-[5%] hover:text-secondary2 transition  "
          >
            &times;
          </button>
          <h1 className="text-white font-bold sm:text-3xl text-xl relative top-[23%] bg-secondary2 rounded-md">
            {(
              ((file.size / 1024).toFixed(1) /
                (fileList[index].size / 1024).toFixed(1)) *
                100 -
              100
            ).toFixed(1)}
            %
          </h1>
          <Image
            className="sm:h-[120px] sm:w-[180px] h-[100px] p-1 w-[140px] rounded-md"
            src={URL.createObjectURL(file)}
            alt={file.name}
            key={index}
            width={0}
            height={0}
          />
          <h3 className="text-dimWhite flex flex-wrap  sm:w-[142px] w-[142px] overflow-hidden">
            {file.name}
          </h3>
          <h3 className="text-white ">
            Size: {(fileList[index].size / 1024).toFixed(1)}
            &raquo;{(file.size / 1024).toFixed(1)} Kbs
          </h3>
          <a
            href={URL.createObjectURL(file)}
            download={`compressed_${file.name}`}
            className="border bg-secondary px-4 my-3 rounded-md text-sm sm:text-xl text-white py-1 hover:text-secondary hover:bg-white transition mx-2"
          >
            
            Download
          </a>
        </div>
      </>
     );
}

export default ImgComp;