"use client";

import Image from "next/image";
import { useState } from "react";

interface IProps {
  image: string;
}

export default function RecruilThumbnail({ image }: IProps) {
  const [hasError, setHasError] = useState(false);
  return (
    <div className="relative h-[180px] rounded-tl-[12px] rounded-tr-[12px] overflow-hidden">
      <Image
        src={hasError ? "/asset/jobplanet_logo.png" : image}
        fill={true}
        sizes="100% 180px"
        alt="채용 대표 이미지"
        priority={true}
        onError={() => setHasError(true)}
      />
    </div>
  );
}
