# Brand Subdomain Setup Guide

## Инструкция по настройке brand.targetlink.net

Интерактивный брендбук создан и готов к использованию!

### Что уже сделано ✅

1. **HTML страница с брендбуком создана**
   - Расположение: `/var/www/brand.targetlink.net/index.html`
   - Интерактивные элементы с копированием цветов
   - Все компоненты, цвета, градиенты, типографика

2. **Nginx настроен**
   - Конфигурация: `/etc/nginx/sites-available/brand.targetlink.net`
   - HTTP работает ✓
   - HTTPS настроен (использует существующий сертификат targetlink.net)

3. **Страница доступна локально**
   - Тест: `curl -H "Host: brand.targetlink.net" http://localhost` ✓

### Что нужно сделать

#### Шаг 1: Добавить DNS запись в Cloudflare

1. Зайдите в панель Cloudflare
2. Выберите домен targetlink.net
3. Перейдите в раздел DNS
4. Добавьте новую запись:
   ```
   Type: A
   Name: brand
   IPv4 address: 45.91.237.114
   Proxy status: Серое облако (DNS only) - ВРЕМЕННО
   TTL: Auto
   ```
5. Сохраните запись

#### Шаг 2: Расширить SSL сертификат (после настройки DNS)

Подождите 1-2 минуты после добавления DNS, затем выполните на сервере:

```bash
# Остановить Nginx
sudo systemctl stop nginx

# Расширить сертификат, добавив brand.targetlink.net
sudo certbot certonly --standalone \
  -d targetlink.net \
  -d www.targetlink.net \
  -d brand.targetlink.net \
  --expand \
  --non-interactive \
  --agree-tos \
  --email admin@targetlink.net

# Запустить Nginx
sudo systemctl start nginx
```

Или используйте готовый скрипт:

```bash
cd /root/targetlink-website
./scripts/expand-ssl.sh
```

#### Шаг 3: Включить Cloudflare прокси (после SSL)

1. Вернитесь в Cloudflare DNS
2. Найдите запись `brand.targetlink.net`
3. Нажмите на серое облако, сделав его оранжевым (Proxied)
4. В настройках SSL/TLS выберите режим **"Full (strict)"**

### Проверка

После настройки DNS и SSL, сайт будет доступен по адресу:

- **HTTP:** http://brand.targetlink.net
- **HTTPS:** https://brand.targetlink.net

### Возможности брендбука

✓ **Копирование цветов** - клик на любую цветовую карточку копирует HEX/CSS в буфер
✓ **Интерактивная навигация** - плавная прокрутка к секциям
✓ **Все элементы бренда:**
  - Цветовая палитра (основные и дополнительные цвета)
  - Градиенты (3 варианта)
  - Типографика (Sora для заголовков, Inter для текста)
  - Компоненты (кнопки, карточки, бейджи, иконки)
  - Логотип
  - Гайдлайны по использованию
  - Стандарты доступности

### Обновление брендбука

Файл находится здесь: `/var/www/brand.targetlink.net/index.html`

После изменений перезагрузите Nginx:
```bash
sudo systemctl reload nginx
```

### Техническая информация

**Файлы:**
- HTML: `/var/www/brand.targetlink.net/index.html`
- Nginx config: `/etc/nginx/sites-available/brand.targetlink.net`
- SSL cert: `/etc/letsencrypt/live/targetlink.net/` (shared)

**Используемые технологии:**
- Tailwind CSS (CDN)
- Google Fonts (Sora, Inter)
- Vanilla JavaScript (копирование, навигация)

**Размер:** ~23 KB (один HTML файл, без внешних зависимостей кроме CDN)

---

Для вопросов: brand@targetlink.net
