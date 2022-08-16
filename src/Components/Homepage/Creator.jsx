import inicreator from "./../Img/fotouser.jpg";

const Creator = () => {
  return (
    <>
      <div className="bg-white py-[5%] px-[10%]">
        <div className="flex justify-center">
          <div>
            <p className="flex justify-center font-bold text-4xl">
              Our Popular Creator
            </p>
            <p className="pt-4">
              45+ Milion people are already learning on this media
            </p>
          </div>
        </div>
        <div className="flex justify-center pt-[5%]">
          <div className="grid grid-cols-3 gap-40">
            <div>
              <img src={inicreator} alt="" className="w-[400px]" />
              <div>
                <div>ini facebook</div>
                <div>ini linkend</div>
                <div>ini twitter</div>
              </div>
              <div className=" flex justify-center">
                <div className="text-center pt-4">
                  <div className="font-bold text-xl">siapalahini</div>
                  <div className="text-sm">managerlagi</div>
                </div>
              </div>
            </div>
            <div>
              <img src={inicreator} alt="" className="w-[400px]" />
              <div className=" flex justify-center">
                <div className="text-center pt-4">
                  <div className="font-bold text-xl">siapalahini</div>
                  <div className="text-sm">managerlagi</div>
                </div>
              </div>
            </div>
            <div>
              <img src={inicreator} alt="" className="w-[400px]" />
              <div className=" flex justify-center">
                <div className="text-center pt-4">
                  <div className="font-bold text-xl">siapalahini</div>
                  <div className="text-sm">managerlagi</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Creator;
