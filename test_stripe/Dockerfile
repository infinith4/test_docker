#stripe
FROM ubuntu:23.04
RUN apt update && apt -y upgrade && apt install -y ca-certificates

COPY --from=stripe/stripe-cli:latest /bin/stripe /usr/bin/stripe

RUN apt install -y tzdata
RUN apt install -y \
  nodejs \
  npm
