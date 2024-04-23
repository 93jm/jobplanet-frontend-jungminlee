"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { IRecruitItem } from "@/types/recruit";
import { getRecruitmentList } from "@/api/fetch";
import RecruitCard from "@/components/RecruitCard";

interface IProps {
  recruits: IRecruitItem[];
}

export default function RecruitCardList({ recruits }: IProps) {
  const scrollCheckerRef = useRef<HTMLDivElement>(null);
  const [page, setPage] = useState(1);
  const [newRecruits, setNewRecruits] = useState<IRecruitItem[]>(recruits);

  const getMoreData = useCallback(async () => {
    //page가 4부터는 return
    if (page > 3) {
      return;
    }

    const {
      data: { recruits: moreRecruits },
    } = await getRecruitmentList(`/jptest?page=${page + 1}`);
    setNewRecruits([...newRecruits, ...moreRecruits]);
    setPage((prev) => prev + 1);
  }, [newRecruits, page]);

  const handleScroll = useCallback(() => {
    if (
      scrollCheckerRef.current &&
      window.innerHeight + window.scrollY >= scrollCheckerRef.current.offsetTop
    ) {
      getMoreData();
    }
  }, [getMoreData]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [handleScroll]);

  console.log(newRecruits);

  return (
    <>
      {newRecruits.map((recruit: IRecruitItem) => (
        <RecruitCard key={recruit.id} recruit={recruit} />
      ))}
      <div ref={scrollCheckerRef} />
    </>
  );
}
