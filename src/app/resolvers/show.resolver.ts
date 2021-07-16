import { Injectable } from '@angular/core';
import {
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot
} from '@angular/router';
import { ShowService } from "../services/show.service";

@Injectable({
  providedIn: 'root'
})
export class ShowResolver implements Resolve<Promise<any>> {
  constructor(
      private _service: ShowService
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any> {
    return this._service.getShow(route.paramMap.get('id') as string);
  }
}
