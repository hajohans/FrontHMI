//Import bootstrap load
import {bootstrap}    from 'angular2/platform/browser';
//Import main application
import {AppComponent} from './app.component';
//Import Router Providers
import {ROUTER_PROVIDERS} from 'angular2/router';
//Load main application
bootstrap(AppComponent, [ROUTER_PROVIDERS]);
