import {DashboardComponent} from "./dashboard/dashboard.component";
import {HeroesComponent} from "./heroes/heroes.component";
import {HeroDetailComponent} from "./hero-detail/hero-detail.component";
import {InputComponent} from "./input/input.component";
import {FormComponent} from "./form/form.component";

export const appRoutes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard',  component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes',     component: HeroesComponent },
  { path: 'input',     component: InputComponent },
  { path: 'form',     component: FormComponent }
];
