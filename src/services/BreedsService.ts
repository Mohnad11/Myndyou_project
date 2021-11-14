import BaseService from "./BaseService";
import {RequestMethod} from "../utils/Enums";
import IBreed from "../types/IBreed";


export default class BreedsService{
    public static async fetchAll(): Promise<IBreed[]> {
        return new Promise((resolve, reject) => {
            BaseService(
                'breeds/list/all',
                RequestMethod.GET,
            ).then(x=>{
                let breeds:IBreed[] = [];
                if(x.message){

                    for (const [key, value] of Object.entries(x.message)) {
                        breeds.push({name:key})
                    }
                }
                resolve(breeds);
            }).catch(e=>{
                reject(e);
            })
        })
    }
    public static async fetchRandomImages(breed:string): Promise<string[]>{
        return new Promise((resolve, reject) => {
            BaseService(
                `breed/${breed}/images/random/10`,
                RequestMethod.GET,
            ).then(x=>{
            
                if(x.message){

                    resolve(x.message);
                }
                resolve([])
            }).catch(e=>{
                reject(e);
            })
        })
    }
}
