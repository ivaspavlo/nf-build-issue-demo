import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'fi-mfe',
    loadChildren: () => loadRemoteModule('fi-mfe', './routes').then((m: any) => m.FI_MFE_ROUTES)
  }
];
