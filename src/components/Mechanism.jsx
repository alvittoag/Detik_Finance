// ** Import Constants
import { mechanismItems } from "../constants";

const Mechanism = () => {
  return (
    <main id="mechanism" className="bg-mechanism">
      <article className="py-10 px-5 space-y-5 sm:py-7 sm:px-20 md:py-14 lg:w-[751px] lg:mx-auto lg:py-32 lg:px-0 lg:space-y-8">
        <h1 className="text-[48px] font-[700] text-white">Mekanisme</h1>

        <div className="space-y-6">
          {mechanismItems.map((item, i) => (
            <div
              key={i}
              className="bg-white p-[30px] rounded-[10px] space-y-6 md:space-y-0 sm:flex sm:gap-7 sm:items-start"
            >
              <img src={item.icon} alt={item.title} />

              <div className="w-full space-y-2 ">
                <div className="space-y-2 sm:space-y-0 sm:flex sm:justify-between">
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
      </article>
    </main>
  );
};

export default Mechanism;
