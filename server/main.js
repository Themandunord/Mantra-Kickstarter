import publications from './publications';
import methods from './methods';
import configs from './configs';


configs();
publications();
methods();


// Injec Loader's html before script was loaded
if (Meteor.isServer) {
    Inject.rawHead("loader", Assets.getText('loader/loader.html'));
}
