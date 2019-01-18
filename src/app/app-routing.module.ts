import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';

const appRoutes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'bodyView' },
    { path: 'bodyView', component: BodyComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule { }