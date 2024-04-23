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
    //page가 3까지만 실행
    if (page > 3) {
      return;
    }

    const {
      data: { recruits: moreRecruits },
    } = await getRecruitmentList(`/jptest?page=${page + 1}`);
    setNewRecruits([...newRecruits, ...moreRecruits]);
    setPage((prev) => prev + 1);
  }, [page]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          getMoreData();
        }
      },
      { threshold: 0.5 }
    );

    if (scrollCheckerRef.current) {
      observer.observe(scrollCheckerRef.current);
    }

    return () => {
      if (scrollCheckerRef.current) {
        observer.unobserve(scrollCheckerRef.current);
      }
    };
  }, [getMoreData]);

  return (
    <>
      {newRecruits.map((recruit: IRecruitItem) => (
        <RecruitCard key={recruit.id} recruit={recruit} />
      ))}
      <div ref={scrollCheckerRef} />
    </>
  );
}
