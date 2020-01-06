package learning.language.dao;

import lombok.Data;
import lombok.Getter;

@Data
public class Person {
    public enum Sex {
        MALE, FEMALE
    }
    private String name;
    private int age;
    private String emailId;
    private Sex sex;
}
