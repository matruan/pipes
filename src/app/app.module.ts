import { BrowserModule } from "@angular/platform-browser";
import { NgModule, LOCALE_ID } from "@angular/core";

import { registerLocaleData } from "@angular/common";
import localeEs from "@angular/common/locales/es";
import localeCa from "@angular/common/locales/ca";

import { AppComponent } from "./app.component";

registerLocaleData(localeEs);
registerLocaleData(localeCa);

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule],
  providers: [{ provide: LOCALE_ID, useValue: "es" }],
  bootstrap: [AppComponent],
})
export class AppModule {}
