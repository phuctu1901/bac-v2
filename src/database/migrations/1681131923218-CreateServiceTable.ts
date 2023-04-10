import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateServiceTable1681131923218 implements MigrationInterface {
  name = 'CreateServiceTable1681131923218';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "service" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), "serviceName" character varying, "description" character varying, "shortDescription" character varying, "price" character varying, "idServiceType" integer, "isRunning" boolean, CONSTRAINT "PK_85a21558c006647cd76fdce044b" PRIMARY KEY ("id"))`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(`DROP TABLE "service"`);
  }
}
