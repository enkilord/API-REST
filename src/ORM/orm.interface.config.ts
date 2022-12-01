export interface OrmConfig {
    tables: Table[]
}

export interface Table {
    name: string,
    parameters: Parameter[]
}

export interface Parameter {
    name: string,
    db_type: string,
    js_type: string,
    nullable: boolean,
    foreign_key: string
};
