/*******************************************************************************
 * Copyright (c) 2020. Fannie Mae. All rights reserved. Unpublished -- Rights reserved under the copyright laws of the United States and international conventions. Use of a copyright notice is precautionary only and does not imply publication or disclosure. This software contains confidential information and trade secrets of Fannie Mae. Use, disclosure, or reproduction is prohibited without the prior written consent of Fannie Mae.
 ******************************************************************************/

package learning.language.features.optional;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

/**
 * TODO: Class Doc
 *
 * @author Praveen Chappidi
 */
public class OptionalLearningOldSchool {

    public static void main(String... args) {
        OptionalLearningOldSchool learning = new OptionalLearningOldSchool();

        String[] loanValues = {"loan1", "loan2"};
        List<String> loanNumbers = Arrays.asList(loanValues);

        Commitment commitment = learning.new Commitment(loanNumbers);

        //Generates Null Pointer Exception
        //String loanNumber = commitment.getAssociatedLoans().get(0).getLoanNumbers();

        //Code to avoid null pointer exception
        List<Loan> associatedLoans = commitment.getAssociatedLoans();

        if(associatedLoans != null && associatedLoans.size() > 0) {
            String loanNumber = commitment.getAssociatedLoans().get(0).getLoanNumbers();
            System.out.format("Loan Number: %s", loanNumber);
        }
    }


    /**
     * Loans associated with the Commitment
     */
    public class Loan {

        private String loanNumber;

        public Loan(String loanNumber) {
            this.loanNumber = loanNumber;
        }

        public String getLoanNumbers() {
            return loanNumber;
        }

    }

    /**
     * Loan Commitments
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

        public List<Loan> getAssociatedLoans() {
            return associatedLoans;
        }
    }
}
