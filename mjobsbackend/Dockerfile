FROM python:3
WORKDIR /app
ADD . /app

RUN python3 -m pip install -r requirements.txt

ENV STATIC_ROOT /staticfiles
CMD ["/app/entrypoint.sh"]