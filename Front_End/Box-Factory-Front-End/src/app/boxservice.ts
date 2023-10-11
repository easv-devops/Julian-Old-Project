import {Injectable} from "@angular/core";
import {Box} from "./home/home.page";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BoxService{
  boxes: Box[] = [];

  constructor() {
  }

  async getData(): Promise<Box[]> {
    const data = await fetch('http://localhost:5054/api/inventory');
    return await data.json() ?? [];
  }
}
