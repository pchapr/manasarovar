
package learning.language.features.lambda;

public class CreatingLambdas {

    interface Greeting {
        public String sayHello(String name);
    }

    public static void printGreeting(String name, Greeting greeting) {
        System.out.println(greeting.sayHello(name));
    }

    public static void main(String[] args) {
        printGreeting("Praveen", (name) -> "Hello "+name);

//        printGreeting(" ", (String name) -> !name.isBlank() ? "Hello "+name : "Did you forget something?");
//
//        printGreeting(" ", (String name) -> {
//            if(name == null || name.isBlank()) {
//                return "Did you forget something?";
//            }
//            return name;
//        });
    }
}
