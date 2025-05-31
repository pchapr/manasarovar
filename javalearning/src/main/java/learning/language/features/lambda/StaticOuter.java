package learning.language.features.lambda;

/**
 * TODO: Class Doc
 *
 * @author Praveen Chappidi
 */
public class StaticOuter {
    private static int x = 24;

    static class StaticInner {
        public void printSomething() {
            System.out.println("The value of x in my outer is " + x);
        }
    }

    public static void main(String... args) {
        StaticInner inner = new StaticOuter.StaticInner();
        inner.printSomething();
    }
}
