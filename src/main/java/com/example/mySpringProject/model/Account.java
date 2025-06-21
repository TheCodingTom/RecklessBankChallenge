package com.example.mySpringProject.model;

import java.math.BigDecimal; // with BigDecimal (and not float or double) money calculations are exact

public class Account {
    private String id;
    private BigDecimal balance;

    // constructor to create new accounts
    public Account(String id) {
        this.id = id;
        this.balance = BigDecimal.ZERO;
    }

    // synch makes it thread-safe
    public synchronized void deposit(BigDecimal amount) {
        balance = balance.add(amount);
    }

    public synchronized void withdraw(BigDecimal amount) throws Exception {
        if (balance.compareTo(amount) < 0) {
            throw new Exception("Insufficient funds");
        }
        balance = balance.subtract(amount);
    }

    // Getters and setters
    public String getId() {
        return id;
    }

    public BigDecimal getBalance() {
        return balance;
    }

}
