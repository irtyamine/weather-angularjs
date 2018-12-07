import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "toCelcuis" })
export class ToCelcius implements PipeTransform {

  transform(fh: string ): string {
      console.log(fh);
    var cel = Math.round(parseInt(fh, 10) - 273.15);
    return `${cel}°`;
  }

}