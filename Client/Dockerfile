FROM nginx:1.12-alpine

RUN chown -R nginx /var/cache/nginx \
    && chmod 777 /var/run \
    && chmod 777 /var/cache/nginx

ARG VERSION
ENV APP_VERSION ${VERSION}

# run as non-root user
USER nginx

COPY config/nginx/nginx.conf /etc/nginx/nginx.conf
COPY config/nginx/default.conf /etc/nginx/conf.d/default.conf

COPY ./dist /usr/share/nginx/html/

EXPOSE 8080