FROM ubuntu:xenial
MAINTAINER Jari Hanhela <jarihanhela@gmail.com>

# Install necessary software
RUN apt-get update && \ 
    apt-get -y install \
    default-jre \
    default-jdk \
    git \
    wget

RUN cd tmp && \
    wget https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein && \
    chmod +x lein && \
    mv lein /usr/local/bin

# Get source code from GitHub
RUN cd tmp && \
    git clone https://github.com/Jarzka/Voimala.org.git

# Copy assets
RUN mkdir -p tmp/Voimala.org/resources/public/images && \
    mkdir -p tmp/Voimala.org/resources/public/projects && \
    mkdir -p tmp/Voimala.org/resources/public/aarrearkku
COPY images tmp/Voimala.org/resources/public/images
COPY projects tmp/Voimala.org/resources/public/projects
COPY aarrearkku tmp/Voimala.org/resources/public/aarrearkku~

# Compile (with static assets included in the JAR file)
RUN cd tmp/Voimala.org && \
    lein do clean, deps, compile, scss once, cljsbuild once production, uberjar;

# Move compiled files to the right place
RUN mkdir -p /var/www/Voimala.org/resources/public && \
    mv tmp/Voimala.org/target/uberjar/voimala-0.1.0-SNAPSHOT-standalone.jar /var/www/Voimala.org/voimala.jar

# Remove source files
RUN rm -r tmp/Voimala.org

# Copy run script
COPY run.sh /var/www/Voimala.org/run.sh

# Run
CMD ["sh", "/var/www/Voimala.org/run.sh"]