import { Pipe, PipeTransform } from "@angular/core";
import { stringify } from "querystring";

@Pipe({
  name: "contrasena",
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, activar: boolean): string {
    return activar ? "*".repeat(value.length) : value;
  }
}
