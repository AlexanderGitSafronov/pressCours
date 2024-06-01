<?php
include 'database.php'; // Подключение к базе данных

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT); // Хеширование пароля

    // Проверка на существование имени пользователя
    $stmt = $db->prepare('SELECT * FROM users WHERE username = :username');
    $stmt->bindValue(':username', $username, SQLITE3_TEXT);
    $result = $stmt->execute();

    if ($result->fetchArray()) {
        echo "Ім'я користувача вже зайнято.";
    } else {
        // Вставка данных в таблицу
        $stmt = $db->prepare('INSERT INTO users (username, password) VALUES (:username, :password)');
        $stmt->bindValue(':username', $username, SQLITE3_TEXT);
        $stmt->bindValue(':password', $password, SQLITE3_TEXT);

        if ($stmt->execute()) {
         

          echo "
    <!DOCTYPE html>
    <html lang='ru'>
    <head>
        <meta charset='UTF-8'>
        <meta name='viewport' content='width=device-width, initial-scale=1.0'>
        <title>Регистрация успешна</title>
        <style>
            .message {
                position: fixed;
                top: 50%;
                left: 50%;
                transform: translate(-50%, -50%);
                padding: 20px;
                background-color: #4CAF50;
                color: white;
                font-size: 18px;
                border-radius: 5px;
                box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                text-align: center;
            }
        </style>
    </head>
    <body>
        <div class='message' id='successMessage'>
            Реєстрація успішна. Ви будете перенаправлені через 2 секунди.
        </div>
        <script type='text/javascript'>
            setTimeout(function() {
                document.getElementById('successMessage').style.display = 'none';
                window.location.href = './login.html';
            }, 2000);
        </script>
    </body>
    </html>";
        } else {
            echo "Помилка під час реєстрації.";
        }
    }
}
?>
