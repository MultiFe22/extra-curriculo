import { SvgProps } from "./svgInterface";

export const XIcon: React.FC<SvgProps> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M9 3L3 9M3 3L9 9"
        stroke="#9E77ED"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default XIcon;
