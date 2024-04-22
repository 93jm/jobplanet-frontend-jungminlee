interface IProps {
  children: React.ReactNode;
}

export default function RecruitWrapper({ children }: IProps) {
  return (
    <article className="w-[294px] border-[1px] border-gray003 rounded-[12px] bg-white shadow-shadow01">
      {children}
    </article>
  );
}
