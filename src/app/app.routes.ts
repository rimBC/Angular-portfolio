import { Routes } from '@angular/router';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ResumeComponent } from './resume/resume.component';
import { ContactComponent } from './contact/contact.component';
import { SelfPresentationComponent } from './self-presentation/self-presentation.component';

export const routes: Routes = [


{path:"Home", component:SelfPresentationComponent},

{path:"Portfolio", component:PortfolioComponent},

{path:"Resume", component:ResumeComponent},

{path:"Contact", component:ContactComponent},

{ path: '', redirectTo: '/Home', pathMatch: 'full' },


{ path: '**', redirectTo: '/Home' },

// {path:"", component:},

];
