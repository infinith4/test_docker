#stripe
FROM ubuntu:20.04
RUN apt-get update && apt-get -y upgrade
COPY --from=stripe/stripe-cli:latest /bin/stripe /usr/bin/stripe