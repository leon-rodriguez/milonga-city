import { Migrator, FileMigrationProvider } from 'kysely';

try {
  const migrator = new Migrator({
    db: 'verceldb',
    provider: FileMigrationProvider,
  });
  const response = await migrator.migrateToLatest('/migrations');
  console.log(response);
} catch (error) {
  console.log(error);
}
