import { useState } from "react";

function Settings({ handleClose, settingsOptions, setSettingsOptions, setIsApplyed }) {
  const [height, setHeight] = useState(settingsOptions.maxHeight);
  const [width, setWidth] = useState(settingsOptions.maxHeight);
  const [quality, setQuality] = useState(settingsOptions.quality);
  

  const handleApply = ( )=>{
    setSettingsOptions({
      quality: Number(quality),
      maxWidth: width,
      maxHeight: height,
    })
    setIsApplyed(true)
    handleClose()
    setIsApplyed(true)
    
  }

  return (
    <div className=" fixed top-0 right-0 sm:w-[300px] w-[250px]  h-[100%] bg-cover bg-gradient-to-b from-secondary to-primary flex flex-col justify-center items-center border-l-2 rounded-l-3xl ani ">
      <button
        className="text-3xl fixed top-[20%] right-[5%] text-dimWhite hover:text-secondary2"
        onClick={handleClose}
      >
        &times;
      </button>
      
      <h1 className="text-dimWhite font-light text-sm w-[90%] flex-wrap border border-red-600 shadow-2xl bg-primary rounded-md py-1">
        Note: Not choseing any of the settings will automatically apply the
        default settings. Apply and then Click Compress All Images and then
        download the Images.
      </h1>
      <div className="flex flex-col h-[30%]   p-2">
        <h1 className="font-2xl text-white font-bold my-3"> Settings</h1>
        <div className="flex flex-row h-[100%]">
          <div className="flex flex-col justify-around">
            <label htmlFor="Height" className="text-dimWhite mx-1">
              Height in pixel
            </label>
            <label htmlFor="Width" className="text-dimWhite ">
              Width in pixel&nbsp;
            </label>
            <label htmlFor="Quality" className="text-dimWhite">
              Quality
            </label>
          </div>
          <div className="flex flex-col justify-around">
            <input
              onkeypress="return event.charCode >= 48"
              min="0"
              className="w-[115px] rounded-md  px-2"
              type="number"
              placeholder="Positve only"
              value={null}
              onChange={(e) => {
                setHeight(Number(e.target.value));
              }}
            />
            <input
              onkeypress="return event.charCode >= 48"
              min="0"
              type="number"
              className="w-[115px] px-2 rounded-md"
              placeholder="positve only"
              value={null}
              onChange={(e) => {
                Number(setWidth(e.target.value));
              }}
            />
            <div className="flex">
              <input
                type="range"
                min={1}
                max={10}
                className="w-[100px]"
                value={Math.round(quality * 10)} // Map the quality back to the range value
                onChange={(e) => {
                  // Map the range input value back to quality between 0.1 and 1
                  const mappedQuality = parseFloat(e.target.value / 10);
                  setQuality(mappedQuality);
                }}
              />
              <h2 className="mx-1 text-white">{Math.round(quality * 100)}%</h2>
            </div>
          </div>
        </div>
        <button className="border bg-secondary  rounded-md text-xl text-white w-[90px] hover:text-secondary hover:bg-white transition self-center"
        onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
}

export default Settings;
