## Notes 
《TypeScript实战指南》--2

```json
{
    "type": "sqlite",
    "database": "db.sqlite3",
    "autoSchemaSync": true,
    "synchronize": true,
    "logging": true,
    "entities": [
        "src/entity/**/*.ts"
    ],
    "migrations": [
        "src/migration/**/*.ts"
    ],
    "subscribers": [
        "src/subscrier/**/*.ts"
    ],
    "cli": {
        "entitiesDir": "src/entity",
        "migrationsDir": "src/migration",
        "subscribersDir": "src/subscriber"
    }
}
```