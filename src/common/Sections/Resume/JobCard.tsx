import {FC} from "react";
import { Link } from "react-router-dom";
import { useSpring, animated } from "react-spring";

const JobCard: FC<{
companyTitle: string;
role: string;
description: string;
startDate: string;
endDate: string;
active?: boolean;
image: string;


}> = ({
description,
image,
}) => {

const imageAnimation = useSpring({
  from: { opacity: 0, transform: "translate3d(0, 20px, 0)" },
  to: { opacity: 1, transform: "translate3d(0, 0, 0)" },
  delay: 300,
});
              
return (
  <>
  <main>
    <>
      <div className="mx-auto my-20 px-5">
        <section className="flex justify-center flex-col">
          <animated.div
            className="flex flex-col justify-center"
          >
            <div className={'flex justify-center mb-10'}>
              <animated.div
                style={imageAnimation}
                  className="image-wrapper order-2 h-[200px] w-[200px] text-center"
              >
                <div className="h-full w-full center overflow-hidden rounded-full border-2 border-black">
                  <img
                      className="h-full w-full object-cover"
                      src={image}
                      alt="portfolio"
                  />
                </div>
              </animated.div>
            </div>
            <div className="flex justify-center text-center">
              <Link
                to={description} target="_blank"
                className="mb-12 inline-block rounded-xl border-2 border-transparent bg-yellow-400 px-10 py-5 font-bold text-black transition-all hover:-translate-y-1 hover:bg-blue-1000"
              >
                Click Here To Download Resume.
              </Link>
            </div>
          </animated.div>
        </section>
      </div>
    </>
  </main>
  </>
);
};
              
export default JobCard;
  