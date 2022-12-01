import { Model } from "../manager.model/model"

export class User extends Model {

    set roleId(roleId: number) {
    this.roleId = roleId
    }

    get roleId(): number {
    return this.roleId
    }

    set username(username: string) {
    this.username = username
    }

    get username(): string {
    return this.username
    }

    set password(password: string) {
    this.password = password
    }

    get password(): string {
    return this.password
    }

    set email(email: string) {
    this.email = email
    }

    get email(): string {
    return this.email
    }

    set adresse(adresse: string) {
    this.adresse = adresse
    }

    get adresse(): string {
    return this.adresse
    }
}