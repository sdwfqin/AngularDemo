import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';

import {HeroesComponent} from './heroes/heroes.component';
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {HeroService} from "./hero.service";
import {AppComponent} from "./app.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {appRoutes} from "./app.routes";
import {InMemoryDataService} from "./in-memory-data.service";
import {InMemoryWebApiModule} from "angular-in-memory-web-api";
import {HeroSearchService} from "./hero-search/hero-search.service";
import {HeroSearchComponent} from "./hero-search/hero-search.component";
import {RouterModule} from "@angular/router";
import {InputComponent} from "./input/input.component";
import {FormComponent} from "./form/form.component";

//它接收一个用来描述模块属性的元数据对象
@NgModule({
  //declarations （声明） - 视图类属于这个模块。 Angular 有三种类型的视图类： 组件 、 指令 和 管道 。
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent,
    HeroSearchComponent,
    InputComponent,
    FormComponent
  ],
  //本模块组件模板中需要由其它导出类的模块
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    //将Http客户端默认的后端服务替换成了内存 Web API服务(这是一个辅助服务，负责与远程服务器对话)
    InMemoryWebApiModule.forRoot(InMemoryDataService),
    RouterModule.forRoot(appRoutes)
  ],
  //exports - 声明（ declaration ）的子集，可用于其它模块中的组件模板 。
  exports: [
  ],
  //服务的创建者。本模块把它们加入全局的服务表中，让它们在应用中的任何部分都可被访问到。
  providers: [
    HeroService,
    HeroSearchService
  ],
  //bootstrap - 应用的主视图，称为根组件，它是所有其它应用视图的宿主。只有根模块需要设置 bootstrap 属性中。
  bootstrap: [AppComponent]
})

export class AppModule {
}
