/**
 * Created by Allen Liu on 2019/11/22.
 */
export default [
    {
        name:'@lwh-demo2',
        path: '@lwh-demo2',
        component: () => import(/* webpackChunkName: "chunk/@lwh-demo2" */'@mods/@lwh-demo2/views/lwh-demo2/index.vue')
    }
]