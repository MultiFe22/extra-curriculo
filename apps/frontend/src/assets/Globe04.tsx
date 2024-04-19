interface Globe04Props {
    className?: string;  // Optional string for Tailwind CSS classes
}

export const Globe04: React.FC<Globe04Props> = ({ className }) => {
    return (
        <svg className={`${className}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clip-path="url(#clip0_894_4145)">
        <path d="M1.53799 3.74141L3.68201 5.27283C3.79358 5.35251 3.84936 5.39236 3.90774 5.40154C3.95911 5.40962 4.01172 5.40147 4.05824 5.37825C4.11112 5.35185 4.15225 5.29701 4.23451 5.18733L4.68756 4.58326C4.71082 4.55224 4.72245 4.53673 4.73612 4.52336C4.74826 4.51148 4.76158 4.50087 4.77587 4.49169C4.79196 4.48135 4.80967 4.47348 4.8451 4.45773L6.7794 3.59804C6.85958 3.56241 6.89967 3.54459 6.9299 3.51676C6.95664 3.49215 6.97769 3.462 6.99159 3.42842C7.0073 3.39045 7.01022 3.34668 7.01606 3.25913L7.15769 1.1347M6.75 6.75L8.05801 7.31057C8.20976 7.37561 8.28564 7.40813 8.32584 7.46215C8.3611 7.50954 8.37845 7.56788 8.3748 7.62684C8.37064 7.69405 8.32484 7.76273 8.23326 7.90011L7.61875 8.82189C7.57533 8.88701 7.55362 8.91957 7.52494 8.94315C7.49955 8.96401 7.4703 8.97967 7.43885 8.98922C7.40333 9.00001 7.36419 9.00001 7.28593 9.00001H6.2883C6.18463 9.00001 6.13279 9.00001 6.08869 8.98266C6.04974 8.96734 6.01526 8.94249 5.98841 8.91039C5.95801 8.87403 5.94161 8.82485 5.90883 8.7265L5.55239 7.65718C5.53306 7.59917 5.52339 7.57017 5.52084 7.54069C5.51859 7.51455 5.52046 7.48822 5.52639 7.46267C5.53308 7.43384 5.54675 7.4065 5.5741 7.35181L5.84485 6.81029C5.89986 6.70027 5.92737 6.64526 5.96974 6.6111C6.00707 6.58101 6.05228 6.56228 6.09996 6.55716C6.15407 6.55136 6.21242 6.57081 6.32912 6.6097L6.75 6.75ZM11 6C11 8.76142 8.76142 11 6 11C3.23858 11 1 8.76142 1 6C1 3.23858 3.23858 1 6 1C8.76142 1 11 3.23858 11 6Z" stroke="#7A5AF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_894_4145">
        <rect width="12" height="12" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    )
}

export default Globe04;