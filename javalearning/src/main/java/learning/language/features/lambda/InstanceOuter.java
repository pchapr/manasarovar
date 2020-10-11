/*******************************************************************************
 * Copyright (c) 2020. Fannie Mae. All rights reserved. Unpublished -- Rights reserved under the copyright laws of the United States and international conventions. Use of a copyright notice is precautionary only and does not imply publication or disclosure. This software contains confidential information and trade secrets of Fannie Mae. Use, disclosure, or reproduction is prohibited without the prior written consent of Fannie Mae.
 ******************************************************************************/

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
