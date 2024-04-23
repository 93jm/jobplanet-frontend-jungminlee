interface IProps {
  mt?: string;
  mb?: string;
}

export default function Divider({ mt = "0", mb = "0" }: IProps) {
  return <div className={`h-[1px] bg-gray003 mt-[${mt}px] mb-[${mb}px]`} />;
}
