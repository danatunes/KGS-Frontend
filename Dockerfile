FROM node:16 as build
WORKDIR /app
COPY . .
COPY sts.crt /usr/local/share/ca-certificates/sts.crt
RUN update-ca-certificates
RUN npm config set cafile /usr/local/share/ca-certificates/sts.crt
RUN npm i
RUN npm run build
# production environment
FROM nginx:stable-alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]