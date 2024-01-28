import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { Recipe } from "./recipes/recipe.model";
import { RecipesComponent } from "./recipes/recipes.component";
import { ShoppingListComponent } from "./shopping-list/shopping-list.component";
import { ShoppingEditComponent } from "./shopping-list/shopping-edit/shopping-edit.component";
import { RecipeListComponent } from "./recipes/recipe-list/recipe-list.component";
import { RecipeDetailComponent } from "./recipes/recipe-detail/recipe-detail.component";
import { RecipeItemComponent } from "./recipes/recipe-list/recipe-item/recipe-item.component";
import { RecipeStartComponent } from "./recipes/recipe-start/recipe-start.component";
import { RecipeEditComponent } from "./recipes/recipe-edit/recipe-edit.component";


// route is simply array of javascript objects which represent where each object represent a route.
const appRoutes: Routes = [
    // don't add slash ahead of users or servers.
    // Recipe & Shopping List routing - 24/1 -4:45
    { path: '', redirectTo: '/recipes', pathMatch: 'full' },
    {
        path: 'recipes', component: RecipesComponent, children: [
            { path: '', component: RecipeStartComponent },
            { path: 'new', component: RecipeEditComponent },
            { path: ':id', component: RecipeDetailComponent },
            { path: ':id/edit', component: RecipeEditComponent }
            //id is dynamic parameter.
        ]
    },
    {
        path: 'shopping-list', component: ShoppingListComponent, children: [
            { path: 'shopping-edit-item', component: ShoppingEditComponent }
        ]
    },
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
