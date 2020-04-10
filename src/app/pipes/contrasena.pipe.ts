import { Pipe, PipeTransform } from "@angular/core";
import { stringify } from "querystring";

@Pipe({
  name: "contrasena",
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, activar: boolean): string {
    if (!activar) return value;
    let cadena: string = "";
    for (let i = 0; i < value.length; i++) {
      cadena += "*";
    }
    return cadena;
  }
}
