import { MobileTimePicker } from "@mui/x-date-pickers";
import dayjs from "dayjs";
import { formName } from "./formName";

export default function DietEl({ index }: { index: number }) {
  return (
    <div>
      <h3>{index}번 째 식단</h3>
      <input
        type="text"
        name={formName.label(index)}
        placeholder="식단이름설정 ex) 아점, 아침"
      />
      <MobileTimePicker
        label="식사 시간"
        name={formName.time(index)}
        defaultValue={dayjs(new Date())}
      />
    </div>
  );
}
