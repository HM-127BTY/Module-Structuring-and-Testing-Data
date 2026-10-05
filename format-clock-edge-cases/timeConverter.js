function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const min = Number(time.slice(-2));

  if (hours === 12) {
    return `${time} pm`;
  } else if (hours === 0) {
    return `${(hours + 12).toString().padStart(2, "0")}:${min.toString().padStart(2, "0")} am`;
  } else if (hours > 12) {
    return `${(hours - 12).toString().padStart(2, "0")}:${min.toString().padStart(2, "0")} pm`;
  }
  return `${time} am`;
}

export { formatAs12HourClock };
