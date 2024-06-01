<?php
$db = new SQLite3('users.db');

// Получение данных из таблицы пользователей
$result = $db->query('SELECT * FROM users');

echo "<table border='1'>";
echo "<tr><th>ID</th><th>Имя пользователя</th><th>Пароль</th></tr>";

while ($row = $result->fetchArray(SQLITE3_ASSOC)) {
    echo "<tr>";
    echo "<td>" . $row['id'] . "</td>";
    echo "<td>" . $row['username'] . "</td>";
    echo "<td>" . $row['password'] . "</td>";
    echo "</tr>";
}

echo "</table>";

$db->close();
?>
