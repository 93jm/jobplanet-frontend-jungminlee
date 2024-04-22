interface IProps {
  children: React.ReactNode;
}

export default function ContentWrapper({ children }: IProps) {
  return (
    <main className="grid grid-cols-3 gap-[36px] justify-items-center mx-auto my-[49px] w-[954px] ">
      {children}
    </main>
  );
}
