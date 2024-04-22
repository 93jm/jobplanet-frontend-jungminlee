import { getRecruitmentList } from "@/api/fetch";
import RecruitCard from "@/components/RecruitCard";
import ContentWrapper from "@/components/layout/ContentWrapper";
import { IRecruitItem, RecruitmentResponse } from "@/types/recruit";

export default async function Home() {
  const {
    data: { recruits },
  }: RecruitmentResponse = await getRecruitmentList("/jptest?page=1");

  return (
    <ContentWrapper>
      {recruits.map((recruit: IRecruitItem) => (
        <RecruitCard key={recruit.id} recruit={recruit} />
      ))}
    </ContentWrapper>
  );
}
