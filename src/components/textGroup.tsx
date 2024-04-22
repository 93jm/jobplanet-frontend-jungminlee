interface IProps {
  text: string | number;
  color?: string;
}

export const H1 = ({ text, color }: IProps) => {
  return (
    <h1 className="font-[700] text-[20px] leading-[30px] truncate">{text}</h1>
  );
};

export const H2 = ({ text, color }: IProps) => {
  return (
    <h2 className="font-[700] text-[16px] leading-[24px] truncate">{text}</h2>
  );
};

export const H3 = ({ text, color }: IProps) => {
  return (
    <h3 className="font-[700] text-[14px] leading-[22px] truncate">{text}</h3>
  );
};

export const Body1 = ({ text, color }: IProps) => {
  return (
    <p className="font-[400] text-[16px] leading-[24px] truncate">{text}</p>
  );
};

export const Body2 = ({ text, color }: IProps) => {
  return (
    <p className="font-[400] text-[14px] leading-[22px] truncate">{text}</p>
  );
};

export const Body3 = ({ text, color }: IProps) => {
  return (
    <p className="font-[400] text-[12px] leading-[18px] truncate">{text}</p>
  );
};
