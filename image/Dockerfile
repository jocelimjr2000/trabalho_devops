# Imagem base
FROM debian:buster-slim

# Atualizar Linux
RUN apt-get update
RUN apt-get upgrade -y

# Instalar sudo e curl
RUN apt-get install -y --no-install-recommends sudo curl

# Instalar NodeJS e NPM
RUN curl -fsSL https://deb.nodesource.com/setup_14.x | sudo -E bash -
RUN sudo apt install -y --no-install-recommends nodejs npm

# Limpar cache de instalação
RUN apt-get clean autoclean -y
RUN apt-get autoremove -y
RUN rm -rf /var/lib/apt/lists/*

# Criar pasta da aplicação
RUN mkdir -p /home/node/app

# Definir pasta padrão para executar os próximos comandos
WORKDIR /home/node/app

# Carregar script de entrypoint
COPY docker-entrypoint.sh /usr/local/bin/
RUN chmod 777 /usr/local/bin/docker-entrypoint.sh && ln -s /usr/local/bin/docker-entrypoint.sh /
ENTRYPOINT ["docker-entrypoint.sh"]

# Expor a porta
EXPOSE 3000

# Definir comando base
CMD [ "node" ]