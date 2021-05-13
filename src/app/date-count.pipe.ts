import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateCount'
})
export class DateCountPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date=new Date(); //get current date and time
    let todayWithNoTime:any=new Date(today.getFullYear(), today.getMonth(), today.getDate())
    var dateDifference=Math.abs(value-todayWithNoTime)//returns value in miliseconds
    const secondsInDay=86400; //60 seconds *60 minutes in an hour * 24 hours a day
    var dateDifferenceSeconds= dateDifference*0.001; //converts milisenconds to seconds
    var dateCounter= dateDifferenceSeconds/secondsInDay;//get how many days are left

    if(dateCounter>=1 && value > todayWithNoTime){
      return dateCounter;
    }else{
    return null; //return the days left if the goal date has not been passed. But if it past due we post 0.
    }
  }

}
