import { Categories, Tags } from '../../pages/Opportunities';
import { BigButtonFilter } from './BigButtonFilter';
import { ModalActions } from './ModalActions';
import { ModalHeader } from './ModalHeader';
import { TagsChecker } from './TagsChecker';

interface FilterModalProps {
    handleOpenClose: (action: boolean) => void;
    categories: Categories;
    modalities: string[];
    tags: Tags;
}

export const FilterModal: React.FC<FilterModalProps> = ({ handleOpenClose, categories, modalities, tags }) => {
    // transform the categories into options
    const options = categories.map((category) => category.name);
    const tagsOptions = tags.map((tag) => tag.name);
    return (
    <div className="w-full z-[99] relative shadow-[0px_20px_24px_-4px_rgba(16,_24,_40,_0.08),_0px_8px_8px_-4px_rgba(16,_24,_40,_0.03)] rounded-t-xl rounded-b-none bg-white flex flex-col items-end justify-start pt-6 px-0 pb-0 box-border gap-[32px] leading-[normal] tracking-[normal] text-left text-sm text-gray-600 font-text-md-regular">
      <ModalHeader handleOpenClose={handleOpenClose}/>
      <BigButtonFilter title="Categoria" options={options}/>
      <BigButtonFilter title="Modalidade" options={modalities}/>
      <TagsChecker tags={tagsOptions}/>
      <ModalActions />

    </div>
  );
};
