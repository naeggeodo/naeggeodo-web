type AMPM = '오전' | '오후';

export default class DateFormatter {
  private stringDate: string;
  public date: string;
  private hour: number;
  private minute: number;

  constructor(stringDate: string) {
    this.stringDate = stringDate;
    this.date = this.stringDate.split('T')[0];
    this.hour = +this.stringDate.split('T')[1].split(':').slice(0, 2)[0];
    this.minute = +this.stringDate.split('T')[1].split(':').slice(0, 2)[1];
  }

  static getNowDate() {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const hour = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const result = `${year}-${String(month).padStart(2, '0')}-${String(
      day,
    ).padStart(2, '0')}T${String(hour).padStart(2, '0')}:${String(
      minutes,
    ).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;

    return result;
  }

  formatDate() {
    return this.date.split('-').slice(1).join('/');
  }

  formatTime() {
    let ampm: AMPM;
    let result: string;

    const min = String(this.minute).padStart(2, '0');

    if (this.hour >= 12 && this.hour <= 24) {
      ampm = '오후';

      if (this.hour === 12) result = `${ampm} 12:${min}`;
      else result = `${ampm} ${this.hour - 12}:${min}`;
    } else {
      ampm = '오전';
      result = `${ampm} ${this.hour}:${min}`;
    }
    return result;
  }
}
