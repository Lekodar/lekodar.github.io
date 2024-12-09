<!DOCTYPE html>
<html lang="ru">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Оптимизация изображений</title>
    <style>
        /* Стили для адаптивного интерфейса */
        body {
            font-family: Arial, sans-serif;
        }
        img {
            max-width: 100%;
            height: auto;
        }
    </style>
</head>
<body>

<h1>Пример страницы с оптимизированными изображениями</h1>

<script>
    const image = document.createElement('img');
    image.src = document.createElement('picture').innerHTML = `
        <source srcset="image.webp" type="image/webp">
        <img src="image.jpg" alt="Пример изображения">
    `;
    document.body.appendChild(image);
</script>

</body>
</html>
