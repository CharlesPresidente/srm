import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { TopComponent } from './containers/top/top.component';
import { LeftComponent } from './containers/left/left.component';
import { SearchComponent } from './components/search/search.component';
import { LogoComponent } from './components/logo/logo.component';
import { GroupEconomicComponent } from './components/group-economic/group-economic.component';
import { UserComponent } from './components/user/user.component';
import { BreadcrumpComponent } from './components/breadcrump/breadcrump.component';
import { TitlePageComponent } from './components/title-page/title-page.component';
import { ProductComponent } from './components/product/product.component';
import { ShortcutsComponent } from './components/shortcuts/shortcuts.component';
import { AlertsComponent } from './components/alerts/alerts.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatOptionModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
  MatDividerModule,
  MatFormFieldModule
} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    TopComponent,
    LeftComponent,
    SearchComponent,
    LogoComponent,
    GroupEconomicComponent,
    UserComponent,
    BreadcrumpComponent,
    TitlePageComponent,
    ProductComponent,
    ShortcutsComponent,
    AlertsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatDividerModule,
    MatIconModule,
    MatOptionModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
