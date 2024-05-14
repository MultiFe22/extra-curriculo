
export const TagsChecker: React.FC = () => {
    return (
        <section className="self-stretch flex flex-col items-start justify-start py-0 px-6 box-border max-w-full">
    <div className="flex-1 flex flex-col items-start justify-start gap-[20px] max-w-full text-left text-xl text-gray-900 font-text-md-regular">
        <h3 className="m-0 self-stretch relative text-inherit leading-[30px] font-semibold font-inherit">
            Tags
        </h3>
        <div className="tags-container self-stretch grid mq768:grid-cols-1 mq1920:grid-cols-2 gap-x-36 gap-y-4 text-sm text-gray-700">
            <div className="tag-item flex flex-row items-start justify-start gap-[8px]">
                <input className="m-0 h-[18px] w-4" type="checkbox" />
                <div className="relative leading-[20px] font-medium inline-block min-w-[49px]">
                    Cultura
                </div>
            </div>
            <div className="tag-item flex flex-row items-start justify-start gap-[8px]">
                <input className="m-0 h-[18px] w-4" type="checkbox" />
                <div className="relative leading-[20px] font-medium inline-block min-w-[99px]">
                    Meio ambiente
                </div>
            </div>
            <div className="tag-item flex flex-row items-start justify-start gap-[8px]">
                <input className="m-0 h-[18px] w-4" type="checkbox" />
                <div className="relative leading-[20px] font-medium">
                    Direitos Humanos e Justiça
                </div>
            </div>
            <div className="tag-item flex flex-row items-start justify-start gap-[8px]">
                <input className="m-0 h-[18px] w-4" type="checkbox" />
                <div className="relative leading-[20px] font-medium">
                    Tecnologia e Produção
                </div>
            </div>
            <div className="tag-item flex flex-row items-start justify-start gap-[8px]">
                <input className="m-0 h-[18px] w-4" type="checkbox" />
                <div className="relative leading-[20px] font-medium inline-block min-w-[43px]">
                    Saúde
                </div>
            </div>
            <div className="tag-item flex flex-row items-start justify-start gap-[8px]">
                <input className="m-0 h-[18px] w-4" type="checkbox" />
                <div className="relative leading-[20px] font-medium inline-block min-w-[66px]">
                    Educação
                </div>
            </div>
            <div className="tag-item flex flex-row items-start justify-start gap-[8px]">
                <input className="m-0 h-[18px] w-4" type="checkbox" />
                <div className="relative leading-[20px] font-medium inline-block min-w-[59px]">
                    Trabalho
                </div>
            </div>
            <div className="tag-item flex flex-row items-start justify-start gap-[8px]">
                <input className="m-0 h-[18px] w-4" type="checkbox" />
                <div className="relative leading-[20px] font-medium inline-block min-w-[92px]">
                    Comunicação
                </div>
            </div>
        </div>
        <div className="flex flex-row items-start justify-start text-gray-600">
            <div className="flex flex-row items-start justify-start">
                <div className="relative [text-decoration:underline] leading-[20px] font-semibold inline-block min-w-[89px]">
                    Mostrar mais
                </div>
            </div>
        </div>
    </div>
</section>

    )
}