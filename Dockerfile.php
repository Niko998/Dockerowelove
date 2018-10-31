FROM php:7.2.7-fpm-alpine3.7

RUN apk update -y && apk add -y openssl zip unzip git 

RUN apk --no-cache add libpng-dev
RUN docker-php-ext-install bcmath gd zip
RUN apk add --no-cache --virtual .build-deps zlib-dev

RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer
RUN docker-php-ext-install pdo mbstring  pdo_mysql zip
