
import java.util.*;
import java.util.function.Predicate;


public class CollectionLearning {

    private void learningStreams(List<Person> people) {
        System.out.println(">>>"+people.size());


    }

    private void printPerson(List<Person> people, Predicate<Person> test) {
        for (Person p:people) {
            if(test.test(p)) {
                System.out.println(p.getName());
            }
        }
    }

    public static void main(String ...args) {
        CollectionLearning learning = new CollectionLearning();
        String firstName = "FirstName";
        String lastName = "LastName";
        int age = 10;

        List<Person> people = new ArrayList<Person>();
        for(int i=1; i<101; i++) {
            Person person = new Person();
            person.setName(lastName+' '+firstName+i);
            person.setAge(age*(i/2));
            if(i%2 == 0) {
                person.setSex(Person.Sex.MALE);
            }
            people.add(person);
        }
        learning.printPerson(people, p -> p.getSex() == Person.Sex.MALE);
        learning.learningStreams(people);
    }
}