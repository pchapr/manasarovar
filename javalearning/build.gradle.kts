plugins {
    java
}

group = "com.praveen.learning.java"
version = "1.0-SNAPSHOT"

repositories {
    mavenCentral()
}

java {
    toolchain {
        languageVersion.set(JavaLanguageVersion.of(24))
    }
}

dependencies {
    //compile("com.google.googlejavaformat:google-java-format:1.9")
    testImplementation("junit:junit:4.13.1")
    //testCompile("junit", "junit", "4.12")
}