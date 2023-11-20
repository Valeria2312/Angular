import {Component, OnInit} from "@angular/core";
import {NavigationEnd, Router} from "@angular/router";
import {filter, takeUntil} from "rxjs";
import {DestroyService} from "../../services/destroy.service";

@Component({
  selector: 'app-data-page',
  templateUrl: './data-page.component.html',
  styleUrls: ['./data-page.component.css']
})
export class DataPageComponent implements OnInit {
  readonly tabs = [
    {
      text: 'Таблица',
      link: 'tables',
    },
    {
      text: 'График',
      link: 'graphs',
    },
  ];
  currentTabLink = this.tabs[0].link;
  constructor(
    private router: Router,
    // ошибки в компоненте
    // private destroy$: DestroyService,
    ) {
    this.router.events
      .pipe(
        filter(event => event instanceof NavigationEnd),
        // takeUntil(this.destroy$),
      )
      .subscribe(() => {
        const url = this.router.url;
        this.currentTabLink = url.slice(url.lastIndexOf('/') + 1);
      });
  }
  ngOnInit(): void {
    // Установить текущий таб на первый при инициализации компонента
    this.currentTabLink = this.tabs[0].link;
  }
}
