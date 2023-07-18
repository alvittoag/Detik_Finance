// ** Import Assets
import assets from "../assets/assets";

// ** Import Constants
import { mechanismItems } from "../constants";

const Mechanism = () => {
  return (
    <div id="mechanism" className="relative">
      <img
        src={assets.backgroundMechanism}
        alt="mechanism"
        className="w-full"
      />

      <div className="absolute top-0 bottom-0 left-0 right-0 w-[751px] mx-auto py-32 space-y-8">
        <h1 className="text-[48px] font-[700] text-white">Mekanisme</h1>

        <div className="space-y-6">
          {mechanismItems.map((item, i) => (
            <div
              key={i}
              className="bg-white p-[30px] rounded-[10px] flex gap-7 items-start"
            >
              <img src={item.icon} alt={item.title} />

              <div className="w-full space-y-2">
                <div className="flex justify-between">
                  <h1 className="text-primary font-[700] text-[18px]">
                    {item.title}
                  </h1>

                  <h5 className="text-[14px] font-[500] text-primary">
                    {item.date}
                  </h5>
                </div>

                <ol className="list-decimal px-3 space-y-1">
                  {item.steps.map((step, index) => (
                    <li
                      key={index}
                      className="text-[12px] text-[#1B1E28] font-[500]"
                    >
                      {i === 0 && index === 0 ? (
                        <>
                          {step.substring(0, 124)}{" "}
                          <span className="text-blue-300 cursor-pointer">
                            link berikut
                          </span>
                        </>
                      ) : (
                        step
                      )}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Mechanism;
