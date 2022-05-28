import {MigrationInterface, QueryRunner} from "typeorm";

export class createProduct1653756674391 implements MigrationInterface {
    name = 'createProduct1653756674391'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "product" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "title" character varying NOT NULL, "description" character varying NOT NULL, "price" integer NOT NULL, "discountPercentage" integer NOT NULL, "rating" integer NOT NULL, "stock" integer NOT NULL, "brand" character varying NOT NULL, "category" character varying NOT NULL, CONSTRAINT "PK_bebc9158e480b949565b4dc7a82" PRIMARY KEY ("id"))`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`DROP TABLE "product"`);
    }

}
