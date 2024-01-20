import React, { useState, useEffect } from "react";
import Search from "./Search";

export default function Time() {
  const [time, setTime] = useState("");
  const [date, setDate] = useState("");

  const updateDateTime = () => {
    const now = new Date();

    const formattedTime = `${formatDigit(now.getHours())}:${formatDigit(
      now.getMinutes()
    )}`;
    setTime(formattedTime);

    const formattedDate = `${formatDay(
      now.getDay()
    )}—${now.getDate()} ${formatMonth(now.getMonth())}`;
    setDate(formattedDate);
  };

  const formatDigit = (digit) => (digit < 10 ? `0${digit}` : `${digit}`);

  const formatDay = (dayIndex) => {
    const days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ];
    return days[dayIndex];
  };

  const formatMonth = (monthIndex) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    return months[monthIndex];
  };

  useEffect(() => {
    updateDateTime();
    const intervalId = setInterval(updateDateTime, 60000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <div>
      <div className="row">
        <p className="time">{time}</p>
        <i className="fa-solid fa-battery-three-quarters"></i>
      </div>
      <Search date={date} />
    </div>
  );
}
