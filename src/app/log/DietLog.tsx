"use client";

import { useDietOfDay } from "@/lib/firebase/api/dietAPI";
import Image from "next/image";

export default function DietLog() {
  const { data, isLoading, isError } = useDietOfDay(new Date());
  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;
  if (!data) return <div></div>;

  return (
    <div>
      <h2>식습관</h2>
      {data.map((diet) => (
        <div key={diet.id}>
          <div>{diet.name}</div>
          <div>{diet.calorie}</div>
          <Image src={diet.imageURL} alt={diet.name} width={100} height={100} />
        </div>
      ))}
    </div>
  );
}
