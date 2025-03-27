import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderLayoutComponent } from './header-layout/header-layout.component';
import { HeaderPagesComponent } from './headerComp/header-pages/header-pages.component';
import { HeaderCustomHeaderComponent } from './headerComp/header-custom-header/header-custom-header.component';
import { HeaderCustomLinkComponent } from './headerComp/header-custom-link/header-custom-link.component';
import { HeaderProductComponent } from './headerComp/header-product/header-product.component';
import { HeaderCategoriesComponent } from './headerComp/header-categories/header-categories.component';
import { HeaderMenuStyleComponent } from './headerComp/header-menu-style/header-menu-style.component';
import { HeaderMenuComponent } from './headerComp/header-menu/header-menu.component';
import { ArchiveComponent } from './headerComp/archive/archive.component';

@NgModule({
  declarations: [AppComponent, 
    
    HeaderComponent, SidebarComponent, HeaderLayoutComponent, HeaderPagesComponent, HeaderCustomHeaderComponent, HeaderCustomLinkComponent, HeaderProductComponent, HeaderCategoriesComponent, HeaderMenuStyleComponent, HeaderMenuComponent, ArchiveComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
