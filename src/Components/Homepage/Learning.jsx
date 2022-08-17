import Contoh from "./../Img/contohnylagi.jpg";
const learning = () => {
  return (
    <>
      <div className="py-[5%] px-[10%] bg-[#E7EDF3] text-[#121c2c]">
        <div>
          <div className="font-bold text-4xl ">
            Learning <br />
            Support features
          </div>
        </div>
        <div className="grid grid-cols-3  gap-40 pt-10">
          <div>
            <img src={Contoh} alt="inicontoh" className="w-[400px]" />
            <div className="pt-2 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aliquid accusamus ipsa.
            </div>
            <div className="pt-2 text-blue-400 font-bold">Click here</div>
          </div>
          <div>
            <img src={Contoh} alt="inicontoh" className="w-[400px]" />
            <div className="pt-2 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aliquid accusamus ipsa.
            </div>
            <div className="pt-2 text-blue-400 font-bold">Click here</div>
          </div>
          <div>
            <img src={Contoh} alt="inicontoh" className="w-[400px]" />
            <div className="pt-2 font-bold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
              aliquid accusamus ipsa.
            </div>
            <div className="pt-2 text-blue-400 font-bold">Click here</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default learning;
