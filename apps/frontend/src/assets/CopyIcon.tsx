import { SvgProps } from "./svgInterface";

const CopyIcon: React.FC<SvgProps> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1280_6840)">
        <path
          d="M4.16669 12.4998H3.33335C2.89133 12.4998 2.4674 12.3242 2.15484 12.0117C1.84228 11.6991 1.66669 11.2752 1.66669 10.8332V3.33317C1.66669 2.89114 1.84228 2.46722 2.15484 2.15466C2.4674 1.8421 2.89133 1.6665 3.33335 1.6665H10.8334C11.2754 1.6665 11.6993 1.8421 12.0119 2.15466C12.3244 2.46722 12.5 2.89114 12.5 3.33317V4.1665M9.16669 7.49984H16.6667C17.5872 7.49984 18.3334 8.24603 18.3334 9.1665V16.6665C18.3334 17.587 17.5872 18.3332 16.6667 18.3332H9.16669C8.24621 18.3332 7.50002 17.587 7.50002 16.6665V9.1665C7.50002 8.24603 8.24621 7.49984 9.16669 7.49984Z"
          stroke={className ? undefined : "#344054"}
          strokeWidth="1.67"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1280_6840">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CopyIcon;
