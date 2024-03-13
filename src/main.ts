// @ts-ignore
import { initFederation } from '@angular-architects/native-federation';

initFederation('/assets/federation.manifest.json')
  .catch((err: any) => console.error(err))
  .then(() => import('./bootstrap'))
  .catch((err: any) => console.error(err));
