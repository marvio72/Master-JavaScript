import { Pipe, PipeTransform } from "@angular/core";
import * as moment from "moment";

@Pipe({ name: 'formatoDate' })
export class MomentPipe implements PipeTransform {
  transform(value: Date | moment.Moment, formatoFecha: string): any {
    return moment(value).format(formatoFecha);
  }
}
