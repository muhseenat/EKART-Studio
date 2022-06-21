import { NLocaleResource } from '../src/app/n-services/n-localeResources.service';

export class localesService {
    
    //This method is only to be called during app bootstrap.
    static init(): any {
        localesService.localesInstance = new NLocaleResource();
        return localesService.localesInstance.getLang();
    }

    private static localesInstance: NLocaleResource;

    static getLocalesInstance(): any {
        return localesService.localesInstance;
    }
}