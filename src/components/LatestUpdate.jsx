// ** Import React
import { useState } from "react";

// ** Import Constants
import { postItems } from "../constants";

const LatestUpdate = () => {
  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (index) => setHoveredItem(index);

  const handleMouseLeave = () => setHoveredItem(null);

  return (
    <main
      id="latest-update"
      className="px-12 py-16 md:py-10 md:px-36 space-y-8"
    >
      <h1 className="text-primary text-center md:text-justify font-[700] text-[32px]">
        LATEST UPDATE{" "}
      </h1>

      <article className="space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-7">
        {postItems.map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
            className="space-y-4  "
          >
            <div className="overflow-hidden rounded-lg">
              <img
                src={item.image}
                alt={item.title}
                className={`w-full ${
                  index === hoveredItem && "rounded-3xl duration-300 scale-110"
                } `}
              />
            </div>

            <div className="space-y-2">
              <h1
                className={`${
                  index === hoveredItem
                    ? "duration-100 text-primary"
                    : "text-secondary"
                } font-[700] text-[14px] max-w-[350px]`}
              >
                {item.title}
              </h1>

              <p className="text-[#7A7B7E] font-[500] text-[12px]">
                1 hari yang lalu
              </p>
            </div>
          </div>
        ))}
      </article>
    </main>
  );
};

export default LatestUpdate;
