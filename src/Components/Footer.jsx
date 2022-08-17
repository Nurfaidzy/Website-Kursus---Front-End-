import {
  AiFillLinkedin,
  AiFillFacebook,
  AiFillInstagram,
} from "react-icons/ai";
const Footer = () => {
  return (
    <div className="bg-[#051b34] pt-[5%] px-[10%] pb-[7%] text-white">
      <div className="grid grid-cols-5 gap-30">
        <div className="">
          <div>
            <div className="text-2xl font-bold">E-Learning</div>
            <div className="py-[4%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              cupiditate temporibus culpa, laboriosam inventore minus. Hic
              inventore unde ratione quo. A iste minus explicabo totam iure ad
              officia temporibus soluta.
            </div>
          </div>
          <div className="flex gap-1 text-blue-400">
            <div className="bg-slate-500 p-1 rounded-sm">
              <AiFillFacebook />
            </div>
            <div className="bg-slate-500 p-1 rounded-sm">
              <AiFillInstagram />
            </div>
            <div className="bg-slate-500 p-1 rounded-sm">
              <AiFillLinkedin />
            </div>
          </div>
        </div>
        <div className="pl-[100px]">
          <div className="text-2xl font-bold">Company</div>
          <div className="pt-[5%]">
            <div>About Us</div>
            <div>Course</div>
            <div>Info</div>
            <div>Evrything</div>
          </div>
        </div>
        <div className="pl-20">
          <div className="text-2xl font-bold">Pricing</div>
          <div className="pt-[5%]">
            <div>Price</div>
            <div>Flash Sale</div>
          </div>
        </div>
        <div className="pl-20">
          <div className="text-2xl font-bold">Resource</div>
          <div className="pt-[5%]">
            <div>Blog & Posting</div>
            <div>Course</div>
            <div>Info</div>
            <div>Evrything</div>
            <div>Privacy</div>
          </div>
        </div>
        <div className="pl-20">
          <div className="text-2xl font-bold">Contact us</div>
          <div className="pt-[5%]">
            <div>Contact</div>
            <div>Admin</div>
            <div>Info</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
