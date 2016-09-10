FROM ubuntu:xenial
MAINTAINER Jari Hanhela <jarihanhela@gmail.com>

# Install necessary software
RUN apt-get update && \ 
    apt-get -y install \
    default-jre \
    default-jdk \
    git \
    wget

RUN cd ~ && \
    wget https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein && \
    chmod +x lein && \
    mv lein /usr/local/bin

# Get source code from GitHub
RUN mkdir -p /var/www/app && \
    cd /var/www && \
    git clone https://github.com/Jarzka/Voimala.org.git

# Compile
RUN cd /var/www/Voimala.org && \
    lein do clean, deps, compile, scss once, cljsbuild once production, uberjar;

# Copy run script
COPY run.sh /var/www/Voimala.org/run.sh

# Run
CMD ["sh", "/var/www/Voimala.org/run.sh"]