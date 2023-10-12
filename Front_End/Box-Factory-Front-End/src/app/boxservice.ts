import {Injectable} from "@angular/core";
import {Box} from "./home/home.page";
import {firstValueFrom} from "rxjs";

@Injectable({
  providedIn: 'root'
})

export class BoxService{
  boxes: Box[] = [];
  private isEditingTrue: boolean = false;
  private box: Box | undefined;

  getIsEditingTrue(): boolean {
    return this.isEditingTrue;
  }

  setIsEditingTrue(value: boolean): void {
    this.isEditingTrue = value;
  }

  getBox(): Box | undefined {
    return this.box;
  }

  setBox(newBox: Box | undefined): void {
    this.box = newBox;

  constructor() {
  }

  async getData(): Promise<Box[]> {
    const data = await fetch('http://localhost:5054/api/inventory');
    return await data.json() ?? [];

  }
}
