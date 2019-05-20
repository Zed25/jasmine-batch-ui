FROM nginx
COPY dist/jasmine-batch/ /usr/share/nginx/html
EXPOSE 80
