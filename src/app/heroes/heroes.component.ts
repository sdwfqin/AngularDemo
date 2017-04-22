import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Hero} from "../hero";
import {HeroService} from "../hero.service";

@Component({
  // 一个 css 选择器，它告诉Angular在父级HTML中寻找一个<app-root>标签，然后创建该组件，并插入此标签中。
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
// ngOnInit 生命周期钩子
export class HeroesComponent implements OnInit {

  // 名字: 类型
  heroes: Hero[];
  selectedHero: Hero;

  // 构造函数
  constructor(private router: Router,
              private heroService: HeroService) {
  }

  getHeroes(): void {
    // 把回调函数作为参数传给承诺对象的then方法
    // lambda表达式
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }

  // 带有初始化逻辑的ngOnInit方法，Angular会在AppComponent激活时调用它。
  // 函数名(): 返回值 {}
  ngOnInit(): void {
    this.getHeroes();
  }

  // click方法
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }

  gotoDetail(): void {
    this.router.navigate(['/detail', this.selectedHero.id]);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.heroService.create(name)
      .then(hero => {
        this.heroes.push(hero);
        this.selectedHero = null;
      });
  }
  delete(hero: Hero): void {
    this.heroService
      .delete(hero.id)
      .then(() => {
        this.heroes = this.heroes.filter(h => h !== hero);
        if (this.selectedHero === hero) { this.selectedHero = null; }
      });
  }


}
