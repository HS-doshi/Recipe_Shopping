import { NgModule } from "@angular/core";
import { HomeComponent } from "./Routing-Concept/home/home.component";
import { ServersComponent } from "./Routing-Concept/servers/servers.component";
import { ServerComponent } from "./Routing-Concept/servers/server/server.component";
import { EditServerComponent } from "./Routing-Concept/servers/edit-server/edit-server.component";
import { UsersComponent } from "./Routing-Concept/users/users.component";
import { PageNotFComponent } from "./Routing-Concept/page-not-f/page-not-f.component";
import { RouterModule, Routes } from "@angular/router";


const appRoutes: Routes = [
    // don't add slash ahead of users or servers.
    { path: '', component: HomeComponent },
    {
        path: 'servers', component: ServersComponent, children: [
            { path: ':id', component: ServerComponent },
            { path: ':id/edit', component: EditServerComponent }
        ]
    },
    {
        path: 'users', component: UsersComponent, children: [
            { path: ':id/name', component: UsersComponent }
        ]
    },
    { path: 'not-found', component: PageNotFComponent },
    { path: '**', redirectTo: '/not-found', pathMatch: 'full' },
]
@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule {

} 