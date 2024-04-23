import { H3 } from "@/components/textGroup";
import Image from "next/image";
import Divider from "../layout/Divider";

interface IProps {
  reward_text: string;
}

export default function RecruitReward({ reward_text }: IProps) {
  if (!reward_text) {
    return null;
  }

  return (
    <>
      <Divider className="mt-[12px] mb-[10px]" />
      <div className="flex items-center gap-[3px]">
        <Image
          src="/asset/icon-won.svg"
          width={26}
          height={26}
          alt="축하금 아이콘"
          priority={true}
        />
        <H3 text={`취업 축하금: ${reward_text}`} className="text-gray001" />
      </div>
    </>
  );
}
