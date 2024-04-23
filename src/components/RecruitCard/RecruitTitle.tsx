import { Body3, H1 } from "@/components/textGroup";

interface IProps {
  title: string;
  skills: string[];
}

export default function RecruitTitle({ title, skills }: IProps) {
  return (
    <div>
      <H1 text={title} className="text-gray001" />
      <Body3 text={skills.join(", ")} className="text-gray002" />
    </div>
  );
}
