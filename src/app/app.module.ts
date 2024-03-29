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
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ActiveUsersComponent } from './active-users/active-users.component';
import { InactiveeUsersComponent } from './inactivee-users/inactivee-users.component';
import { CounterService } from './counter.service';
import { RecipeService } from './recipes/recipes.service';
import { ShoppingService } from './shopping-list/shopping.service';
import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { UserComponent } from './Observable_Concept/user/user.component';
import { HomeComponent } from './Observable_Concept/home/home.component';
import { FormsHandlingComponent } from './forms-handling/forms-handling.component';
import { ReactiveComponent } from './forms-handling/reactive/reactive.component';
import { Assignment3Component } from './forms-handling/assignment3/assignment3.component';
import { CustomValidator } from './forms-handling/assignment3/custom-validators';
import { PipesConceptComponent } from './pipes-concept/pipes-concept.component';
import { FilterPipe } from './pipes-concept/filter.pipe';
import { FirebaseDatabaseComponent } from './firebase-database/firebase-database.component';
import { firebaseInterceptior } from './firebase-database/firebase-databse.interceptor';
import { LogginInterceptor } from './firebase-database/firebase-databse/logging.interceptor';
import { AuthComponent } from './Auth/auth/auth.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
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
    RecipeStartComponent,
    RecipeEditComponent,
    UserComponent,
    HomeComponent,
    FormsHandlingComponent,
    ReactiveComponent,
    Assignment3Component,
    PipesConceptComponent,
    // FilterPipe,
    RecipeListComponent,
    FilterPipe,
    FirebaseDatabaseComponent,
    AuthComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [AcccountService, LogginService, CounterService, RecipeService, ShoppingService,
    {provide : HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi : true},
     {provide : HTTP_INTERCEPTORS, useClass: firebaseInterceptior, multi : true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
