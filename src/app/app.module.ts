import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { Baitap1Component } from "./baitap1/baitap1.component";
import { Baitap1HeaderComponent } from "./baitap1/baitap1-header/baitap1-header.component";
import { Baitap1ContentComponent } from "./baitap1/baitap1-content/baitap1-content.component";
import { Baitap1SideBarComponent } from "./baitap1/baitap1-side-bar/baitap1-side-bar.component";
import { Baitap1FooterComponent } from "./baitap1/baitap1-footer/baitap1-footer.component";
import { Baitap2Component } from "./baitap2/baitap2.component";
import { Baitap2HeaderComponent } from "./baitap2/baitap2-header/baitap2-header.component";
import { Baitap2SlideComponent } from "./baitap2/baitap2-slide/baitap2-slide.component";
import { Baitap2ContentComponent } from "./baitap2/baitap2-content/baitap2-content.component";
import { WhatWeDoComponent } from "./baitap2/baitap2-content/what-we-do/what-we-do.component";
import { ContactComponent } from "./baitap2/baitap2-content/contact/contact.component";
import { Baitap2ListComponent } from "./baitap2/baitap2-list/baitap2-list.component";
import { Baitap2CardComponent } from "./baitap2/baitap2-list/baitap2-card/baitap2-card.component";
import { Baitap2FooterComponent } from "./baitap2/baitap2-footer/baitap2-footer.component";
import { Baitap3Module } from "./baitap3/baitap3.module";
import { BaitapBuoi24Module } from './baitap-buoi24/baitap-buoi24.module';

@NgModule({
  declarations: [
    AppComponent,
    Baitap1Component,
    Baitap1HeaderComponent,
    Baitap1ContentComponent,
    Baitap1SideBarComponent,
    Baitap1FooterComponent,
    Baitap2Component,
    Baitap2HeaderComponent,
    Baitap2SlideComponent,
    Baitap2ContentComponent,
    WhatWeDoComponent,
    ContactComponent,
    Baitap2ListComponent,
    Baitap2CardComponent,
    Baitap2FooterComponent
  ],
  imports: [BrowserModule, Baitap3Module, BaitapBuoi24Module],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
