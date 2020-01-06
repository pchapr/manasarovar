package learning.language.collections;

import learning.language.dao.Person;
import org.junit.jupiter.api.*;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

@Tag("UnitTests")
@Tag("Collection")
@DisplayName("Collection Features Learning testcases")
@Timeout(value = 100, unit = TimeUnit.MILLISECONDS)
class CollectionFeaturesLearningTest {

    private final CollectionFeaturesLearning collectionFeaturesLearning = new CollectionFeaturesLearning();

    @DisplayName("Generate a list of objects based on the count")
    @ParameterizedTest
    @ValueSource(ints = {10, 12, 15, 5, 25, 2000})
    void generateObjectList(int count) {
        List<Person> people = collectionFeaturesLearning.generateObjectList(count);
        assertEquals(count, people.size(), "Generated object count does not match.");
    }

    @DisplayName("Filter Person based on the Predicate provided")
    @Test void filterPerson() {
        List<Person> people = collectionFeaturesLearning.generateObjectList(20);
        List<Person> males = collectionFeaturesLearning.getMales(people);
        assertNotNull(males, "Filtered list is returning null");
        assertEquals(10, males.size(), "Filtered list does not match the expected count");
    }

    @DisplayName("Filter list of Persons to return only males")
    @Test void getMales() {
        List<Person> people = collectionFeaturesLearning.generateObjectList(20);
        List<Person> males = collectionFeaturesLearning.getMales(people);
        assertNotNull(males, "Filtered list is returning null");
        assertEquals(10, males.size(), "Filtered list does not match the expected count");
    }

    @DisplayName("File list of Persons to return females")
    @Test void getFemales() {
        List<Person> people = collectionFeaturesLearning.generateObjectList(20);
        List<Person> females = collectionFeaturesLearning.getFemales(people);
        assertNotNull(females, "Filtered list is returning null");
        assertEquals(10, females.size(), "Filtered list does not match the expected count");
    }
}