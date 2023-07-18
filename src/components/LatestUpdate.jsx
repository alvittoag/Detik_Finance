// ** Import Constants
import { postItems } from "../constants";

const LatestUpdate = () => {
  return (
    <main className="py-10 px-36 space-y-8">
      <h1 className="text-primary font-[700]  text-[32px]">LATEST UPDATE </h1>

      <article className="grid grid-cols-3  gap-y-7">
        {postItems.map((item, index) => (
          <div key={index} className="space-y-4">
            <img src={item.image} alt="post1" />

            <div className="space-y-2">
              <h1 className="text-secondary font-[700] text-[14px] max-w-sm">
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
