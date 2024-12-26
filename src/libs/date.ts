export const getCurrentDateAndTime = () => {
  const now = new Date();
  const baseDate = now.toISOString().slice(0, 10).replace(/-/g, ''); // YYYYMMDD
  const baseTime = now.toTimeString().slice(0, 5).replace(':', '').padStart(4, '0'); // HHmm
  return { baseDate, baseTime };
};
