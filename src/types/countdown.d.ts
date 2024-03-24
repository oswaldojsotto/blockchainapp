
interface CTProps {
    targetDate: number;
}
  
interface ShowCounterProps {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
}
  
interface DateTimeProps {
    value: number;
    type: string;
    isDanger: boolean;
  }