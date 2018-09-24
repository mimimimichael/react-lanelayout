import React from 'react'
import Loadable from 'react-loadable';

const LoadableComponent = Loadable({
  loader: () => import('./BrandStormer'),
  loading: ()=>'Loading...',
});

export default ()=> <LoadableComponent/>
