<?php
include 'database.php'; // Подключение к базе данных

session_start();

if (!isset($_SESSION['user_id'])) {
    echo "Ошибка: Пользователь не аутентифицирован.";
    exit();
}

$user_id = $_SESSION['user_id'];

$stmt = $db->prepare("SELECT login_time FROM users WHERE id = :user_id");
$stmt->bindValue(':user_id', $user_id, SQLITE3_INTEGER);
$result = $stmt->execute();
$row = $result->fetchArray(SQLITE3_ASSOC);

if ($row) {
    $loginTime = $row['login_time'];
    echo "Время входа пользователя: " . date('Y-m-d H:i:s', $loginTime);
} else {
    echo "Ошибка: Время входа пользователя не найдено.";
}
?>
