FROM ubuntu:22.04

ENV APT_KEY_DONT_WARN_ON_DANGEROUS_USAGE=DontWarn
ENV DEBCONF_NOWARNINGS=yes

RUN set -x && \
    apt-get update && apt-get upgrade -y
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update && apt-get install -y tzdata 
RUN apt-get install -y locales
RUN apt-get install -y language-pack-ja
RUN apt-get install -y sudo
RUN apt-get install -y curl
#RUN apt-get install -y nodejs npm
# https://github.com/nodesource/distributions?tab=readme-ov-file#ubuntu-versions

RUN curl -fsSL https://deb.nodesource.com/setup_lts.x | bash - &&\
apt-get install -y nodejs

ENV TZ=Asia/Tokyo LANG=ja_JP.UTF-8 LANGUAGE=ja_JP:ja

CMD ["/bin/bash"]

