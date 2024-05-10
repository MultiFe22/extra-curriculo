// import AlertCircle from "../../assets/AlertCircle";
import ArrowUpRight from "../../assets/ArrowUpRight";
import Atom01 from "../../assets/Atom01";
import Building07 from "../../assets/Building07";
// import Globe04 from "../../assets/Globe04";
// import Telescope from "../../assets/Telescope";

export type ProjectCardType = {
  image?: string;
  name: string;
  category: string;
  modality: string;
  tags: string[];
};

interface TagButtonProps {
  name: string;
  color: string;
  Icon?: React.ReactNode;
}

const TagButton: React.FC<TagButtonProps> = ({ name, color, Icon }) => {
  const minW = name.length * 6;
  
  return (
    <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-row items-start justify-start mix-blend-multiply">
      <div className={`rounded-2xl bg-${color}-50 flex flex-row items-center justify-center py-0.5 pr-2 pl-1.5 gap-[4px]`}>
        {Icon}
        <div className={`relative text-xs leading-[18px] font-medium font-text-md-regular text-${color}-700 text-center inline-block min-w-[${minW}px]`}>
          {name}
        </div>
      </div>
    </button>
  );
};

export const ProjectCard: React.FC<ProjectCardType> = ({ image, name, tags, category, modality }) => {
  const tagColors = ["blue-light", "pink", "orange", "blue-gray", "purple", "gray"];
  
  return (
    <section className="mq1920:flex-1 mq768:flex-1 mq375:self-stretch rounded-lg flex flex-col items-center mq375:min-w-[280px] mq768:min-w-[323px] justify-start gap-[24px] mq1920:min-w-[406px] mq768:max-w-full mq1920:max-w-full text-left text-sm text-slateblue font-text-md-regular">
      <img
        className="self-stretch mq768:h-60 mq1920:h-60 mq1920:shrink-0 mq768:shrink-0 relative rounded-lg max-w-full overflow-hidden mq768:max-h-full mq1920:max-w-full object-cover"
        alt=""
        src={image}
      />
      <div className="self-stretch flex flex-col items-start justify-start gap-[24px] mq1920:max-w-full">
        <div className="self-stretch flex flex-col items-start justify-start gap-[12px] mq1920:max-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[12px] mq1920:max-w-full text-5xl text-gray-900">
            {/* review the mq450 flex-wrap later */}
            <div className="self-stretch flex flex-row mq450:flex-wrap items-start justify-start gap-[16px]">
              {/* REVIEW TEXT SIZE WHEN ON MOBILE VIEW */}
              <h1 className="m-0 flex-1 relative text-inherit leading-[32px] font-semibold font-inherit [display:-webkit-inline-box] mq1920:max-w-full overflow-hidden text-ellipsis [-webkit-line-clamp:2] [-webkit-box-orient:vertical] mq768:min-w-[197px] mq1920:min-w-[238px]">
                {name}
              </h1>
              <div className="flex flex-col items-start justify-start pt-1 px-0 pb-0">
                <ArrowUpRight className="w-6 h-6 relative overflow-hidden shrink-0" />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-row flex-wrap items-start justify-start py-0 mq375:pr-[81px] mq768:pr-[78px] pl-0 mq650:pr-[39px] mq1920:pr-[47px] mq650:box-border gap-[10px] min-h-[54px] text-center text-xs text-gray-700">
            <TagButton name={modality} color="pink" Icon={<Building07 className="h-3 w-3 relative overflow-hidden shrink-0 stroke-[#EE46BC]" />} />
            <TagButton name={category} color="blue-light" Icon={<Atom01 className="h-3 w-3 relative overflow-hidden shrink-0 stroke-[#0BA5EC]" />} />
            {tags.map((tag, index) => (
              <TagButton key={index} name={tag} color={tagColors[index%tagColors.length]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};