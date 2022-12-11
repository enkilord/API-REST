export interface Route {
    name: string,
    method: string,
    require_auth: boolean,
    invoke: string,
}

export interface Parameter {
    name: string,
    db_type: string,
    js_type: string,
    nullable: boolean,
    foreign_key: string,
};

export interface Table {
    name: string,
    parameters: Parameter[],
    routes: Route[],
}

export interface OrmConfig {
    tables: Table[],
}