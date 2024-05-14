import { CategoryFilter } from './CategoryFilter';
import { ModalActions } from './ModalActions';
import {ModalHeader} from './ModalHeader';
import { TagsChecker } from './TagsChecker';

interface FilterModalProps {
    handleOpenClose: (action: boolean) => void;
}

export const FilterModal: React.FC<FilterModalProps> = ({ handleOpenClose }) => {
  return (
    <div className="w-full z-[99] relative shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] rounded-t-xl rounded-b-none bg-white flex flex-col items-end justify-start pt-6 px-0 pb-0 box-border gap-[32px] leading-[normal] tracking-[normal] text-left text-sm text-gray-600 font-text-md-regular">
      <ModalHeader handleOpenClose={handleOpenClose}/>
      <CategoryFilter />
      <CategoryFilter />
      <TagsChecker />
      <ModalActions />

    </div>
  );
};
