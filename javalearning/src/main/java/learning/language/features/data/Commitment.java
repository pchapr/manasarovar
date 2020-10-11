/*******************************************************************************
 * Copyright (c) 2020. Fannie Mae. All rights reserved. Unpublished -- Rights reserved under the copyright laws of the United States and international conventions. Use of a copyright notice is precautionary only and does not imply publication or disclosure. This software contains confidential information and trade secrets of Fannie Mae. Use, disclosure, or reproduction is prohibited without the prior written consent of Fannie Mae.
 ******************************************************************************/

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