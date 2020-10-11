/*******************************************************************************
 * Copyright (c) 2020. Fannie Mae. All rights reserved. Unpublished -- Rights reserved under the copyright laws of the United States and international conventions. Use of a copyright notice is precautionary only and does not imply publication or disclosure. This software contains confidential information and trade secrets of Fannie Mae. Use, disclosure, or reproduction is prohibited without the prior written consent of Fannie Mae.
 ******************************************************************************/

package learning.language.features.collections;

import java.util.ArrayList;
import java.util.List;

/**
 * TODO: Class Doc
 *
 * @author Praveen Chappidi
 */
public class GenericsCollections {

  public static void main(String[] args) {
    List<String> names = new ArrayList<>();
    names.add("Praveen");
    System.out.println(names.get(0));
  }
}
