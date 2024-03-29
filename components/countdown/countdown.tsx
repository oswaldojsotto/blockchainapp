"use client";
import React from "react";
import DateTimeDisplay from "@/components/countdown/date-and-time";
import { useCountdown } from "@/hooks/use-countdown";

const ExpiredNotice = () => {
  return (
    <div className="expired-notice">
      <span>Expired!!!</span>
      <p>Please select a future date and time.</p>
    </div>
  );
};

const ShowCounter = ({ days, hours, minutes, seconds }: ShowCounterProps) => {
  return (
    <div className="w-auto">
      <div className="w-auto flex text-[24px] font-bold ">
        <DateTimeDisplay value={days} type={"Days"} isDanger={days <= 3} />
        <p className="">:</p>
        <DateTimeDisplay value={hours} type={"Hours"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={minutes} type={"Mins"} isDanger={false} />
        <p>:</p>
        <DateTimeDisplay value={seconds} type={"Seconds"} isDanger={false} />
      </div>
    </div>
  );
};

const CountdownTimer = ({ targetDate }: CTProps) => {
  const [days, hours, minutes, seconds] = useCountdown(targetDate);

  if (days + hours + minutes + seconds <= 0) {
    return <ExpiredNotice />;
  } else {
    return (
      <ShowCounter
        days={days}
        hours={hours}
        minutes={minutes}
        seconds={seconds}
      />
    );
  }
};

export default CountdownTimer;
