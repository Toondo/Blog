# 베이스 이미지로 Node.js 버전 20.9.0을 사용합니다.
FROM node:20.9.0

# 작업 디렉토리를 '/app'으로 설정합니다.
WORKDIR /app

# package.json과 yarn.lock 파일을 작업 디렉토리로 복사합니다.
COPY package.json ./
COPY yarn.lock ./

# 의존성을 설치합니다.
RUN yarn install --frozen-lockfile

# 필요한 소스 파일들을 작업 디렉토리로 복사합니다.
# 주의: node_modules와 .next 디렉토리는 복사하지 않습니다. (이들은 .dockerignore 파일에 명시해야 합니다.)
COPY public ./public
COPY src ./src
COPY .env* ./
COPY next.config.mjs ./
COPY .eslintrc.js ./
COPY .prettierrc.yml ./
COPY .stylelintrc ./
COPY tsconfig.json ./

# 애플리케이션을 빌드합니다.
RUN yarn build

# 애플리케이션 실행을 위한 포트를 엽니다.
EXPOSE 3000

# 애플리케이션을 실행합니다.
CMD ["yarn", "start"]