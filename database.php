<?php
$db = new SQLite3('users.db');

// Создание таблицы пользователей, если она еще не существует
$query = 'CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT NOT NULL UNIQUE,
    password TEXT NOT NULL
)';
$db->exec($query);

// Проверка наличия столбца login_time в таблице users
$query_check_column = 'PRAGMA table_info(users)';
$result = $db->query($query_check_column);

$column_exists = false;
while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    if ($row['name'] === 'login_time') {
        $column_exists = true;
        break;
    }
}

// Если столбец не существует, добавляем его
if (!$column_exists) {
    $query_add_column = 'ALTER TABLE users ADD COLUMN login_time INTEGER DEFAULT 0';
    $db->exec($query_add_column);
}
?>