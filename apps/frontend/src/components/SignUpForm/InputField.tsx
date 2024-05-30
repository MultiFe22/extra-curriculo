export type InputFieldType = {
  label?: string;
  contentPlaceholder?: string;
  hintText?: string;
  isPassword?: boolean;
};

const InputField: React.FC<InputFieldType> = ({
  label,
  contentPlaceholder,
  hintText,
  isPassword = false,
}) => {
  return (
    <div className="self-stretch flex flex-col items-start justify-start text-left text-sm text-gray-700 font-text-md-regular">
      <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
        <div className="self-stretch flex flex-col items-start justify-start gap-[6px]">
          <div className="relative leading-[20px] font-medium inline-block min-w-[47px]">
            {label}
          </div>
          <div className="self-stretch shadow-[0px_1px_2px_rgba(16,_24,_40,_0.05)] rounded-lg bg-white overflow-hidden flex flex-row items-center justify-start py-2 px-[13px] gap-[8px] border-[1px] border-solid border-gray-300">
            <input
              className="w-full [border:none] [outline:none] bg-[transparent] h-6 flex-1 flex flex-row items-center justify-start font-text-md-regular text-base text-gray-500 min-w-[189px]"
              placeholder={contentPlaceholder}
              type={isPassword ? "password" : "text"}
            />
          </div>
        </div>
        <div className="w-80 relative leading-[20px] text-gray-600">
          {hintText}
        </div>
      </div>
    </div>
  );
};

export default InputField;
