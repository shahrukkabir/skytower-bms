import logo1 from "../../Image/c1.png";
import logo2 from "../../Image/c2.png";
import logo3 from "../../Image/c3.png";
import logo4 from "../../Image/c4.png";
import design from "../../Image/design1.png";

export default function Company() {
    return (
        <>
            <div className="text-center mb-10">
                <h3 className="text-3xl uppercase text-[#312720] font-extrabold tracking-wide">
                    We work with the best
                </h3>
                <img src={design} alt="Decorative underline" className="w-[200px] mx-auto mt-3" />
            </div>
            <div className="container grid grid-cols-2 md:grid-cols-4  items-center">
                <div>
                    <img src={logo1} alt="Client or partner company logo 1" className="mx-auto" />
                </div>
                <div>
                    <img src={logo2} alt="Client or partner company logo 2" className="mx-auto" />
                </div>
                <div>
                    <img src={logo3} alt="Client or partner company logo 3" className="mx-auto" />
                </div>
                <div>
                    <img src={logo4} alt="Client or partner company logo 4" className="mx-auto" />
                </div>

            </div>
        </>
    );
}