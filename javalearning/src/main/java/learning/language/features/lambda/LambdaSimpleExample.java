
package learning.language.features.lambda;

public class LambdaSimpleExample {

    public static void main(String... args) {
        //Traditional way of using threads.

        Thread thread = new Thread(new ThreadClass());
        thread.start();

        //anonymous inner classes
        Runnable thread1 = new Runnable() {
            public void run() {
                System.out.println("Traditional inner classes");
            }
        };
        new Thread(thread1).start();

        //New functional programming
        Runnable newThreadEx = () -> System.out.println("Lambda Thread");
        new Thread(newThreadEx).start();
    }


    private static class ThreadClass implements Runnable {
        @Override
        public void run() {
            System.out.println("Traditional thread");
        }
    }
}
