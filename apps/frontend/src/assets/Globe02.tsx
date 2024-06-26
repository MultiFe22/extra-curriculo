import { SvgProps } from "./svgInterface";

const Globe02: React.FC<SvgProps> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_1280_6843)">
        <path
          d="M10 1.6665C12.0844 3.94846 13.269 6.90987 13.3334 9.99984C13.269 13.0898 12.0844 16.0512 10 18.3332M10 1.6665C7.91562 3.94846 6.73106 6.90987 6.66669 9.99984C6.73106 13.0898 7.91562 16.0512 10 18.3332M10 1.6665C5.39765 1.6665 1.66669 5.39746 1.66669 9.99984C1.66669 14.6022 5.39765 18.3332 10 18.3332M10 1.6665C14.6024 1.6665 18.3334 5.39746 18.3334 9.99984C18.3334 14.6022 14.6024 18.3332 10 18.3332M2.08337 7.49984H17.9167M2.08335 12.4998H17.9167"
          stroke={className ? undefined : "#98A2B3"}
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_1280_6843">
          <rect width="20" height="20" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Globe02;
