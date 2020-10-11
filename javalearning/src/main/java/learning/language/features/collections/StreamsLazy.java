/*******************************************************************************
 * Copyright (c) 2020. Fannie Mae. All rights reserved. Unpublished -- Rights reserved under the copyright laws of the United States and international conventions. Use of a copyright notice is precautionary only and does not imply publication or disclosure. This software contains confidential information and trade secrets of Fannie Mae. Use, disclosure, or reproduction is prohibited without the prior written consent of Fannie Mae.
 ******************************************************************************/

package learning.language.features.collections;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

/**
 * TODO: Class Doc
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

}


