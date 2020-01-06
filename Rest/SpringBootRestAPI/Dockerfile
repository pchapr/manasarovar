FROM openjdk:13-jdk-alpine AS builder
WORKDIR build/libs
ARG APPJAR=build/libs/*.jar
RUN echo ${APPJAR}
COPY ${APPJAR} app.jar
RUN ls app.jar
RUN jar -xf ./app.jar

FROM openjdk:13-alpine
VOLUME /tmp
ARG DEPENDENCY=build/libs
COPY --from=builder ${DEPENDENCY}/BOOT-INF/lib /app/lib
COPY --from=builder ${DEPENDENCY}/META-INF /app/META-INF
COPY --from=builder ${DEPENDENCY}/BOOT-INF/classes /app
ENTRYPOINT ["java","-cp","app:app/lib/*","learning.rest.springboot.springbootrestapi.SpringBootRestApiApplication"]

