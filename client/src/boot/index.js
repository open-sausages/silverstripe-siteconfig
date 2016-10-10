import { combineReducers } from 'redux';
import Config from 'lib/Config';
import reactRouteRegister from 'lib/ReactRouteRegister';
import SiteConfigAdmin from 'containers/SiteConfigAdmin';

document.addEventListener('DOMContentLoaded', () => {
  const sectionConfig = Config.getSection('SilverStripe\\SiteConfig\\SiteConfigLeftAndMain');
  reactRouteRegister.add({
    path: sectionConfig.url,
    component: SiteConfigAdmin,
    indexRoute: {
      // Show root folder by default
      onEnter: (nextState, replace) => {
        const redirectUrl = [
          sectionConfig.url,
          'show',
          0,
        ].join('/');
        replace(redirectUrl);
      },
    },
    childRoutes: [
      {
        path: 'show/:folderId',
        component: SiteConfigAdmin,
      },
    ],
  });

});
