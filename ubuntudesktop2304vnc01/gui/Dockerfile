FROM --platform=linux/amd64 ubuntu:23.04

RUN rm /bin/sh && ln -s /bin/bash /bin/sh

ENV DEBIAN_FRONTEND=noninteractive
RUN apt update -y && apt install --no-install-recommends -y xfce4 xfce4-goodies tigervnc-standalone-server novnc websockify sudo xterm init systemd snapd 
RUN apt update -y && apt install -y emacs net-tools curl wget git tzdata 
RUN apt update -y && apt install -y dbus-x11 x11-utils x11-xserver-utils x11-apps
# RUN apt install software-properties-common -y
# RUN add-apt-repository ppa:mozillateam/ppa -y
# RUN echo 'Package: *' >> /etc/apt/preferences.d/mozilla-firefox
# RUN echo 'Pin: release o=LP-PPA-mozillateam' >> /etc/apt/preferences.d/mozilla-firefox
# RUN echo 'Pin-Priority: 1001' >> /etc/apt/preferences.d/mozilla-firefox
# RUN echo 'Unattended-Upgrade::Allowed-Origins:: "LP-PPA-mozillateam:jammy";' | tee /etc/apt/apt.conf.d/51unattended-upgrades-firefox
RUN apt update -y && apt install -y firefox
RUN apt update -y && apt install -y xubuntu-icon-theme
RUN apt upgrade -y

RUN mkdir /usr/local/nvm
ENV NVM_DIR /usr/local/nvm
ENV NODE_VERSION 18.18.0
RUN curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.5/install.sh | bash \
    && . $NVM_DIR/nvm.sh \
    && nvm install $NODE_VERSION \
    && nvm alias default $NODE_VERSION \
    && nvm use default

ENV NODE_PATH $NVM_DIR/v$NODE_VERSION/lib/node_modules
ENV PATH $NVM_DIR/versions/node/v$NODE_VERSION/bin:$PATH

RUN touch /root/.Xauthority
EXPOSE 5901
EXPOSE 6080
CMD bash -c "vncserver -localhost no -SecurityTypes None -geometry 1024x768 --I-KNOW-THIS-IS-INSECURE && openssl req -new -subj "/C=JP" -x509 -days 365 -nodes -out self.pem -keyout self.pem && websockify -D --web=/usr/share/novnc/ --cert=self.pem 6080 localhost:5901 && tail -f /dev/null"
