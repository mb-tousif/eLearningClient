import { FaLinkedinIn } from "react-icons/fa";
import { BsFacebook, BsTwitter } from "react-icons/bs";
import { mentors } from '../../Constant/Data';

export default function Mentors() {
  return (
    <section className="mb-12 text-[#523d03] text-center">
      <h2 className="text-lg sm:text-2xl mt-12 font-bold mb-2">Our Mentors</h2>
      <div className="w-2/3 mx-auto mt-6 mb-4 h-2 bg-[#2c1668] rounded-3xl"></div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-4">
        {mentors.map((mentor) => (
          <div key={mentor.id} className="mb-6 mx-auto lg:mb-0">
            <div className="bg-gradient-to-r from-[#D0DAE3] to-[#ADCDED] hover:from-[#3A8678] block rounded-lg shadow-lg">
              <div className="relative overflow-hidden bg-no-repeat bg-cover">
                <img
                  src={mentor.img}
                  className="sm:h-80 mx-auto rounded-t-lg"
                  alt="Mentors"
                />
                <svg
                  className="absolute"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 1440 320"
                  style={{ left: 0, bottom: 0 }}
                >
                  <path
                    fill="#2f3a8b"
                    d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,250.7C1248,256,1344,288,1392,304L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                  ></path>
                </svg>
              </div>
              <div className="p-6">
                <h5 className="text-lg font-bold mb-4">{mentor.name}</h5>
                <p className="text-gray-500 mb-4">{mentor.position}</p>
                <ul className="list-inside flex mx-auto justify-center">
                  <BsFacebook className="m-2 w-6 h-6" />
                  <BsTwitter className="m-2 w-6 h-6" />
                  <FaLinkedinIn className="m-2 w-6 h-6" />
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
