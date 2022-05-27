export default class TimeCalculator {
  private createStringDate: string[];
  private createStringTime: string[];
  private createYear: number;
  private createMonth: number;
  private createDate: number;
  private createHour: number;
  private createMinute: number;

  private currentYear: number;
  private currentMonth: number;
  private currentDate: number;
  private currentHour: number;
  private currentMinute: number;

  constructor(createDate: string) {
    const currentDate = new Date();

    this.createStringDate = createDate.split('T')[0].split('-');
    this.createStringTime = createDate.split('T')[1].split(':');
    this.createYear = +this.createStringDate[0];
    this.createMonth = +this.createStringDate[1];
    this.createDate = +this.createStringDate[2];
    this.createHour = +this.createStringTime[0];
    this.createMinute = +this.createStringTime[1];

    this.currentYear = currentDate.getFullYear();
    this.currentMonth = currentDate.getMonth() + 1;
    this.currentDate = currentDate.getDate();
    this.currentHour = currentDate.getHours();
    this.currentMinute = currentDate.getMinutes();
  }

  calculateCreateMinute() {
    const {
      createYear,
      createMonth,
      createDate,
      createHour,
      createMinute,
      currentYear,
      currentMonth,
      currentDate,
      currentHour,
      currentMinute,
    } = this;
    if (currentYear !== createYear) {
      return `${currentYear - createYear}년 전 `;
    } else if (currentYear === createYear && currentMonth !== createMonth) {
      return `${currentMonth - createMonth}개월 전`;
    } else if (
      currentYear === createYear &&
      currentMonth === createMonth &&
      currentDate !== createDate
    ) {
      const dateCount = currentDate - createDate;
      if (dateCount < 7) return `${dateCount}일 전`;
      else {
        return `${Math.floor(dateCount / 7)}주일 전`;
      }
    } else if (
      currentYear === createYear &&
      currentMonth === createMonth &&
      currentDate === createDate &&
      currentHour !== createHour
    ) {
      return `${currentHour - createHour}시간 전`;
    } else if (
      currentYear === createYear &&
      currentMonth === createMonth &&
      currentDate === createDate &&
      currentHour === createHour
    ) {
      if (currentMinute === createMinute) return '1분 전';
      else return `${currentMinute - createMinute}분 전`;
    }
  }
}
