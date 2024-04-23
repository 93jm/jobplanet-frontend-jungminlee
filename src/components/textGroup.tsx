interface IProps {
  text: string | number;
  className?: string;
}

export const H1 = ({ text, className = "text-gray001" }: IProps) => {
  return (
    <h1
      className={`font-[700] text-[20px] leading-[30px] truncate ${className}`}
    >
      {text}
    </h1>
  );
};

export const H2 = ({ text, className = "text-gray001" }: IProps) => {
  return (
    <h2
      className={`font-[700] text-[16px] leading-[24px] truncate ${className}`}
    >
      {text}
    </h2>
  );
};

export const H3 = ({ text, className = "text-gray001" }: IProps) => {
  return (
    <h3
      className={`font-[700] text-[14px] leading-[22px] truncate ${className}`}
    >
      {text}
    </h3>
  );
};

export const Body1 = ({ text, className = "text-gray001" }: IProps) => {
  return (
    <p
      className={`font-[400] text-[16px] leading-[24px] truncate ${className}`}
    >
      {text}
    </p>
  );
};

export const Body2 = ({ text, className = "text-gray001" }: IProps) => {
  return (
    <p
      className={`font-[400] text-[14px] leading-[22px] truncate ${className}`}
    >
      {text}
    </p>
  );
};

export const Body3 = ({ text, className = "text-gray001" }: IProps) => {
  return (
    <p
      className={`font-[400] text-[12px] leading-[18px] truncate ${className}`}
    >
      {text}
    </p>
  );
};
