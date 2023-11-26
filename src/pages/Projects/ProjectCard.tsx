import {FC, useState} from "react";
import { Link } from "react-router-dom";
import { COLORS } from "../../common/util/COLORS.ts";
                        
                
const ProjectCard: FC<{
  title: string;
  description: string;
  image: string;
  languages: string[];
  slug: string;
}> = ({ title, description, image, languages, slug }) => {
  const [hovered, setHovered] = useState(false);
                    
  return (
    <Link
      to={slug} target="_blank"
      className="relative mb-5 flex max-w-[400px]  flex-col rounded-xl border-2 border-black shadow-custom transition-all hover:-translate-y-0.5 hover:shadow-customHover"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div
        className={`image-wrapper relative h-[400px] overflow-hidden rounded-t-lg transition-all`}
      >
        <img
          src={image}
          alt=""
          className={`inline-block h-full w-full transform object-cover transition-all ease-in-out ${
            hovered ? "scale-105" : ""
          }`}
        />
      </div>
      <div className="bg-white dark:bg-[#0d0d0d] p-5">
        <h2 className="mb-5  text-2xl font-bold leading-snug transition-all">
          {title}
        </h2>
        <p className="text-base transition-all">{description}</p>
      </div>
      <div className="inline-block bg-white px-5 py-2 dark:bg-[#0d0d0d] text-sm font-bold">
      <a
        
        target="_blank"
        className="inline-block w-full self-end justify-self-end rounded-lg bg-yellow-400 px-5 py-2 text-center text-black transition ease-in hover:-translate-y-1 hover:bg-blue-500"
      >
        View Online ↗
      </a>
      </div>
      <div className={`rounded-b-lg bg-white px-5 dark:bg-[#0d0d0d] py-2`}>
        {languages.map((language, index) => (
          <span
            className={`mb-2 mr-2 inline-block  rounded-lg px-3 text-black font-bold transition-all hover:-translate-y-0.5 ${COLORS[index]} py-2 text-sm`}
            key={index}
          >
            {language}
          </span>
        ))}
      </div>
      <div className="flex-grow rounded-b-lg bg-white dark:bg-[#0d0d0d]"></div>
    </Link>
  );
};
                
export default ProjectCard;