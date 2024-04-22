import { IRecruitItem } from "@/types/recruit";
import RecruitWrapper from "./layout/RecruitWrapper";
import Image from "next/image";
import { H1, H2, H3, Body1, Body2, Body3 } from "./textGroup";

interface IProps {
  recruit: IRecruitItem;
}

export default function RecruitCard({ recruit }: IProps) {
  const { image, title, skills, company, appeal, reward_text } = recruit;
  const { name, grade, grade_count } = company;
  return (
    <RecruitWrapper>
      {/* 이미지와 북마크 영역 */}
      <div className="relative">
        <div className="relative h-[180px] rounded-tl-[12px] rounded-tr-[12px] overflow-hidden">
          <Image
            src={image}
            fill={true}
            sizes="100% 180px"
            alt="채용 대표 이미지"
          />
        </div>
      </div>
      {/* 메인 타이틀과 스킬 영역 */}
      <H1 text={title} />
      <Body3 text={skills.join(", ")} />
      {/* 디바이드 */}
      <div />
      {/* 회사 정보 영역 */}
      <div>
        {/* 회사아이콘 */}
        {/* 회사이름 */}
        <H2 text={name} />
        {/* 평점아이콘 */}
        {/* 평점 */}
        <H2 text={grade} />
        {/* 리뷰 */}
        <Body1 text={`(${grade_count})`} />
      </div>
      {/* 복지 영역 */}
      <Body2 text={appeal} />
      {/* 디바이드 */}
      <div />
      {/* 취업 축하금 영역 */}
      <div>
        {/* 축하금 아이콘 */}
        {/* 취업 축하금 */}
        <H3 text={`취업 축하금: ${reward_text}`} />
      </div>
    </RecruitWrapper>
  );
}
