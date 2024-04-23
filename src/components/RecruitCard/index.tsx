import Image from "next/image";
import { IRecruitItem } from "@/types/recruit";
import RecruitWrapper from "@/components/layout/RecruitWrapper";
import RecruitTitle from "@/components/RecruitCard/RecruitTitle";
import Divider from "@/components/layout/Divider";
import RecruitCompany from "@/components/RecruitCard/RecruitCompany";
import RecruitReward from "@/components/RecruitCard/RecruitReward";

interface IProps {
  recruit: IRecruitItem;
}

const ImgWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="relative border-b border-gray003">{children}</div>;
};

const ContentWrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="pt-[10px] px-[20px] pb-[18px]">{children}</div>;
};

export default function RecruitCard({ recruit }: IProps) {
  const { image, title, skills, company, appeal, reward_text, bookmark } =
    recruit;
  return (
    <RecruitWrapper>
      <ImgWrapper>
        <div className="relative h-[180px] rounded-tl-[12px] rounded-tr-[12px] overflow-hidden">
          <Image
            src={image}
            fill={true}
            sizes="100% 180px"
            alt="채용 대표 이미지"
            priority={true}
          />
        </div>
        <div className="absolute top-[16px] right-[16px] cursor-pointer">
          <Image
            src={
              bookmark
                ? "/asset/bookmark_active.svg"
                : "/asset/bookmark_nonActive.svg"
            }
            alt="북마크 버튼"
            width={28}
            height={28}
          />
        </div>
      </ImgWrapper>
      <ContentWrapper>
        <RecruitTitle title={title} skills={skills} />
        <Divider mt="10" mb="12" />
        <RecruitCompany company={company} appeal={appeal} />
        <RecruitReward reward_text={reward_text} />
      </ContentWrapper>
    </RecruitWrapper>
  );
}
