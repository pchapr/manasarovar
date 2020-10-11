/*******************************************************************************
 * Copyright (c) 2020. Fannie Mae. All rights reserved. Unpublished -- Rights reserved under the copyright laws of the United States and international conventions. Use of a copyright notice is precautionary only and does not imply publication or disclosure. This software contains confidential information and trade secrets of Fannie Mae. Use, disclosure, or reproduction is prohibited without the prior written consent of Fannie Mae.
 ******************************************************************************/

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
