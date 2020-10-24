/*******************************************************************************
 * Copyright (c) 2020. Fannie Mae. All rights reserved. Unpublished -- Rights reserved under the copyright laws of the United States and international conventions. Use of a copyright notice is precautionary only and does not imply publication or disclosure. This software contains confidential information and trade secrets of Fannie Mae. Use, disclosure, or reproduction is prohibited without the prior written consent of Fannie Mae.
 ******************************************************************************/

package learning.language.features;

import java.io.IOException;
import java.util.logging.Logger;

/**
 * Catch multiple exception in a single try catch.
 *
 * @author Praveen Chappidi
 */
public class MultiCatch {

    private static final Logger logger = Logger.getLogger(MultiCatch.class.getName());

    public static void mainNewSchool(String... args) {
        MultiCatch mCatch = new MultiCatch();
        try {
            mCatch.methodOne();
            mCatch.methodTwo(5);
        } catch (ArrayIndexOutOfBoundsException | IOException | NullPointerException oops) {
            logger.severe(oops.getMessage());
            oops.printStackTrace();
        }
    }

    public static void main(String[] args) {
        MultiCatch multiCatch = new MultiCatch();
        try {
            //multiCatch.methodOne();
            multiCatch.methodTwo(5);
        } catch (ArrayIndexOutOfBoundsException oops) {
            logger.severe("Method one exception."+ oops.getMessage());
        } catch (NullPointerException oops) {
            logger.severe("Method two exception."+ oops.getMessage());
        } catch (IOException oops) {
            logger.severe(() -> "Method two exception 2 oops.getMessage()");
        }
    }

    private void methodOne() throws ArrayIndexOutOfBoundsException {
        throw new ArrayIndexOutOfBoundsException("Method 1 exception");
    }

    private void methodTwo(int value) throws NullPointerException, IOException {
        if (value < 1) {
            throw new NullPointerException("Null Pointer Exception");
        } else {
            throw new IOException("IO Exception");
        }
    }
}
