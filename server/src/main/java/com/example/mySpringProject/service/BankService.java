package com.example.mySpringProject.service;

import java.math.BigDecimal;
import java.util.List;
import java.util.ArrayList;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;

import org.springframework.stereotype.Service;

import com.example.mySpringProject.model.Account;

@Service
public class BankService {

    // ConcurrentHashMap stores the account data in memory, no need for a DB
    private final Map<String, Account> accounts = new ConcurrentHashMap<>();

    public Account createAccount(String id) {
        Account acc = new Account(id);
        accounts.put(id, acc);
        return acc;
    }

    public Account deposit(String id, BigDecimal amount) {
        Account account = accounts.get(id);
        if (account == null) {
            throw new IllegalArgumentException("Account not found: " + id);
        }
        account.deposit(amount);
        return account;
    }

    public Account withdraw(String id, BigDecimal amount) {
        Account account = accounts.get(id);
        if (account == null) {
            throw new IllegalArgumentException("Account not found: " + id);
        }
        account.withdraw(amount);
        return account;
    }

    public Account transfer(String fromId, String toId, BigDecimal amount) {
        Account account1 = accounts.get(fromId);
        Account account2 = accounts.get(toId);

        if (account1 == null || account2 == null) {
            throw new IllegalArgumentException("One or both accounts not found.");
        }
        account1.withdraw(amount);
        account2.deposit(amount);
        return account1;
        /* create new class to return both accounts */
    }

    public List<Account> getAllAccounts() {
        return new ArrayList<>(accounts.values());
    }
}
