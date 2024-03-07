import { companyLogos } from "../constants";

const ComapnyLogos = ({ className }) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-n-1/50">
        helping people out
      </h5>
      <ul className="flex">
        {companyLogos.map((logo, index) => {
          <li
            className="flex items-center justify-center flex-1 h-[8.5rem]"
            key={index}
          >
            <img src={logo} width={134} height={28} alt="logos"></img>
          </li>;
        })}
      </ul>
    </div>
  );
};

export default ComapnyLogos;
