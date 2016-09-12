FROM ubuntu:xenial
MAINTAINER Jari Hanhela <jarihanhela@gmail.com>

# Install necessary software applications
RUN apt-get update && \ 
    apt-get -y install \
    default-jre \
    default-jdk \
    nginx \
    git \
    wget

# Install Leiningen
RUN cd tmp && \
    wget https://raw.githubusercontent.com/technomancy/leiningen/stable/bin/lein && \
    chmod +x lein && \
    mv lein /usr/local/bin

# Get source code from GitHub
RUN cd tmp && \
    git clone https://github.com/Jarzka/Voimala.org.git

# Compile frontend
RUN cd tmp/Voimala.org && \
    lein do clean, scss once, cljsbuild once production;

# Move compiled frontend to the right place
RUN mkdir -p /var/www/Voimala.org/ && \
    mv tmp/Voimala.org/resources/public /var/www/Voimala.org/

# Compile backend (resources/public not included in the JAR file)
RUN cd tmp/Voimala.org && \
    lein uberjar;

# Move compiled backend to the right place
RUN mv tmp/Voimala.org/target/uberjar/voimala-0.1.0-SNAPSHOT-standalone.jar /var/www/Voimala.org/voimala.jar

# Copy assets
COPY images /var/www/Voimala.org/public/images
COPY projects /var/www/Voimala.org/public/projects
COPY aarrearkku /var/www/Voimala.org/public/aarrearkku

# chmod assets
RUN cd /var/www/Voimala.org/public && \
    chmod -R 755 images && \
    chmod -R 755 projects && \
    chmod -R 755 aarrearkku

# Remove source files
RUN rm -r tmp/Voimala.org

# Configure nginx
COPY nginx.conf /etc/nginx/nginx.conf

# Copy run script
COPY run.sh /var/www/Voimala.org/run.sh

# Run
CMD sh /var/www/Voimala.org/run.sh