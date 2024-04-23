import Image from "next/image";
import { ICompanyItem } from "@/types/recruit";
import { Body1, Body2, H2 } from "@/components/textGroup";

interface IProps {
  company: ICompanyItem;
  appeal: string;
}

export default function RecruitCompany({ company, appeal }: IProps) {
  const { name, grade, grade_count, logo } = company;
  return (
    <div className="flex flex-col gap-[8px]">
      <div className="flex items-center">
        <Image
          className={"border-[1px] border-gray003 rounded-[4px] mr-[8px]"}
          src={logo}
          width={24}
          height={24}
          style={{ height: "24px", width: "24px" }}
          alt="회사 로고 아이콘"
        />
        <H2 text={name} className="mr-[9px] text-gray001" />
        {/* 평점아이콘 */}
        <Image
          src={"/asset/icon_star.svg"}
          className="mr-[3px]"
          width={14}
          height={14}
          alt="평점 아이콘"
        />
        {/* 평점 */}
        <H2 text={grade} className="text-gray001 mr-[4px]" />
        {/* 리뷰 */}
        <Body1 text={`(${grade_count})`} className="text-gray002" />
      </div>
      {/* 복지 영역 */}
      <Body2 text={appeal} className="text-gray002" />
    </div>
  );
}
