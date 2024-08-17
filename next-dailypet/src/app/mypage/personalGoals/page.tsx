import Link from "next/link";

export default function PersonalGoalsPage() {
  return (
    <div>
      <h1>Personal Goal Page</h1>
      <div>
        개인 목표를 설정해봅시다! 설정한 목표에 따라 점수가 계산되고 캐릭터의
        상태가 달라져요~~~ 같은 설명 추가
      </div>
      <Link href="/mypage/personalGoals/sleep">설정하기</Link>
    </div>
  );
}
