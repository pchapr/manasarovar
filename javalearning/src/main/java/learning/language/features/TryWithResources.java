/*******************************************************************************
 * Copyright (c) 2020. Fannie Mae. All rights reserved. Unpublished -- Rights reserved under the copyright laws of the United States and international conventions. Use of a copyright notice is precautionary only and does not imply publication or disclosure. This software contains confidential information and trade secrets of Fannie Mae. Use, disclosure, or reproduction is prohibited without the prior written consent of Fannie Mae.
 ******************************************************************************/

package learning.language.features;

import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;

/**
 * TODO: Class Doc
 *
 * @author Praveen Chappidi
 */
public class TryWithResources {

    public static void main(String[] args) {
        try (FileOutputStream fis = new FileOutputStream("test.txt")) {
            System.out.println(fis.getFD());
        } catch (FileNotFoundException oops) {
            oops.printStackTrace();
        } catch (IOException e) {
            e.printStackTrace();
        }
    }
}
