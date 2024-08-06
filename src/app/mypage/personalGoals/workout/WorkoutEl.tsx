import { MobileTimePicker } from "@mui/x-date-pickers";
import { formName } from "./formName";
import dayjs from "dayjs";

export default function WorkoutEl({ index }: { index: number }) {
  return (
    <div>
      <h3>{index}번 째 운동</h3>
      <select name={formName.week(index)} id="week">
        <option value="0">월</option>
        <option value="1">화</option>
        <option value="2">수</option>
        <option value="3">목</option>
        <option value="4">금</option>
        <option value="5">토</option>
        <option value="6">일</option>
      </select>
      <MobileTimePicker
        label="시작 시간"
        name={formName.start(index)}
        defaultValue={dayjs(new Date())}
      />
      <MobileTimePicker
        label="종료 시간"
        name={formName.end(index)}
        defaultValue={dayjs(new Date())}
      />
    </div>
  );
}
