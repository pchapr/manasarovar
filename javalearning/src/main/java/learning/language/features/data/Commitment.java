
package learning.language.features.data;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

/**
 * Loan Commitments
 *
 * @author Praveen Chappidi
 */
public class Commitment {

    List<Loan> associatedLoans = new ArrayList<>();

    public Commitment() {

    }

    public Commitment(List<String> loanNumbers) {
        for(String loanNum : loanNumbers) {
            Loan loan = new Loan(loanNum);
            associatedLoans.add(loan);
        }
    }

    public Optional<List<Loan>> getAssociatedLoans() {
        return Optional.of(associatedLoans);
    }
}