import {ComponentClass, ComponentState, FC, lazy, LazyExoticComponent} from 'react';

interface Menu {
    title: string;
    url: string;
    component: LazyExoticComponent<FC> | LazyExoticComponent<ComponentClass<ComponentState>>;
}

export const menu: Menu[] = [
    {title: 'useState', url: '/useState', component: lazy(() => import('./use-state'))},
    {title: 'useEffect', url: '/useEffect', component: lazy(() => import('./use-effect'))},
    {title: 'useContext', url: '/useContext', component: lazy(() => import('./use-context'))},
    {title: 'useReducer', url: '/useReducer', component: lazy(() => import('./use-reducer'))}
];
