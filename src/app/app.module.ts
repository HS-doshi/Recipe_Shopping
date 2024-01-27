import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './Header/header.component';
import { RecipesComponent } from './recipes/recipes.component';
import { RecipeListComponent } from './recipes/recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipes/recipe-detail/recipe-detail.component';
import { RecipeItemComponent } from './recipes/recipe-list/recipe-item/recipe-item.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { CookpitComponent } from './cookpit/cookpit.component';
import { ServerElementComponent } from './server-element/server-element.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { GameControlComponent } from './game-control/game-control.component';
import { EvenComponent } from './even/even.component';
import { OddComponent } from './odd/odd.component';
import { BasicHighlightDirective } from './basic-highlight/basic.hightlight.directive';
import { BeterHightlightDirective } from './beter-hightlight.directive';
import { UnlessDirective } from './unless.directive';
import { DropdownDirective } from './shared/dropdown.directive';
import { AccountComponent } from './account/account.component';
import { NewAccountComponent } from './new-account/new-account.component';
import { AcccountService } from './accounts.service';
import { LogginService } from './logging.service';
import { HttpClientModule } from '@angular/common/http';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveeUsersComponent } from './inactivee-users/inactivee-users.component';
import { CounterService } from './counter.service';
import { RecipeService } from './recipes/recipes.service';
import { ShoppingService } from './shopping-list/shopping.service';
import { HomeComponent } from './Routing-Concept/home/home.component';
import { ServersComponent } from './Routing-Concept/servers/servers.component';
import { UsersComponent } from './Routing-Concept/users/users.component';
import { EditServerComponent } from './Routing-Concept/servers/edit-server/edit-server.component';
import { ServerComponent } from './Routing-Concept/servers/server/server.component';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFComponent } from './Routing-Concept/page-not-f/page-not-f.component';
import { AppRoutingModule } from './app-routing.module';
import { ServerResolverService } from './Routing-Concept/servers/server-resolver.service';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { ObservableConceptComponent } from './observable-concept/observable-concept.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipesComponent,
    RecipeListComponent,
    RecipeDetailComponent,
    RecipeItemComponent,
    ShoppingListComponent,
    ShoppingEditComponent,
    CookpitComponent,
    ServerElementComponent,
    GameControlComponent,
    EvenComponent,
    OddComponent,
    BasicHighlightDirective,
    BeterHightlightDirective,
    UnlessDirective,
    DropdownDirective,
    AccountComponent,
    NewAccountComponent,
    ActiveUsersComponent,
    InactiveeUsersComponent,
    HomeComponent,
    ServersComponent,
    UsersComponent,
    EditServerComponent,
    ServerComponent,
    PageNotFComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    ObservableConceptComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AcccountService, LogginService, CounterService, RecipeService, ShoppingService, ServerResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
