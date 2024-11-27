export const getDayComplete = (day: Date) => {
    const DT = new Date(day);
    const D = DT.getDay();
    const M = DT.toLocaleString("es-ES", { month: "short", year: "numeric" });
    const completeDay = `${D} ${M}`;
    return completeDay;
  };