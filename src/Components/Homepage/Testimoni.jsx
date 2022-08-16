import { AiOutlineMobile } from "react-icons/ai";
import Foto from "./../Img/fotouser.jpg";
import { DiCisco } from "react-icons/di";

const Testimoni = () => {
  return (
    <>
      <div className="bg-[#daf5fc] font-[#051b34] px-[10%] py-[5%] ">
        <div className="flex justify-between">
          <div className="w-[100%]">
            <div className="font-bold  text-4xl">
              What our Students <br /> have to say
            </div>
          </div>
          <div className="w-[100%] font-bold">
            <div>
              <div className="-ml-[5%] text-slate-300 text-8xl">
                <AiOutlineMobile />
              </div>
              <div className="-mt-[10%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto
                odio consequuntur tempora fuga ad? Optio officia quo facilis
                debitis, minima, itaque reiciendis autem tempore praesentium
                ducimus, architecto voluptatibus porro asperiores?
              </div>
            </div>
          </div>
        </div>
        <div className="py-[5%] grid grid-cols-3">
          <div className="p-6">
            <div>
              <img
                src={Foto}
                alt=""
                className="w-[42px] h-[42px] rounded-full"
              />
            </div>
            <div className="font-bold text-xl pt-2">Chase Kroll</div>
            <div className="text-sm">Manager creator</div>
            <div className="text-sm pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              aliquam voluptatibus aliquid voluptate quibusdam doloribus ea quas
              delectus facilis natus possimus soluta quod cumque in iusto,
              reprehenderit fugiat quo debitis.
            </div>
            <div className="text-sm pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="p-6">
            <div>
              <img
                src={Foto}
                alt=""
                className="w-[42px] h-[42px] rounded-full"
              />
            </div>
            <div className="font-bold text-xl pt-2">Chase Kroll</div>
            <div className="text-sm">Manager creator</div>
            <div className="text-sm pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              aliquam voluptatibus aliquid voluptate quibusdam doloribus ea quas
              delectus facilis natus possimus soluta quod cumque in iusto,
              reprehenderit fugiat quo debitis.
            </div>
            <div className="text-sm pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
          <div className="p-6">
            <div>
              <img
                src={Foto}
                alt=""
                className="w-[42px] h-[42px] rounded-full"
              />
            </div>
            <div className="font-bold text-xl pt-2">Chase Kroll</div>
            <div className="text-sm">Manager creator</div>
            <div className="text-sm pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              aliquam voluptatibus aliquid voluptate quibusdam doloribus ea quas
              delectus facilis natus possimus soluta quod cumque in iusto,
              reprehenderit fugiat quo debitis.
            </div>
            <div className="text-sm pt-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
            </div>
          </div>
        </div>
        <div>
          <div className="text-center pt-12 text-sm">
            trusted by <span className="font-bold ">100</span>
            students
          </div>
        </div>
        <div>
          <div className="flex justify-between ">
            <DiCisco className="text-9xl" />
            <DiCisco className="text-9xl" />
            <DiCisco className="text-9xl" />
            <DiCisco className="text-9xl" />
            <DiCisco className="text-9xl" />
            <DiCisco className="text-9xl" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoni;
