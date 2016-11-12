import {createApp} from 'mantra-core';
import initContext from './configs/context';
import head from './configs/head'
import bert from './configs/bert'

// modules
import coreModule from './modules/core';
import layoutModule from './modules/layout';
import authModule from './modules/auth';
import commonModule from './modules/common';


// init context
const context = initContext();

head();
bert();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(layoutModule);
app.loadModule(authModule);
app.loadModule(commonModule);

app.init();

// Remove the loading spinner when the user have loaded all the scripts
if (Meteor.isClient) {
    Meteor.startup(function() {
        setTimeout(function() {
            $("#inject-loader-wrapper").fadeOut(200, function() { $(this).remove(); });
        }, 500);
    });
}
