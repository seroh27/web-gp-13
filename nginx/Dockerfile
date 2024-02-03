FROM nginx:latest

# update configuration
COPY ./conf.d /etc/nginx/conf.d

EXPOSE 90

CMD ["nginx", "-g", "daemon off;"]