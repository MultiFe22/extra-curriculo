interface Atom01Props {
    className?: string;  // Optional string for Tailwind CSS classes
}

export const Atom01: React.FC<Atom01Props> = ({ className }) => {
    return (
        <svg className={`${className}`} width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g clipPath="url(#clip0_894_4135)">
        <path d="M5.99976 6.00007H6.00476M7.76752 7.76784C5.42438 10.111 2.73343 11.219 1.75712 10.2427C0.780805 9.2664 1.88884 6.57545 4.23199 4.2323C6.57514 1.88916 9.26609 0.78112 10.2424 1.75743C11.2187 2.73374 10.1107 5.42469 7.76752 7.76784ZM7.7675 4.23221C10.1106 6.57536 11.2187 9.26631 10.2424 10.2426C9.26607 11.2189 6.57512 10.1109 4.23197 7.76775C1.88882 5.4246 0.780785 2.73365 1.7571 1.75734C2.73341 0.78103 5.42436 1.88907 7.7675 4.23221ZM6.24976 6.00007C6.24976 6.13814 6.13783 6.25007 5.99976 6.25007C5.86169 6.25007 5.74976 6.13814 5.74976 6.00007C5.74976 5.862 5.86169 5.75007 5.99976 5.75007C6.13783 5.75007 6.24976 5.862 6.24976 6.00007Z" stroke={className ? undefined : "#EE46BC"} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </g>
        <defs>
        <clipPath id="clip0_894_4135">
        <rect width="12" height="12" fill="white"/>
        </clipPath>
        </defs>
        </svg>
    )
}

export default Atom01;