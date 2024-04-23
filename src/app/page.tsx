import { getRecruitmentList } from "@/api/fetch";
import RecruitCardList from "@/components/RecruitCardList";
import LayoutWrapper from "@/components/layout/LayoutWrapper";
import { RecruitmentResponse } from "@/types/recruit";

export default async function Home() {
  const {
    data: { recruits },
  }: RecruitmentResponse = await getRecruitmentList("/jptest?page=1");

  return (
    <LayoutWrapper>
      <RecruitCardList recruits={recruits} />
    </LayoutWrapper>
  );
}
