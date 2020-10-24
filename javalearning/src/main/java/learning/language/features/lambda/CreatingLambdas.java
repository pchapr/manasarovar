/*******************************************************************************
 * Copyright (c) 2020. Fannie Mae. All rights reserved. Unpublished -- Rights reserved under the copyright laws of the United States and international conventions. Use of a copyright notice is precautionary only and does not imply publication or disclosure. This software contains confidential information and trade secrets of Fannie Mae. Use, disclosure, or reproduction is prohibited without the prior written consent of Fannie Mae.
 ******************************************************************************/

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
