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
