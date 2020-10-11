plugins {
    java
}

group = "com.praveen.learning.java"
version = "1.0-SNAPSHOT"

repositories {
    maven {
        url = uri("http://plsysadm-ap59:8081/nexus/content/groups/public/")
    }
    mavenCentral()
}

dependencies {
    compile ("com.google.googlejavaformat:google-java-format:1.9")
    testImplementation("junit:junit:4.13")
    //testCompile("junit", "junit", "4.12")
}

configure<JavaPluginConvention> {
    sourceCompatibility = JavaVersion.VERSION_1_8
}