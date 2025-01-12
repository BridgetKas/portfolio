import { FaReact, FaHtml5,FaJsSquare} from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io5";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
function RotatingWheel() {
       
    const icons = [
        <FaHtml5  color='white' size={35} style={{backgroundColor:'orange'}}/>,
        <IoLogoCss3 color='white' size={35} style={{backgroundColor:'blue'}}/>,
        <FaJsSquare color='black' size={35} style={{backgroundColor:'yellow'}}/>,
        <FaReact   color='blue' size={35} />,
        <RiTailwindCssFill color='red' size={35} />,
        <SiTypescript color='blue' size={35} style={{backgroundColor:'white'}}/>
    ]
    
    return (
    <div className="relative w-64 h-64 mx-auto animate-slowspin ">
        <div className="absolute inset-0 rounded-full border-2 border-gray-700"></div>
        {icons.map((icon, index) => {
        const angle = (360/ icons.length) * index;
        const radian = (angle * Math.PI) / 180;
        const x = Math.cos(radian) * 125; // Adjust radius
        const y = Math.sin(radian) * 125;

        return (
            <div
            key={index}
            className="absolute flex items-center justify-center transform -translate-x-1/2 -translate-y-1/2 "
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
    );
    ;
}

export default RotatingWheel