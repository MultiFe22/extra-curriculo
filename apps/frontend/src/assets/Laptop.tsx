import { SvgProps } from "./svgInterface";

export const Laptop: React.FC<SvgProps> = ({ className }) => {
    return (
        <svg className={`${className}`} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.50002 13.3333V5.99992C2.50002 5.0665 2.50002 4.59979 2.68168 4.24327C2.84147 3.92966 3.09643 3.6747 3.41004 3.51491C3.76656 3.33325 4.23327 3.33325 5.16669 3.33325H14.8334C15.7668 3.33325 16.2335 3.33325 16.59 3.51491C16.9036 3.6747 17.1586 3.92966 17.3184 4.24327C17.5 4.59979 17.5 5.0665 17.5 5.99992V13.3333H13.0523C12.8485 13.3333 12.7466 13.3333 12.6507 13.3563C12.5656 13.3767 12.4843 13.4104 12.4098 13.4561C12.3257 13.5076 12.2536 13.5796 12.1095 13.7238L12.0572 13.7761C11.9131 13.9202 11.841 13.9923 11.7569 14.0438C11.6824 14.0895 11.6011 14.1231 11.516 14.1436C11.4201 14.1666 11.3182 14.1666 11.1144 14.1666H8.88564C8.68181 14.1666 8.5799 14.1666 8.48399 14.1436C8.39896 14.1231 8.31768 14.0895 8.24312 14.0438C8.15902 13.9923 8.08696 13.9202 7.94283 13.7761L7.89054 13.7238C7.74642 13.5796 7.67436 13.5076 7.59026 13.4561C7.5157 13.4104 7.43441 13.3767 7.34938 13.3563C7.25347 13.3333 7.15156 13.3333 6.94774 13.3333H2.50002ZM2.50002 13.3333C2.03978 13.3333 1.66669 13.7063 1.66669 14.1666V14.4444C1.66669 14.961 1.66669 15.2193 1.72348 15.4313C1.87759 16.0064 2.32684 16.4557 2.90199 16.6098C3.11393 16.6666 3.37226 16.6666 3.88891 16.6666H16.1111C16.6278 16.6666 16.8861 16.6666 17.0981 16.6098C17.6732 16.4557 18.1225 16.0064 18.2766 15.4313C18.3334 15.2193 18.3334 14.961 18.3334 14.4444C18.3334 14.186 18.3334 14.0569 18.305 13.9509C18.2279 13.6633 18.0033 13.4387 17.7157 13.3616C17.6097 13.3333 17.4806 13.3333 17.2222 13.3333H16.6667" stroke="#344054" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        
    )
}

export default Laptop;