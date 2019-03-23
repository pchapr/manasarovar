import java.util.ArrayList;
import java.util.List;
import java.util.OptionalDouble;
import java.util.function.Function;
import java.util.function.Predicate;

public class LambdaLearning {

    private static Function<Student, String> eastrenStyle = p -> p.lastName +" "+p.firstName;
    private static Function<Student, String> westernStyle = p -> p.firstName + " " + p.lastName;

    public static List<Student> generateStudentsList() {
        List<Student> students = new ArrayList<Student>();

        for(int i=1; i< 100001; i++) {
            Student student = new Student();

            if(i%2 == 0) {
                student.firstName="Boy-"+i;
                student.lastName="LastName";
                student.sex = Sex.MALE;
                student.age = 21;
            } else {
                student.firstName="Girl-"+i;
                student.lastName="LastName";
                student.age = 19;
                student.sex = Sex.FEMALE;
            }
            students.add(student);
        }
        return students;
    }

    public static void main(String ...args) {
        System.out.println("===== Lambda Testing =========");

        Runnable thread1 = new Runnable() {
            @Override
            public void run() {
                System.out.println("========== Thread 1========");
            }
        };

        Runnable thread2 = () -> System.out.println("============== Thread 2 ==============");

        thread1.run();
        thread2.run();

        Student praveen = new Student();
        praveen.firstName = "Praveen";
        praveen.lastName = "Chappidi";

        System.out.println("Eastern Style Name:" + praveen.getFullName(eastrenStyle));
        System.out.println("Western Style Name:" + praveen.getFullName(westernStyle));

        List<Student> students = generateStudentsList();
        Predicate<Student> boys = p -> p.sex == Sex.MALE;
        Predicate<Student> girls = p -> p.sex == Sex.FEMALE;
        students.forEach(r -> { System.out.println(r.getFullName(eastrenStyle)); });
        long currenTime = System.currentTimeMillis();
        System.out.println("==========Filter with streams================");
        students.stream().filter(boys).forEach( r -> { System.out.println(r.getFullName(westernStyle)); });
        long diff = System.currentTimeMillis() - currenTime;
        System.out.println("=========== Time Taken:"+diff);
        currenTime=System.currentTimeMillis();
        students.parallelStream().filter(girls).forEach(r -> System.out.println(r.getFullName(eastrenStyle)));
        diff = System.currentTimeMillis() - currenTime;
        System.out.println("=========== Time Taken:"+diff);
        currenTime=System.currentTimeMillis();
        diff = System.currentTimeMillis()-currenTime;
        OptionalDouble avgBoysAge = students.stream().filter(boys).mapToInt(p -> p.age).average();
        System.out.println("Boys Avg Age: "+avgBoysAge.getAsDouble());
        System.out.println("=========== Time Taken: "+diff);
        currenTime=System.currentTimeMillis();
        diff = System.currentTimeMillis()-currenTime;
        OptionalDouble girlsAvgAge = students.parallelStream().filter(girls).mapToInt(p -> p.age).average();
        System.out.println("Girls Average Age: "+girlsAvgAge.getAsDouble());
        System.out.println("=========== Time Taken: "+diff);
    }

    public enum Sex{
        MALE, FEMALE
    }

    public static class Student {
        private String firstName;
        private String lastName;
        private int age;
        private Sex sex;

        public String getFullName(Function<Student, String> nameStyle) {
            return nameStyle.apply(this);
        }
    }
}
