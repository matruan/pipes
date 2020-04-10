import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "capitalizado",
})
export class CapitalizadoPipe implements PipeTransform {
  transform(value: any, todas: boolean = true): string {
    value = value.toLocaleLowerCase();
    let nombres = value.split(" ");
    todas
      ? (nombres = nombres.map((nombre) => {
          return nombre[0].toUpperCase() + nombre.substr(1);
        }))
      : (nombres[0] = nombres[0][0].toUpperCase() + nombres[0].substr(1));

    return nombres.join(" ");
  }
}
