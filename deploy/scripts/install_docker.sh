# Install Docker from the official repository
sudo apt-get update;
sudo apt-key adv --keyserver hkp://p80.pool.sks-keyservers.net:80 --recv-keys 58118E89F3A912897C070ADBF76221572C52609D;
echo "deb https://apt.dockerproject.org/repo ubuntu-xenial main" | sudo tee /etc/apt/sources.list.d/docker.list;
sudo apt-get update;
apt-cache policy docker-engine;
sudo apt-get install -y docker-engine;
# To prevent "Docker command can't connect to docker daemon"
# (it seems that this needs to be executed manually for the first time to work properly?)
sudo usermod -aG docker $(whoami);