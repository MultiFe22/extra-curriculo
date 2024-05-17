import { SvgProps } from "./svgInterface";

const Avatar: React.FC<SvgProps> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect width="48" height="48" rx="24" fill="#F9F5FF" />
      <path
        d="M33.3334 34.5V32.1667C33.3334 30.929 32.8417 29.742 31.9665 28.8668C31.0914 27.9917 29.9044 27.5 28.6667 27.5H19.3334C18.0957 27.5 16.9087 27.9917 16.0335 28.8668C15.1584 29.742 14.6667 30.929 14.6667 32.1667V34.5M28.6667 18.1667C28.6667 20.744 26.5774 22.8333 24 22.8333C21.4227 22.8333 19.3334 20.744 19.3334 18.1667C19.3334 15.5893 21.4227 13.5 24 13.5C26.5774 13.5 28.6667 15.5893 28.6667 18.1667Z"
        stroke="#7F56D9"
        strokeWidth="2.33333"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Avatar;
