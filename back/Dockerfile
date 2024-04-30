FROM python:alpine

ENV PORT=8080
ENV DJANGO_SUPERUSER_USERNAME=admin
ENV DJANGO_SUPERUSER_EMAIL=admin@example.com
ENV DJANGO_SUPERUSER_PASSWORD=admin


COPY . /app
WORKDIR /app
RUN chmod +x init.sh
RUN ./init.sh

CMD python manage.py runserver 0.0.0.0:$PORT