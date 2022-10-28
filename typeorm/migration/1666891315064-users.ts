
import { table } from "console";
import { MigrationInterface, QueryRunner, Table} from "typeorm"
import { idColumn } from "../utils/idColumn";
import { varcharColumn } from "../utils/varcharColumns";

export class users1666891315064 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new table({
                name: 'users',
                columns: [
                idColumn('id'),
                varcharColumn('name', '100', false),
                varcharColumn('email', '255', false),
                varcharColumn('password', '64', false),
                ],
            }),

        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('users');
    }

}