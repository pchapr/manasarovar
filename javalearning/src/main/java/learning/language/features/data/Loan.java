
package learning.language.features.data;

import java.util.Optional;

/**
 * Loans associated with the Commitment
 *
 * @author Praveen Chappidi
 *
 */
public class Loan {

    private String loanNumber;

    public Loan(String loanNumber) {
        this.loanNumber = loanNumber;
    }

    public Optional<String> getLoanNumber() {
        return Optional.of(loanNumber);
    }

}
