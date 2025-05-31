
package learning.language.features.lambda;

/**
 * TODO: Class Doc
 *
 * @author Praveen Chappidi
 */
public class InstanceOuter {
    public InstanceOuter(int xx) { x = xx; }

    private int x = 10;

    class InstanceInner {
        public void printSomething() {
            System.out.println("The value of x in my outer is " + x);
        }
    }

    public static void main(String... args) {
        InstanceOuter outer = new InstanceOuter(22);
        InstanceInner inner = outer.new InstanceInner();
        inner.printSomething();
    }
}
