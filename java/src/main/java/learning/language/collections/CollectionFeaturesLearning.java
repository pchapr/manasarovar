package learning.language.collections;

import learning.language.dao.Person;
import lombok.NonNull;

import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;
import java.util.stream.IntStream;

public class CollectionFeaturesLearning {

    public List<Person> filterPerson(@NonNull List<Person>  people, @NonNull Predicate<Person> validation) {
        return people.stream().filter(p -> validation.test(p)).collect(Collectors.toList());
    }

    public List<Person> generateObjectList(int count) {
        String firstName = "FirstName";
        String lastName = "LastName";
        int age = 10;

        List<Person> people = IntStream.range(1, count + 1).mapToObj(i -> {
            Person person = new Person();
            person.setName(new StringBuilder().append(lastName).append('-').append(firstName).append(i).toString());
            person.setAge(age * (i / 2));
            person.setSex(i % 2 == 0 ? Person.Sex.MALE : Person.Sex.FEMALE);
            person.setEmailId(new StringBuilder().append(firstName).append('_').append(lastName).append("@gmail.com").toString());
            return person;
        }).collect(Collectors.toList());
        return people;
    }

    public List<Person> getMales(@NonNull List<Person> people) {
        return filterPerson(people, p -> p.getSex() == Person.Sex.MALE);
    }

    public List<Person> getFemales(@NonNull List<Person> people) {
        return filterPerson(people, p -> p.getSex() == Person.Sex.FEMALE);
    }
}
