
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
