const API = "https://cea13314-94c5-4b7f-b96f-546f2fb397c9.mock.pstmn.io";

export const getRecruitmentList = async (query: string) => {
  return fetch(`${API}${query}`, {
    cache: "no-store",
  }).then((res) => res.json());
};
