"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeOrmConfig = {
    type: 'mssql',
    host: process.env.SQLCONNSTR_SERVER_NAME || 'uni-dev-dbamp.eastus2.cloudapp.azure.com',
    port: 1433,
    username: process.env.SQLCONNSTR_USER || 'dbreadsvc',
    password: process.env.SQLCONNSTR_PASSWORD || 'un1gu3sT',
    database: process.env.SQLCONNSTR_DATABASE || 'Salesforce Backups',
    entities: [__dirname + '/../**/*.entity.{js,ts}'],
    synchronize: true,
    logging: ["error"],
    options: {
        encrypt: true
    },
};
//# sourceMappingURL=typeorm.config.js.map