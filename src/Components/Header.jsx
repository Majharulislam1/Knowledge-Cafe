
import profile from "../assets/profile.png"

const Header = () => {
    return (
        <div className="py-6 flex justify-between items-center  border-b-2">
             <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
             <div>
                 <img src={profile} alt="" />
             </div>
        </div>
    );
};

export default Header;