FROM mcr.microsoft.com/devcontainers/base:jammy

RUN apt-get update && \
    apt-get -y upgrade && \
    apt-get install -y curl unzip wget sudo

RUN curl -sfL https://raw.githubusercontent.com/reviewdog/reviewdog/master/install.sh | sh -s


