FROM php:8.2-cli

WORKDIR /app

COPY . .

RUN chmod -R 777 /app/php

EXPOSE 10000

CMD ["php", "-S", "0.0.0.0:10000", "-t", "."]