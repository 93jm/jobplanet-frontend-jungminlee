interface IProps {
  className?: string;
}

export default function Divider({ className }: IProps) {
  return <div className={` h-[1px]  bg-gray003 ${className}`} />;
}
