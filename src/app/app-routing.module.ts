import { NgModule } from "@angular/core";
import { HomeComponent } from "./Routing-Concept/home/home.component";
import { ServersComponent } from "./Routing-Concept/servers/servers.component";
import { ServerComponent } from "./Routing-Concept/servers/server/server.component";
import { EditServerComponent } from "./Routing-Concept/servers/edit-server/edit-server.component";
import { UsersComponent } from "./Routing-Concept/users/users.component";
import { PageNotFComponent } from "./Routing-Concept/page-not-f/page-not-f.component";
import { Router, RouterModule, Routes } from "@angular/router";
import { ServerResolverService } from "./Routing-Concept/servers/server-resolver.service";
import { Recipe } from "./recipes/recipe.model";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";


// route is simply array of javascript objects which represent where each object represent a route.
const appRoutes: Routes = [
    // don't add slash ahead of users or servers.
    // Recipe & Shopping List routing - 24/1 -4:45
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    { path: 'recipes', component: RecipesComponent, },
    { path: 'shopping-list', component: ShoppingListComponent, },
    { path: 'shooping-item', component: ShoppingEditComponent, }
]
@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}

//   { path: '', redirectTo: '/recipes', pathMatch: 'full' },
//     {
//         path: 'servers', component: ServersComponent, children: [
//             { path: ':id', component: ServerComponent, resolve: { server: ServerResolverService } },
//             { path: ':id/edit', component: EditServerComponent }
//         ]
//     },
//     {
//         path: 'users', component: UsersComponent, children: [
//             { path: ':id/name', component: UsersComponent }
//         ]
//     },
//     { path: 'not-found', component: PageNotFComponent },
//     { path: '**', redirectTo: '/not-found' },
