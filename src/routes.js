import App from './containers/App';
//import GsgsHome from 'pages/Gsgs/Home.js';
//import GsgsIndex from 'pages/Gsgs';

function errorLoading(err) {
  console.error('Dynamic page loading failed', err);
}

function loadRoute(cb) {
  console.log('load route called');
  return (module) => cb(null, module.default);
}

const obj = {
  component: App
};

console.log(obj);


export default obj;



/*,
  childRoutes: [
    {
      path: '/',
      getComponent(location, cb) {
        System.import('pages/Home')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    }
  ]*/
/*,
      childRoutes: [
        {
          path: '/',
          getComponent(location, cb) {
            System.import('pages/Gsgs/Home.js')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        }
      ]*/




/*      ,
    {
      path: 'gsgs',
      getComponent(location, cb) {
        System.import('pages/Gsgs')
          .then(loadRoute(cb))
          .catch(errorLoading);
      },
      childRoutes: [
        {
          path: 'go',
          getComponent(location, cb) {
            System.import('pages/Gsgs/Home.js')
              .then(loadRoute(cb))
              .catch(errorLoading);
          },
        }
      ]
    },
    {
      path: 'about',
      getComponent(location, cb) {
        System.import('pages/About')
          .then(loadRoute(cb))
          .catch(errorLoading);
      }
    },*/