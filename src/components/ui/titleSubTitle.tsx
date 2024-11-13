interface TitleSubTitleProps {
  title: string;
  subtitle: string;
}

const TitleSubTitle = ({ title, subtitle }: TitleSubTitleProps) => {
  return (
    <div className="flex flex-col items-start justify-start gap-4">
      <div className="flex items-center justify-start gap-2.5 self-stretch">
        <div className="size-2.5 bg-[#bd1f17]" />
        <p className="font-roboto text-base font-bold leading-relaxed text-[#bd1f17] lg:text-xl lg:leading-loose">
          {subtitle}
        </p>
      </div>
      <h2 className="self-stretch font-bebas_Neue text-[40px] font-bold leading-[48px] tracking-wide text-[#181818] lg:text-[62px] lg:leading-[62px]">
        {title}
      </h2>
    </div>
  );
};

export default TitleSubTitle;
