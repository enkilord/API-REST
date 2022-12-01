import { Model } from "../manager.model/model"

export class Product extends Model {

    set userId(userId: number) {
    this.userId = userId
    }

    get userId(): number {
    return this.userId
    }

    set name(name: string) {
    this.name = name
    }

    get name(): string {
    return this.name
    }

    set price(price: string) {
    this.price = price
    }

    get price(): string {
    return this.price
    }
}