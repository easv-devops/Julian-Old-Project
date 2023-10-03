import {Injectable} from "@angular/core";
import {Box} from "./home/home.page";

@Injectable({
  providedIn: 'root'
})

export class BoxService{
  boxes: Box[] = [];
}
