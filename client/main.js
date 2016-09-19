import {createApp} from 'mantra-core';
import initContext from './configs/context';

// modules
import coreModule from './modules/core';
import layoutModule from './modules/layout';
import authModule from './modules/auth';

// init context
const context = initContext();

// create app
const app = createApp(context);
app.loadModule(coreModule);
app.loadModule(layoutModule);
app.loadModule(authModule);
app.init();
