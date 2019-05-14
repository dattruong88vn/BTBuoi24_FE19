import { Component, OnInit } from '@angular/core';
import { SanPham } from './sanpham/sanpham';

@Component({
  selector: 'app-baitap-buoi24',
  templateUrl: './baitap-buoi24.component.html',
  styleUrls: ['./baitap-buoi24.component.scss']
})


export class BaitapBuoi24Component implements OnInit {
  sp = new SanPham();
  mang:Array<SanPham> = [];

  constructor() { }

  ngOnInit() {
    let a = JSON.parse(localStorage.getItem('danhsach'));
    if (a !== null) {
      this.mang = a;
      console.log(this.mang);
    }
  }

  themSP(ma, ten, gia) {
    this.sp.maSP = ma;
    this.sp.tenSP = ten;
    this.sp.giaSP = gia;
    this.mang.push(this.sp);
    console.log(this.mang);
    localStorage.setItem('danhsach', JSON.stringify(this.mang));
  }

  

}

