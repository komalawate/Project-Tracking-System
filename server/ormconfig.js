const type = process.env.TYPEORM_TYPE || "mysql";
const username = process.env.TYPEORM_USERNAME || "root";
const password = process.env.TYPEORM_PASSWORD || "1234567890";
const host = process.env.TYPEORM_HOST || "localhost";
const port = parseInt(process.env.TYPEORM_PORT, 10) || 3306;
const database = process.env.TYPEORM_DATABASE || "test";

module.exports = {
  type,
  url:
    process.env.DATABASE_URL ||
    `${type}://${username}:${password}@${host}:${port}/${database}`,
  entities: [
    process.env.NODE_ENV === "test"
      ? "src/entity/**/*.ts"
      : "build/entity/**/*.js",
  ],
  migrations: [
    process.env.NODE_ENV === "test"
      ? "src/migration/**/*.ts"
      : "build/migration/**/*.js",
  ],
  cli: {
    entitiesDir:
      process.env.NODE_ENV === "test" ? "src/entity" : "build/entity",
    migrationsDir:
      process.env.NODE_ENV === "test" ? "src/migration" : "build/migration",
  },
  synchronize: false,
  logging: false,
};