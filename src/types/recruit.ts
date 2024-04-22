export interface ICompanyItem {
  id: number;
  logo: string;
  name: string;
  grade: number;
  grade_count: number;
  ratings: any;
}

export interface IRecruitItem {
  id: number;
  bookmark: boolean;
  image: string;
  title: string;
  skills: string[];
  appeal: string;
  company: ICompanyItem;
  reward_text: string;
}

export interface RecruitmentResponse {
  status: string;
  code: number;
  data: {
    total_count: number;
    recruits: IRecruitItem[];
  };
}
