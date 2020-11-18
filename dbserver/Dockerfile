FROM postgres:13.0-alpine

ENV POSTGRES_DB northwind
ENV POSTGRES_USER appuser
ENV POSTGRES_PASSWORD dbpass

COPY 01_northwind.sql /docker-entrypoint-initdb.d/01_northwind.sql
COPY 02_northwind_customizations.sql /docker-entrypoint-initdb.d/02_northwind_customizations.sql