export function dateFormatYYYYMMDDHHMMSS(date : string){
    const baseDay = new Date(date);
    const formatDate = baseDay.getDate() < 10 ? `0${baseDay.getDate()}` : baseDay.getDate();
    const formatMonth = baseDay.getMonth() < 9 ? `0${baseDay.getMonth() + 1}` : baseDay.getMonth() + 1;
    const formatHour = baseDay.getHours() < 10 ? `0${baseDay.getHours()}` : baseDay.getHours();
    const formatMinute = baseDay.getMinutes() < 10 ? `0${baseDay.getMinutes()}` : baseDay.getMinutes();
    const formatSecond = baseDay.getSeconds() < 10 ? `0${baseDay.getSeconds()}` : baseDay.getSeconds();
    const formattedDate = [baseDay.getFullYear(), formatMonth, formatDate].join('-') + ' (' + [formatHour, formatMinute, formatSecond].join(':') + ')';
    return formattedDate;
}