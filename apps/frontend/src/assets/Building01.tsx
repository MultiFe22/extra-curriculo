import { SvgProps } from "./svgInterface";

export const Building01: React.FC<SvgProps> = ({ className }) => {
  return (
    <svg
      className={`${className}`}
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12.5 17.5V13C12.5 12.5333 12.5 12.2999 12.4092 12.1217C12.3293 11.9649 12.2018 11.8374 12.045 11.7575C11.8667 11.6667 11.6334 11.6667 11.1667 11.6667H8.83333C8.36662 11.6667 8.13327 11.6667 7.95501 11.7575C7.79821 11.8374 7.67072 11.9649 7.59083 12.1217C7.5 12.2999 7.5 12.5333 7.5 13V17.5M15.8333 17.5V5.16667C15.8333 4.23325 15.8333 3.76654 15.6517 3.41002C15.4919 3.09641 15.2369 2.84144 14.9233 2.68166C14.5668 2.5 14.1001 2.5 13.1667 2.5H6.83333C5.89991 2.5 5.4332 2.5 5.07668 2.68166C4.76308 2.84144 4.50811 3.09641 4.34832 3.41002C4.16667 3.76654 4.16667 4.23325 4.16667 5.16667V17.5M17.5 17.5H2.5M7.91667 6.66667H7.925M12.0833 6.66667H12.0917M8.33333 6.66667C8.33333 6.89679 8.14679 7.08333 7.91667 7.08333C7.68655 7.08333 7.5 6.89679 7.5 6.66667C7.5 6.43655 7.68655 6.25 7.91667 6.25C8.14679 6.25 8.33333 6.43655 8.33333 6.66667ZM12.5 6.66667C12.5 6.89679 12.3135 7.08333 12.0833 7.08333C11.8532 7.08333 11.6667 6.89679 11.6667 6.66667C11.6667 6.43655 11.8532 6.25 12.0833 6.25C12.3135 6.25 12.5 6.43655 12.5 6.66667Z"
        stroke={className ? undefined : "#344054"}
        stroke-width="1.67"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Building01;
