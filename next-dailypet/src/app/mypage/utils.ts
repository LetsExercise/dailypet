/* 06:00 PM -> 1800 (number) */
export const timeFormat = (time: string) => {
const [timeToken, meridiem] = time.split(" ");
const [hour, minute] = timeToken.split(":");

return meridiem === "PM"
    ? (Number(hour) + 12) * 100 + Number(minute)
    : Number(hour) * 100 + Number(minute);
};