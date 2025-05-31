
package learning.language.features.collections;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * Why do we call Streams as lazy in Java
 *
 * @author Praveen Chappidi
 */
public class StreamsLazy {

    private static void lazyIntermediateOperations(List<String> students) throws InterruptedException {

        System.out.println("######## Executing lazyIntermediateOperations() : ######## ");
        Stream<String> studentStream = students.stream()
                .map(student -> {
                    System.out.printf("In Map : %s\n", student);
                    return student.toUpperCase();
                });

        System.out.println("After map statement");
        Thread.sleep(5000);
        System.out.println("Thread is in Running state now");
        studentStream.collect(Collectors.toList());

        System.out.println("######## Ending the execution of lazyIntermediateOperations() ######## ");
    }


    public static void main(String... args) {
        String[] studentArray = {"Student One", "Student Two", "Student Three"};
        List<String> students = Arrays.asList(studentArray);
//        try {
//            StreamsLazy.lazyIntermediateOperations(students);
//        } catch (InterruptedException oops) {
//            oops.printStackTrace();
//        }
        StreamsLazy.buildStringConcatination();
    }


    //given a map of String, String
    //combine all the values of the map into a stringbuilder
    public static void buildStringConcatination(){
        Map<String, String> errorMap = new HashMap<>();
        errorMap.put("Loan1", "Error String");
        errorMap.put("Loan2", "Error String 2");

        StringBuilder stringError = errorMap.values().stream().map(errorStr -> errorStr+" Append; ").collect(StringBuilder::new, StringBuilder::append, StringBuilder::append);

        System.out.println(stringError.toString());
    }

}


