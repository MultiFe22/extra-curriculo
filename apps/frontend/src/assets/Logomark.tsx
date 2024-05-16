import { SvgProps } from "./svgInterface";

export const Logomark: React.FC<SvgProps> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="32"
      height="32"
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="32" height="32" rx="8" fill="#6941C6" />
      <path
        d="M16 5L17.6838 8.93493L21.6569 7.34315L20.0651 11.3162L24 13L20.0651 14.6838L21.6569 18.6569L17.6838 17.0651L16 21L14.3162 17.0651L10.3431 18.6569L11.9349 14.6838L8 13L11.9349 11.3162L10.3431 7.34315L14.3162 8.93493L16 5Z"
        fill="white"
      />
      <path d="M24 26.987H8V22.573H24V26.987Z" fill="white" />
    </svg>
  );
};

export default Logomark;
