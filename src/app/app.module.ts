import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


import { AppComponent } from './app.component';
import { MovieslistService } from './services/movieslist/movieslist.service';
import { ProductComponent } from './product/product.component';
import { MembersComponent } from './members/members.component';
import { ListComponent } from './list/list.component';
import { SortPipe } from './app.sort';

@NgModule({
    declarations: [
        SortPipe,
        AppComponent,
        ProductComponent,
        MembersComponent,
        ListComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
          {path: 'member', component: MembersComponent},
          {path: 'product', component: ProductComponent},
          {path: 'movie', component: ListComponent}
        ])
    ],
    providers: [MovieslistService],
    bootstrap: [AppComponent]
})
export class AppModule { }
