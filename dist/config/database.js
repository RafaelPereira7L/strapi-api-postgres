"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = ({ env }) => ({
    connection: {
        client: 'postgres',
        connection: {
            host: env('DATABASE_HOST', 'localhost'),
            port: env.int('DATABASE_PORT', 5432),
            database: env('DATABASE_NAME', 'db-name'),
            user: env('DATABASE_USERNAME', 'root'),
            password: env('DATABASE_PASSWORD', ''),
            ssl: env.bool('DATABASE_SSL', false),
        },
        pool: {
            min: 0,
            max: 5,
        },
    },
});
