import { BiError } from "react-icons/bi";
import { GrStatusGood } from "react-icons/gr";

function ShowSts({ heading, info, btnTxt = "OK", status = true, onclick }) {
  return (
    <div className="w-full h-screen absolute top-0 left-0 bg-[#190028bf] flex justify-center items-center ">
      <div className="w-[250px] min-h-[250px] bg-text1 rounded-lg flex flex-col gap-2 items-center justify-center text-center">
        <div className="text-5xl">
          {status ? (
            <GrStatusGood className="text-[#5ac529]" />
          ) : (
            <BiError className="text-text2" />
          )}
        </div>
        <div>
          <p className="text-lg font-bold">{heading}</p>
          <p className="text-sm">{info}</p>
        </div>
        <div
          onClick={onclick}
          className="w-fit py-2 px-6 border-solid border-2 border-dark1 bg-dark1 text-text1 rounded-xl mt-2 cursor-pointer font-bold hover:bg-text1 hover:text-dark1"
        >
          {btnTxt}
        </div>
      </div>
    </div>
  );
}

export default ShowSts;
