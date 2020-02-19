FROM node:13.8.0
ADD package.json /tmp/package.json
RUN cd tmp && npm install
RUN mkdir -p /opt/app && cp -a /tmp/node_modules /opt/app/
WORKDIR .

# Expose port and start application
EXPOSE 8080
WORKDIR /opt/app
ADD . /opt/app
RUN npm run tsc
CMD ["npm", "start"]