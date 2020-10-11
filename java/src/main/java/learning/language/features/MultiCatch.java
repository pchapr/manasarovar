package learning.language.features;

import java.io.FileInputStream;
import java.io.IOException;
import java.text.ParseException;
import java.text.SimpleDateFormat;

/**
 *
 */
public class MultiCatch {
    public static void main(String... args) {
        try {
            FileInputStream input = new FileInputStream("test");
            input.read();
            SimpleDateFormat format = new SimpleDateFormat("yyyy-MM-dd");
            format.parse("test");
        } catch (IOException | ParseException oops) {
            oops.printStackTrace();
        }
    }
}