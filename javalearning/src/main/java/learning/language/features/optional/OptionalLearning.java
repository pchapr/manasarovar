package learning.language.features.optional;

import learning.language.features.data.Commitment;
import learning.language.features.data.Loan;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Optional;

/**
 * TODO: Class Doc
 *
 * @author Praveen Chappidi
 */
public class OptionalLearning {

    public static void main(String... args) {
        OptionalLearning learning = new OptionalLearning();

        String[] loanValues = {"loan1", "loan2"};
        List<String> loanNumbers = Arrays.asList(loanValues);

        //Commitment commitment = learning.new Commitment(loanNumbers);
        Commitment commitment = new Commitment();

        //Generates Null Pointer Exception
        //String loanNumber = commitment.getAssociatedLoans().get(0).getLoanNumbers();

        //Code to avoid null pointer exception
        //commitment.getAssociatedLoans().flatMap(Loan::getLoanNumber).ifPresent(() -> System::);

    }
}
