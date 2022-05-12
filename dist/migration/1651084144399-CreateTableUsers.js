"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateTableUsers1651084144399 = void 0;
class CreateTableUsers1651084144399 {
    async up(queryRunner) {
        await queryRunner.query(`
            CREATE TABLE IF NOT EXISTS users (
                id INT PRIMARY KEY AUTO_INCREMENT,
                firstName VARCHAR(255) NOT NULL,
                lastName VARCHAR(255) NOT NULL,
                age INT CHECK (age > 0),
                phone VARCHAR(255) NOT NULL UNIQUE,
                email VARCHAR(255) NOT NULL UNIQUE,
                password VARCHAR(255) NOT NULL,
                createdAt TIMESTAMP DEFAULT(UTC_TIMESTAMP()) NOT NULL,
                deletedAt TIMESTAMP
            )
        `);
    }
    async down(queryRunner) {
        await queryRunner.query(`
            DROP TABLE IF EXISTS users
        `);
    }
}
exports.CreateTableUsers1651084144399 = CreateTableUsers1651084144399;
//# sourceMappingURL=1651084144399-CreateTableUsers.js.map