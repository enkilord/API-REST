import { Model } from "../manager.model/model"

export class Role extends Model {

    set name(name: string) {
    this.name = name
    }

    get name(): string {
    return this.name
    }
}