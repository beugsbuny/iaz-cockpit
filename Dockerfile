FROM node:18

WORKDIR /app
COPY . .

RUN npm install -g typescript
RUN npm install
RUN tsc

CMD ["node", "dist/runWorkflow.js"]