import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
require('../node_modules/core-js/client/shim.js');
require('../node_modules/zone.js/dist/zone.js');

import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);
