FROM ubuntu:xenial
MAINTAINER Jari Hanhela <jarihanhela@gmail.com>

# Build this image in the root directory of the project using the following command:
# docker build -t <name> -f deploy/docker/voimala.org-app/Dockerfile .

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
COPY resources/public/images /var/www/Voimala.org/public/images
COPY resources/public/projects /var/www/Voimala.org/public/projects
COPY resources/public/aarrearkku /var/www/Voimala.org/public/aarrearkku

# chmod
RUN cd /var/www && \
    find Voimala.org -type d -exec chmod 755 {} \; && \
    find Voimala.org -type f -exec chmod 744 {} \;

# Remove source files
RUN rm -r tmp/Voimala.org

# Configure nginx
COPY deploy/docker/voimala.org-app/nginx.conf /etc/nginx/nginx.conf

# Copy run script
COPY deploy/docker/voimala.org-app/run.sh /var/www/Voimala.org/run.sh

# Run
CMD sh /var/www/Voimala.org/run.sh