import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Baitap3Component } from "./baitap3.component";
import { BaiTap3HeaderComponent } from "./bai-tap3-header/bai-tap3-header.component";
import { BaiTap3ContentComponent } from "./bai-tap3-content/bai-tap3-content.component";
import { BaiTap3SidebarComponent } from "./bai-tap3-sidebar/bai-tap3-sidebar.component";
import { BaiTap3FooterComponent } from "./bai-tap3-footer/bai-tap3-footer.component";

@NgModule({
  declarations: [
    Baitap3Component,
    BaiTap3HeaderComponent,
    BaiTap3ContentComponent,
    BaiTap3SidebarComponent,
    BaiTap3FooterComponent
  ],
  exports: [
    Baitap3Component,
    BaiTap3HeaderComponent,
    BaiTap3ContentComponent,
    BaiTap3SidebarComponent,
    BaiTap3FooterComponent
  ],
  imports: [CommonModule]
})
export class Baitap3Module {}
