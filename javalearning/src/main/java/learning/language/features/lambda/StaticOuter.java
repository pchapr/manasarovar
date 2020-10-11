/*******************************************************************************
 * Copyright (c) 2020. Fannie Mae. All rights reserved. Unpublished -- Rights reserved under the copyright laws of the United States and international conventions. Use of a copyright notice is precautionary only and does not imply publication or disclosure. This software contains confidential information and trade secrets of Fannie Mae. Use, disclosure, or reproduction is prohibited without the prior written consent of Fannie Mae.
 ******************************************************************************/

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
