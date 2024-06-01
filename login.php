<?php
// ini_set('display_errors', 1);
// ini_set('display_startup_errors', 1);
// error_reporting(E_ALL);
// include 'database.php'; // Подключение к базе данных

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $username = $_POST['username'];
//     $password = $_POST['password'];

//     // Проверка имени пользователя и пароля
//     $stmt = $db->prepare('SELECT * FROM users WHERE username = :username');
//     $stmt->bindValue(':username', $username, SQLITE3_TEXT);
//     $result = $stmt->execute();

//     $user = $result->fetchArray();
//     if ($user) {
//         if (password_verify($password, $user['password'])) {
//             echo "Авторизация успешна. Добро пожаловать, " . $user['username'] . "!";
//         } else {
//             echo "Неверный пароль.";
//         }
//     } else {
//         echo "Пользователь не найден.";
//     }
// }



// include 'database.php'; // Подключение к базе данных
// session_start();

// if ($_SERVER["REQUEST_METHOD"] == "POST") {
//     $username = $_POST['username'];
//     $password = $_POST['password'];

//     // Проверка имени пользователя и пароля
//     $stmt = $db->prepare('SELECT * FROM users WHERE username = :username');
//     $stmt->bindValue(':username', $username, SQLITE3_TEXT);
//     $result = $stmt->execute();

//     $user = $result->fetchArray();
//     if ($user) {
//         if (password_verify($password, $user['password'])) {
//             $_SESSION['user_id'] = $user['id']; // Сохраняем user_id в сессии

//               // Обновление времени входа пользователя
//               $loginTime = time(); // Текущее время в секундах с начала эпохи Unix
//               $stmt = $db->prepare('UPDATE users SET login_time = :loginTime WHERE id = :user_id');
//               if ($stmt) {
//                 $stmt->bindValue(':loginTime', $loginTime, SQLITE3_INTEGER);
//                 $stmt->bindValue(':user_id', $user['id'], SQLITE3_INTEGER);
//                 $stmt->execute();
//               } else {
//                   echo "Ошибка при подготовке запроса.";
//               }

//             // Перенаправляем на страницу с таймером
//             header("Location: ./content/content.php");
//             exit();
//         } else {
//             echo "Неверный пароль.";
//         }
//     } else {
//         echo "Пользователь не найден.";
//     }
// }






ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

include 'database.php'; // Подключение к базе данных
session_start();

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    // Проверка имени пользователя и пароля
    $stmt = $db->prepare('SELECT * FROM users WHERE username = :username');
    $stmt->bindValue(':username', $username, SQLITE3_TEXT);
    $result = $stmt->execute();

    $user = $result->fetchArray(SQLITE3_ASSOC);
    if ($user) {
        if (password_verify($password, $user['password'])) {
            $_SESSION['user_id'] = $user['id']; // Сохраняем user_id в сессии

            // Проверка и установка времени первого входа
            // Проверка и установка времени первого входа
if ($user['login_time'] == 0) {
    $loginTime = time(); // Текущее время в секундах с начала эпохи Unix
    echo "Установлено время первого входа: $loginTime<br>";

    $stmt = $db->prepare('UPDATE users SET login_time = :loginTime WHERE id = :user_id');
    $stmt->bindValue(':loginTime', $loginTime, SQLITE3_INTEGER);
    $stmt->bindValue(':user_id', $user['id'], SQLITE3_INTEGER);
    if ($stmt->execute()) {
        echo "Время первого входа успешно установлено<br>";
    } else {
        echo "Ошибка при установке времени первого входа<br>";
    }
}
            // Перенаправляем на страницу с таймером
            header("Location: content.php");
            exit();
            // echo "Авторизация успешна. Добро пожаловать, " . $user['username'] . "!";
        } else {
            echo "Неверный пароль.";
        }
    } else {
        echo "Пользователь не найден.";
    }
}




?>
