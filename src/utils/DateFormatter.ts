type AMPM = '오전' | '오후';

export default class DateFormatter {
  private stringDate: string;
  private date: string;
  private hour: number;
  private minute: number;

  constructor(stringDate: string) {
    this.stringDate = stringDate;
    this.date = this.stringDate.split('T')[0];
    this.hour = +this.stringDate.split('T')[1].split(':').slice(0, 2)[0];
    this.minute = +this.stringDate.split('T')[1].split(':').slice(0, 2)[1];
  }

  formatDate() {
    return this.date.split('-').slice(1).join('/');
  }

  formatTime() {
    let ampm: AMPM;
    let result: string;

    let min =
      this.minute < 10 ? String(this.minute).padStart(2, '0') : this.minute;

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
