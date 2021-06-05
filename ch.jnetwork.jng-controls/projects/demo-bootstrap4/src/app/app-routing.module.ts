import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'input',
    loadChildren: () =>
      import('./input/input.module').then((m) => m.InputModule),
  },
  {
    path: 'button',
    loadChildren: () =>
      import('./button/button.module').then((m) => m.ButtonModule),
  },
  {
    path: 'checkbox',
    loadChildren: () =>
      import('./checkbox/checkbox.module').then((m) => m.CheckboxModule),
  },
  {
    path: 'datetime',
    loadChildren: () =>
      import('./datetime/datetime.module').then((m) => m.DatetimeModule),
  },
  {
    path: 'list',
    loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then((m) => m.TabsModule),
  },
  {
    path: 'confirm',
    loadChildren: () =>
      import('./confirm/confirm.module').then((m) => m.ConfirmModule),
  },
  {
    path: 'dialog',
    loadChildren: () =>
      import('./dialog/dialog.module').then((m) => m.DialogModule),
  },
  {
    path: 'grid',
    loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule),
  },
  {
    path: 'uploader',
    loadChildren: () =>
      import('./uploader/uploader.module').then((m) => m.UploaderModule),
  },
  {
    path: 'multilanguage',
    loadChildren: () =>
      import('./multilanguage/multilanguage.module').then(
        (m) => m.MultilanguageModule
      ),
  },
  {
    path: 'browser',
    loadChildren: () =>
      import('./browser/browser.module').then((m) => m.BrowserModule),
  },
  {
    path: '**',
    redirectTo: '/input',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
