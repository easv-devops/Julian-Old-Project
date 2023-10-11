import {Injectable} from "@angular/core";
import {Box} from "./home/home.page";

@Injectable({
  providedIn: 'root'
})

export class BoxService{
  boxes: Box[] = [];

  private isEditingTrue: boolean = false;

  getIsEditingTrue(): boolean {
    return this.isEditingTrue;
  }

  setIsEditingTrue(value: boolean): void {
    this.isEditingTrue = value;
  }

  private box: Box | undefined;

  getBox(): Box | undefined {
    return this.box;
  }

  setBox(newBox: Box | undefined): void {
    this.box = newBox;
  }
}
