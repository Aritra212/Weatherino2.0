import { TbCloudQuestion } from "react-icons/tb";

function Query({
  heading,
  info,
  btn1Txt = "Ok",
  btn2Txt = "Cancel",
  onclick1,
  onclick2,
}) {
  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-[#190028bf] flex justify-center items-center ">
      <div className="w-[250px] min-h-[250px] bg-text1 rounded-lg flex flex-col gap-2 items-center justify-center text-center box-border p-3">
        <div className="text-5xl">
          <TbCloudQuestion className="text-text2" />
        </div>
        <div>
          <p className="text-lg font-bold">{heading}</p>
          <p className="text-sm leading-4 text-justify p-2">{info}</p>
        </div>
        <div className="w-full flex justify-between">
          <div
            onClick={onclick2}
            className="w-fit py-2 px-6 border-solid border-2 border-text2 bg-text2 text-text1 rounded-xl mt-2 cursor-pointer font-bold hover:bg-text1 hover:text-dark1"
          >
            {btn2Txt}
          </div>
          <div
            onClick={onclick1}
            className="w-fit py-2 px-9 border-solid border-2 border-dark1 bg-dark1 text-text1 rounded-xl mt-2 cursor-pointer font-bold hover:bg-text1 hover:text-dark1"
          >
            {btn1Txt}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Query;
