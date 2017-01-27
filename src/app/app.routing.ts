import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { AboutComponent }   from './about/about.component';
import { TeamComponent} from './team/team.component';
import { PlayerDetailComponent }   from './player-detail/player-detail.component';
import { AdminComponent }   from './admin/admin.component';


const appRoutes: Routes = [
  {
    path: '',
    component: WelcomeComponent
  }

];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
