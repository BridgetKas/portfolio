import { FaReact, FaHtml5,FaJsSquare} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

function RotatingWheel (){
 
  const icons = [
            <FaHtml5  color='#082407' size={35} />,
            <IoLogoCss3 color='#082407' size={35} />,
            <FaJsSquare color='#082407' size={35} />,
            <FaReact   color='#082407' size={40} />,
            <RiTailwindCssFill color='#082407' size={40} />,
            <SiTypescript color='#082407' size={35} />
    ]

  return (
    <div className="relative w-[350px] h-[350px] mx-auto">
      {/* Rotating wheel border */}
      <div className="absolute inset-0 rounded-full border-2 border-gray-400 animate-slowspin"> 
      {icons.map((icon, index) => {
        const angle = (360 / icons.length) * index;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * 175; // Adjust radius
        const y = Math.sin(radian) * 175;

        return (
          <div
            key={index}
            className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2  dark:bg-yellow"
            style={{
              left: `calc(50% + ${x}px)`,
              top: `calc(50% + ${y}px)`,
            }}
          >
            <span className="text-xl">{icon}</span>
          </div>
        );
      })}
      </div>

      {/* Fixed avatar in the center */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="w-[270px] h-[270px] rounded-full bg-yellow flex items-center justify-center shadow-lg">
          <img
                src="https://api.dicebear.com/9.x/open-peeps/svg?seed=Riley&accessories=sunglasses2,sunglasses,glasses5,glasses4,glasses3,glasses2,glasses,eyepatch&face=awe,concerned,concernedFear,contempt,cute,cyclops,driven,eatingHappy,explaining,eyesClosed,fear,hectic,lovingGrin1,lovingGrin2,monster,old,rage,serious,smile,smileBig,smileLOL,smileTeethGap,solemn,suspicious,tired,veryAngry,cheeky,angryWithFang,blank&facialHair=goatee2,moustache1,moustache2,moustache3,moustache4,moustache5,moustache6,moustache7,moustache8,moustache9&backgroundColor=transparent"
                alt="avatar" 
                className="w-full h-full rounded-full"
            />
        </div>
      </div>

     
      
    </div>
  );
};

export default RotatingWheel;
