import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { MatTab, MatTabGroup } from '@angular/material/tabs';
import { of, interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { MatIcon } from '@angular/material/icon';

@Component({
  selector: 'nga-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit{
  @ViewChild('tabGroup') tabGroup: MatTabGroup;
  numberOfTabs: number;

  ngAfterViewInit(): void {
    this.loopOfTabs();
  }

  private moveTab(currentIndex: number) {
    this.tabGroup.selectedIndex = currentIndex;
  }

  private loopOfTabs() {
    interval(5000).pipe(take(3)).subscribe((value) =>
    this.moveTab(value),
    error => console.log(error),
    () => this.loopOfTabs());
  }

}
