import date from './date'
import json from './json'

export default{
    install(vue){
        vue.filter('date',date);
        vue.filter('json',date);
    }
}
