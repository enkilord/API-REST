import { Fixture, DB_Parameter } from './interface.fixture';

export const getFixtures = (tableName: string): Fixture[] =>
    require(`./${tableName.toLocaleLowerCase()}.fixtures.json`);